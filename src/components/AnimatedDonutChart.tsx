import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import * as d3 from 'd3';

interface DonutSegment {
  name: string;
  value: number;
  color: string;
}

interface AnimatedDonutChartProps {
  data?: DonutSegment[];
  width?: number;
  height?: number;
  innerRadius?: number;
  outerRadius?: number;
  padAngle?: number;
  cornerRadius?: number;
  showLabels?: boolean;
  showValues?: boolean;
  animationDuration?: number;
}

const AnimatedDonutChart = ({
  data = [],
  width = 400,
  height = 400,
  innerRadius = 80,
  outerRadius = 140,
  padAngle = 0.02,
  cornerRadius = 8,
  showLabels = true,
  showValues = true,
  animationDuration = 1.5
}: AnimatedDonutChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredSegment, setHoveredSegment] = useState<number | null>(null);
  const [selectedSegment, setSelectedSegment] = useState<number | null>(null);
  const selectedSegmentRef = useRef<number | null>(null);
  const selectedTooltipPosition = useRef<{ x: number; y: number } | null>(null);
  const [animatedData, setAnimatedData] = useState<any[]>([]);
  
  // Calculate total for percentages
  const total = data?.reduce((sum, d) => sum + (d.value || 0), 0) || 0;
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  
  useEffect(() => {
    selectedSegmentRef.current = selectedSegment;
  }, [selectedSegment]);

  useEffect(() => {
    if (!svgRef.current || !data || data.length === 0) return;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Validate and clean data
    const validData = data.filter(d => d && d.name && typeof d.value === 'number' && d.value > 0);
    
    if (validData.length === 0) {
      console.warn('AnimatedDonutChart: No valid data to display');
      return;
    }

    // Create pie generator
    const pie = d3.pie<DonutSegment>()
      .value(d => d.value)
      .sort(null)
      .padAngle(padAngle);

    // Create arc generator
    const arc = d3.arc<any>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .cornerRadius(cornerRadius);

    // Create hover arc generator (slightly larger)
    const hoverArc = d3.arc<any>()
      .innerRadius(innerRadius - 5)
      .outerRadius(outerRadius + 10)
      .cornerRadius(cornerRadius);

    // Create label arc generator
    const labelArc = d3.arc<any>()
      .innerRadius(outerRadius + 20)
      .outerRadius(outerRadius + 20);

    // Generate pie data
    const pieData = pie(validData);
    setAnimatedData(pieData);

    // Add drop shadow filter
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", "drop-shadow")
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
    
    filter.append("feGaussianBlur")
      .attr("in", "SourceAlpha")
      .attr("stdDeviation", 3);
    
    filter.append("feOffset")
      .attr("dx", 0)
      .attr("dy", 2);
    
    filter.append("feComponentTransfer")
      .append("feFuncA")
      .attr("type", "linear")
      .attr("slope", 0.2);
    
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode");
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");

    // Add glow filter
    const glowFilter = defs.append("filter")
      .attr("id", "glow");
    
    glowFilter.append("feGaussianBlur")
      .attr("stdDeviation", 4)
      .attr("result", "coloredBlur");
    
    const feMerge2 = glowFilter.append("feMerge");
    feMerge2.append("feMergeNode").attr("in", "coloredBlur");
    feMerge2.append("feMergeNode").attr("in", "SourceGraphic");

    // Create tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "donut-tooltip")
      .style("position", "absolute")
      .style("background", "rgba(20, 16, 13, 0.95)")
      .style("color", "#efe7dc")
      .style("padding", "12px 16px")
      .style("border", "1px solid rgba(201, 168, 115, 0.3)")
      .style("border-radius", "8px")
      .style("box-shadow", "0 4px 20px rgba(201, 168, 115, 0.3)")
      .style("font-size", "14px")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("z-index", 1000)
      .style("transition", "all 0.2s ease");

    // Add segments
    const segments = g.selectAll(".segment")
      .data(pieData)
      .enter()
      .append("g")
      .attr("class", "segment");

    segments.append("path")
      .attr("d", arc)
      .attr("fill", d => d.data.color)
      .attr("stroke", "#0f172a")
      .attr("stroke-width", 2)
      .style("filter", "url(#drop-shadow)")
      .style("cursor", "pointer")
      .style("opacity", 0)
      .transition()
      .duration(animationDuration * 1000)
      .delay((d, i) => i * 100)
      .style("opacity", 1)
      .attrTween("d", function(d) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function(t) {
          return arc(interpolate(t));
        };
      });

    // Add hover interactions
    segments.selectAll("path")
      .on("mouseover", function(event, d: any) {
        const index = pieData.indexOf(d);
        const selectedIndex = selectedSegmentRef.current;
        setHoveredSegment(index);

        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", hoverArc)
          .style("filter", "url(#glow)");

        if (d && d.data) {
          const percentage = ((d.data.value / total) * 100).toFixed(1);
          tooltip.transition()
            .duration(200)
            .style("opacity", 0.95);
          
          tooltip.html(`
            <div style="font-weight:bold; color:${d.data.color}; margin-bottom:4px;">
              ${d.data.name || 'Unknown'}
            </div>
            <div style="display:flex; justify-content:space-between; gap:16px;">
              <span>Amount:</span>
              <span style="font-weight:bold">${formatCurrency(d.data.value)}</span>
            </div>
            <div style="display:flex; justify-content:space-between; gap:16px;">
              <span>Percentage:</span>
              <span style="font-weight:bold">${percentage}%</span>
            </div>
          `)
            .style("left", (event.pageX + 15) + "px")
            .style("top", (event.pageY - 10) + "px");
        }
      })
      .on("mouseout", function(event, d) {
        const selectedIndex = selectedSegmentRef.current;

        if (selectedIndex !== null) {
          const selectedDatum = pieData[selectedIndex];
          setHoveredSegment(selectedIndex);
          d3.select(this)
            .transition()
            .duration(200)
            .attr("d", arc)
            .style("filter", "url(#drop-shadow)");

          segments.selectAll("path")
            .filter((_: any, i: number) => i === selectedIndex)
            .transition()
            .duration(200)
            .attr("d", hoverArc)
            .style("filter", "url(#glow)");

          if (selectedDatum && selectedDatum.data) {
            const percentage = ((selectedDatum.data.value / total) * 100).toFixed(1);
            const position = selectedTooltipPosition.current;
            const rect = svgRef.current?.getBoundingClientRect();
            const fallbackX = rect ? rect.left + rect.width / 2 : event.pageX;
            const fallbackY = rect ? rect.top + rect.height / 2 : event.pageY;
            tooltip.transition()
              .duration(200)
              .style("opacity", 0.95);
            tooltip.html(`
              <div style="font-weight:bold; color:${selectedDatum.data.color}; margin-bottom:4px;">
                ${selectedDatum.data.name || 'Unknown'}
              </div>
              <div style="display:flex; justify-content:space-between; gap:16px;">
                <span>Amount:</span>
                <span style="font-weight:bold">${formatCurrency(selectedDatum.data.value)}</span>
              </div>
              <div style="display:flex; justify-content:space-between; gap:16px;">
                <span>Percentage:</span>
                <span style="font-weight:bold">${percentage}%</span>
              </div>
            `)
              .style("left", (position?.x ?? fallbackX) + 15 + "px")
              .style("top", (position?.y ?? fallbackY) - 10 + "px");
          }
          return;
        }

        setHoveredSegment(null);
        d3.select(this)
          .transition()
          .duration(200)
          .attr("d", arc)
          .style("filter", "url(#drop-shadow)");

        tooltip.transition()
          .duration(200)
          .style("opacity", 0);
      })
      .on("click", function(event, d: any) {
        const index = pieData.indexOf(d);
        const selectedIndex = selectedSegmentRef.current;

        if (selectedIndex === index) {
          selectedSegmentRef.current = null;
          selectedTooltipPosition.current = null;
          setSelectedSegment(null);
          setHoveredSegment(null);
          segments.selectAll("path")
            .transition()
            .duration(150)
            .attr("d", arc)
            .style("filter", "url(#drop-shadow)");
          tooltip.transition()
            .duration(150)
            .style("opacity", 0);
          return;
        }

        selectedSegmentRef.current = index;
        selectedTooltipPosition.current = { x: event.pageX, y: event.pageY };
        setSelectedSegment(index);
        setHoveredSegment(index);
        segments.selectAll("path")
          .transition()
          .duration(150)
          .attr("d", arc)
          .style("filter", "url(#drop-shadow)");
        d3.select(this)
          .transition()
          .duration(150)
          .attr("d", hoverArc)
          .style("filter", "url(#glow)");
        const percentage = ((d.data.value / total) * 100).toFixed(1);
        tooltip.transition()
          .duration(200)
          .style("opacity", 0.95);
        tooltip.html(`
          <div style="font-weight:bold; color:${d.data.color}; margin-bottom:4px;">
            ${d.data.name || 'Unknown'}
          </div>
          <div style="display:flex; justify-content:space-between; gap:16px;">
            <span>Amount:</span>
            <span style="font-weight:bold">${formatCurrency(d.data.value)}</span>
          </div>
          <div style="display:flex; justify-content:space-between; gap:16px;">
            <span>Percentage:</span>
            <span style="font-weight:bold">${percentage}%</span>
          </div>
        `)
          .style("left", (event.pageX + 15) + "px")
          .style("top", (event.pageY - 10) + "px");
      });

    // Add labels
    if (showLabels) {
      const labels = g.selectAll(".label")
        .data(pieData)
        .enter()
        .append("g")
        .attr("class", "label")
        .style("opacity", 0);
      
      // Animate labels appearance
      labels.transition()
        .duration(animationDuration * 1000)
        .delay((d, i) => i * 100 + 500)
        .style("opacity", 1);

      labels.each(function(d: any) {
        if (!d || !d.data) return;
        const labelGroup = d3.select(this);
        const centroid = labelArc.centroid(d);
        const midAngle = Math.atan2(centroid[1], centroid[0]);
        const x = Math.cos(midAngle) * (outerRadius + 30);
        const y = Math.sin(midAngle) * (outerRadius + 30);
        
        // Add connecting line
        labelGroup.append("polyline")
          .attr("points", `${arc.centroid(d)[0]},${arc.centroid(d)[1]} ${x * 0.8},${y * 0.8} ${x},${y}`)
          .style("fill", "none")
          .style("stroke", "#7b6a5d")
          .style("stroke-width", 1)
          .style("opacity", 0.6);

        // Add label text
        const text = labelGroup.append("text")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", "0.35em")
          .style("text-anchor", x > 0 ? "start" : "end")
          .style("font-size", "12px")
          .style("fill", "#d4c7b8");

        text.append("tspan")
          .attr("x", x)
          .style("font-weight", "bold")
          .text(d.data.name);

        if (showValues) {
          const percentage = ((d.data.value / total) * 100).toFixed(1);
          text.append("tspan")
            .attr("x", x)
            .attr("dy", "1.2em")
            .style("font-weight", "normal")
            .style("fill", "#b7a999")
            .text(`${percentage}%`);
        }
      });
    }

    // Cleanup
    return () => {
      d3.select("body").selectAll(".donut-tooltip").remove();
    };
  }, [data, width, height, innerRadius, outerRadius, padAngle, cornerRadius, showLabels, showValues, animationDuration, total]);

  // Don't render if no data
  if (!data || data.length === 0) {
    return (
      <div className="donut-chart-container flex items-center justify-center" style={{ width, height }}>
        <p className="text-stone-500">No data available</p>
      </div>
    );
  }

  const activeIndex = selectedSegment ?? hoveredSegment;
  const activeData = activeIndex !== null ? animatedData[activeIndex] : null;
  const activePercentage = activeData ? ((activeData.data.value / total) * 100).toFixed(1) : null;
  const displayTitle = activeData ? activeData.data.name : 'Total';
  const displayValue = activeData ? formatCurrency(activeData.data.value) : formatCurrency(total);

  return (
    <div
      className="donut-chart-container flex flex-col items-center w-full"
      style={{ maxWidth: width }}
    >
      <div className="relative flex items-center justify-center w-full" style={{ aspectRatio: '1 / 1' }}>
        <svg ref={svgRef} className="donut-chart w-full h-full"></svg>
      </div>
      <div className="mt-4 text-center">
        <span className="text-xs uppercase tracking-wide text-stone-400">{displayTitle}</span>
        <span className="block text-2xl font-semibold text-white">{displayValue}</span>
        {activePercentage && (
          <span className="text-xs text-amber-300">{activePercentage}%</span>
        )}
      </div>
    </div>
  );
};

export default AnimatedDonutChart;
