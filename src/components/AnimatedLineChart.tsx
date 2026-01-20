import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';
import AnimatedNumber from './AnimatedNumber';

interface DataPoint {
  x: number;
  y: number;
  label: string;
}

interface DataSeries {
  name: string;
  data: DataPoint[];
  color: string;
}

interface AnimatedLineChartProps {
  data?: DataPoint[];
  series?: DataSeries[];
  width?: number;
  height?: number;
  strokeColor?: string;
  showPoints?: boolean;
  showGrid?: boolean;
  animate?: boolean;
  responsive?: boolean;
  yAxisLabel?: string;
  legendLabel?: string;
  animationDuration?: number;
}

const AnimatedLineChart = ({
  data: singleData,
  series,
  width: fixedWidth,
  height = 300,
  strokeColor = '#8b5cf6',
  showPoints = true,
  showGrid = true,
  animate: shouldAnimate = true,
  responsive = true,
  yAxisLabel = '',
  legendLabel = '',
  animationDuration = 2
}: AnimatedLineChartProps) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);
  const [nearestPoints, setNearestPoints] = useState<Array<{ seriesIndex: number; pointIndex: number; point: DataPoint }> | null>(null);
  const [containerWidth, setContainerWidth] = useState(fixedWidth || 800);
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0, 0.05], [0, 1]);

  // Handle responsive width
  useEffect(() => {
    if (!responsive || fixedWidth) return;
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsive, fixedWidth]);

  // Prepare data series
  const dataSeries: DataSeries[] = series || (singleData ? [{ name: legendLabel || 'Data', data: singleData, color: strokeColor }] : []);
  
  if (dataSeries.length === 0) return null;

  // Calculate chart dimensions with padding
  const padding = { top: 20, right: 20, bottom: 60, left: 80 };
  const chartWidth = containerWidth - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  // Find data ranges across all series
  const allPoints = dataSeries.flatMap(s => s.data);
  const xValues = allPoints.map(d => d.x);
  const yValues = allPoints.map(d => d.y);
  const xMin = Math.min(...xValues);
  const xMax = Math.max(...xValues);
  const yMin = 0; // Start from 0 for better visualization
  const yMax = Math.max(...yValues) * 1.1; // Add 10% padding

  // Scale functions
  const xScale = (value: number) => ((value - xMin) / (xMax - xMin)) * chartWidth + padding.left;
  const yScale = (value: number) => height - (((value - yMin) / (yMax - yMin)) * chartHeight + padding.bottom);

  // Inverse scale for mouse position
  const xScaleInverse = (pixelX: number) => ((pixelX - padding.left) / chartWidth) * (xMax - xMin) + xMin;

  // Create SVG paths for each series
  const createPath = (points: DataPoint[]) => {
    return points
      .map((point, index) => {
        const x = xScale(point.x);
        const y = yScale(point.y);
        return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
      })
      .join(' ');
  };

  // Create area path for gradient fill
  const createAreaPath = (points: DataPoint[]) => {
    const linePath = createPath(points);
    const lastX = xScale(points[points.length - 1].x);
    const firstX = xScale(points[0].x);
    return linePath + ` L ${lastX} ${yScale(0)} L ${firstX} ${yScale(0)} Z`;
  };

  // Find nearest data points to mouse position
  const findNearestPoints = useCallback((mouseX: number) => {
    if (!svgRef.current) return null;
    
    const rect = svgRef.current.getBoundingClientRect();
    const relativeX = mouseX - rect.left;
    const dataX = xScaleInverse(relativeX);
    
    // Find nearest points in each series
    const nearest = dataSeries.map((series, seriesIndex) => {
      let closestPoint = series.data[0];
      let closestIndex = 0;
      let minDistance = Math.abs(series.data[0].x - dataX);
      
      series.data.forEach((point, index) => {
        const distance = Math.abs(point.x - dataX);
        if (distance < minDistance) {
          minDistance = distance;
          closestPoint = point;
          closestIndex = index;
        }
      });
      
      return {
        seriesIndex,
        pointIndex: closestIndex,
        point: closestPoint
      };
    });
    
    return nearest;
  }, [dataSeries, xScaleInverse]);

  // Handle mouse move
  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    if (!svgRef.current) return;
    
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if mouse is within chart area
    if (x >= padding.left && x <= containerWidth - padding.right &&
        y >= padding.top && y <= height - padding.bottom) {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const nearest = findNearestPoints(e.clientX);
      setNearestPoints(nearest);
    } else {
      setMousePosition(null);
      setNearestPoints(null);
    }
  }, [containerWidth, height, padding, findNearestPoints]);

  const handleMouseLeave = useCallback(() => {
    setMousePosition(null);
    setNearestPoints(null);
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      const animation = animate(pathLength, 1, {
        duration: animationDuration,
        ease: "easeInOut"
      });
      return animation.stop;
    } else {
      pathLength.set(1);
    }
  }, [shouldAnimate, pathLength, animationDuration]);

  // Format number for display
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toFixed(0);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      <svg 
        ref={svgRef}
        width={containerWidth} 
        height={height} 
        className="overflow-visible"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: 'crosshair' }}
      >
        {/* Grid lines */}
        {showGrid && (
          <g className="opacity-20">
            {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
              const y = padding.top + chartHeight * (1 - tick);
              const value = yMin + (yMax - yMin) * tick;
              return (
                <g key={tick}>
                  <line
                    x1={padding.left}
                    y1={y}
                    x2={containerWidth - padding.right}
                    y2={y}
                    stroke="#7b6a5d"
                    strokeWidth="1"
                    strokeDasharray="2 2"
                  />
                  <text
                    x={padding.left - 10}
                    y={y + 4}
                    fill="#c1b4a5"
                    fontSize="12"
                    textAnchor="end"
                  >
                    {formatNumber(value)}
                  </text>
                </g>
              );
            })}
          </g>
        )}

        {/* Y-axis label */}
        {yAxisLabel && (
          <text
            x={20}
            y={height / 2}
            fill="#c1b4a5"
            fontSize="12"
            textAnchor="middle"
            transform={`rotate(-90 20 ${height / 2})`}
          >
            {yAxisLabel}
          </text>
        )}

        {/* Gradient definitions */}
        <defs>
          {dataSeries.map((series, idx) => (
            <linearGradient key={idx} id={`gradient-${idx}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={series.color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={series.color} stopOpacity="0.02" />
            </linearGradient>
          ))}
        </defs>

        {/* Render each series */}
        {dataSeries.map((series, seriesIndex) => {
          const pathData = createPath(series.data);
          const areaPath = createAreaPath(series.data);
          
          return (
            <g key={seriesIndex}>
              {/* Area fill */}
              <motion.path
                d={areaPath}
                fill={`url(#gradient-${seriesIndex})`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />

              {/* Main line */}
              <motion.path
                d={pathData}
                fill="none"
                stroke={series.color}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: shouldAnimate ? 1 : 1 }}
                transition={{
                  pathLength: { duration: 2, ease: "easeInOut" },
                }}
                style={{ pathLength, opacity }}
              />

              {/* Active point indicators */}
              {nearestPoints && nearestPoints.map((nearest) => {
                if (nearest.seriesIndex !== seriesIndex) return null;
                const x = xScale(nearest.point.x);
                const y = yScale(nearest.point.y);
                
                return (
                  <g key={`active-${seriesIndex}`}>
                    {/* Vertical line */}
                    <line
                      x1={x}
                      y1={padding.top}
                      x2={x}
                      y2={height - padding.bottom}
                      stroke={series.color}
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity="0.5"
                    />
                    
                    {/* Active point */}
                    <motion.circle
                      cx={x}
                      cy={y}
                      r="8"
                      fill={series.color}
                      stroke="white"
                      strokeWidth="3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    />
                  </g>
                );
              })}

              {/* Static data points (smaller, for reference) */}
              {showPoints && series.data.map((point, pointIndex) => {
                const x = xScale(point.x);
                const y = yScale(point.y);
                
                return (
                  <motion.circle
                    key={pointIndex}
                    cx={x}
                    cy={y}
                    r="3"
                    fill={series.color}
                    stroke="white"
                    strokeWidth="1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: shouldAnimate ? pointIndex * 0.1 + 0.5 : 0, duration: 0.3 }}
                    opacity={0.6}
                  />
                );
              })}
            </g>
          );
        })}

        {/* X-axis labels */}
        {dataSeries[0].data.map((point, index) => {
          const x = xScale(point.x);
          // Only show every nth label to avoid crowding
          if (dataSeries[0].data.length > 8 && index % 2 !== 0) return null;
          
          return (
            <text
              key={index}
              x={x}
              y={height - padding.bottom + 20}
              fill="#c1b4a5"
              fontSize="11"
              textAnchor="middle"
            >
              {point.label}
            </text>
          );
        })}

        {/* Legend */}
        {dataSeries.length > 1 && (
          <g transform={`translate(${containerWidth - 150}, 20)`}>
            {dataSeries.map((series, idx) => (
              <g key={idx} transform={`translate(0, ${idx * 25})`}>
                <rect
                  x="0"
                  y="0"
                  width="20"
                  height="3"
                  fill={series.color}
                  rx="1"
                />
                <text
                  x="25"
                  y="4"
                  fill="#c1b4a5"
                  fontSize="12"
                >
                  {series.name}
                </text>
              </g>
            ))}
          </g>
        )}
      </svg>

      {/* Floating tooltip that follows mouse */}
      {mousePosition && nearestPoints && (
        <motion.div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x + 15,
            top: mousePosition.y - 10,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-stone-950 border border-stone-700 rounded-lg p-3 shadow-2xl">
            <div className="text-xs text-stone-400 mb-2 font-semibold">
              {nearestPoints[0]?.point.label}
            </div>
            {nearestPoints.map((nearest, idx) => {
              const series = dataSeries[nearest.seriesIndex];
              return (
                <div key={idx} className="flex items-center justify-between gap-4 mb-1">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: series.color }}
                    />
                    <span className="text-xs text-stone-300">{series.name}:</span>
                  </div>
                  <span className="text-sm font-bold text-white">
                    <AnimatedNumber 
                      value={nearest.point.y} 
                      format={formatNumber}
                    />
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedLineChart;
