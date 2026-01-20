import { useEffect, useRef } from "react";
import * as d3 from "d3";

export interface RadarDataPoint {
  axis: string;
  value: number;
}

export interface RadarChartProps {
  data: RadarDataPoint[][];
  colors?: string[];
  width?: number;
  height?: number;
  levels?: number;
  maxValue?: number;
  labelFactor?: number;
  wrapWidth?: number;
  opacityArea?: number;
  dotRadius?: number;
  opacityCircles?: number;
  strokeWidth?: number;
  roundStrokes?: boolean;
  className?: string;
  labels?: string[];
  showLabels?: boolean;
  showAxes?: boolean;
  showLevels?: boolean;
}

const D3RadarChart = ({
  data = [],
  colors = ["#8b5cf6", "#3b82f6", "#06b6d4", "#10b981", "#f59e0b", "#ef4444"],
  width = 500,
  height = 500,
  levels = 5,
  maxValue = 100,
  labelFactor = 1.25,
  wrapWidth = 60,
  opacityArea = 0.35,
  dotRadius = 4,
  opacityCircles = 0.1,
  strokeWidth = 2,
  roundStrokes = true,
  className = "",
  labels = [],
  showLabels = true,
  showAxes = true,
  showLevels = true
}: RadarChartProps) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current || data.length === 0) return;

    // Clear previous SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    const margin = { top: 50, right: 50, bottom: 50, left: 50 };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    const radius = Math.min(chartWidth / 2, chartHeight / 2);
    
    // Format data for D3
    const allAxis = data[0].map(d => d.axis);
    const total = allAxis.length;
    const angleSlice = (Math.PI * 2) / total;
    
    // Scale for the radius
    const rScale = d3.scaleLinear()
      .range([0, radius])
      .domain([0, maxValue]);
    
    // Create the SVG container
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .attr("class", `radar-chart ${className}`)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    
    // Filter for drop shadow
    const defs = svg.append("defs");
    
    const filter = defs.append("filter")
      .attr("id", "glow");
      
    filter.append("feGaussianBlur")
      .attr("stdDeviation", "3.5")
      .attr("result", "coloredBlur");
      
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode").attr("in", "coloredBlur");
    feMerge.append("feMergeNode").attr("in", "SourceGraphic");

    // Create tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "radar-tooltip")
      .style("position", "absolute")
      .style("background", "rgba(15, 23, 42, 0.95)")
      .style("color", "#e2e8f0")
      .style("padding", "8px 12px")
      .style("border", "1px solid rgba(139, 92, 246, 0.3)")
      .style("border-radius", "6px")
      .style("box-shadow", "0 4px 20px rgba(139, 92, 246, 0.2)")
      .style("font-size", "12px")
      .style("pointer-events", "none")
      .style("opacity", 0)
      .style("z-index", 1000)
      .style("transition", "opacity 0.2s ease");
    
    // Draw the circular grid
    if (showLevels) {
      const axisGrid = svg.append("g").attr("class", "axis-grid");
      
      // Create the circular grid lines
      axisGrid.selectAll(".levels")
        .data(d3.range(1, levels + 1).reverse())
        .enter()
        .append("circle")
        .attr("class", "grid-circle")
        .attr("r", d => radius * d / levels)
        .style("fill", "none")
        .style("stroke", "#334155")
        .style("stroke-opacity", opacityCircles)
        .style("stroke-dasharray", "3,3");
      
      // Add level labels
      if (showLabels) {
        axisGrid.selectAll(".axis-label")
          .data(d3.range(1, levels + 1).reverse())
          .enter()
          .append("text")
          .attr("class", "axis-label")
          .attr("x", 5)
          .attr("y", d => -d * radius / levels)
          .attr("dy", "0.4em")
          .style("font-size", "10px")
          .style("fill", "#94a3b8")
          .style("opacity", 0.5)
          .style("pointer-events", "none")
          .text(d => Math.round(maxValue * d / levels) + "%");
      }
    }
    
    // Draw the axes
    if (showAxes) {
      const axis = svg.selectAll(".axis")
        .data(allAxis)
        .enter()
        .append("g")
        .attr("class", "axis");
      
      // Draw axis lines
      axis.append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", (d, i) => rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI / 2))
        .attr("y2", (d, i) => rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI / 2))
        .attr("class", "line")
        .style("stroke", "#334155")
        .style("stroke-opacity", 0.15)
        .style("stroke-width", "1px");
      
      // Draw axis labels
      if (showLabels) {
        axis.append("text")
          .attr("class", "axis-text")
          .attr("text-anchor", "middle")
          .attr("dy", "0.35em")
          .attr("x", (d, i) => rScale(maxValue * labelFactor) * Math.cos(angleSlice * i - Math.PI / 2))
          .attr("y", (d, i) => rScale(maxValue * labelFactor) * Math.sin(angleSlice * i - Math.PI / 2))
          .text(d => d)
          .call(wrap, wrapWidth)
          .style("font-size", "11px")
          .style("fill", "#cbd5e1");
      }
    }
    
    // Draw the radar chart blobs
    const radarLine = d3.lineRadial<RadarDataPoint>()
      .curve(d3.curveCatmullRomClosed.alpha(1.5))
      .radius(d => rScale(d.value))
      .angle((d, i) => i * angleSlice);
    
    // Create a wrapper for the blobs
    const blobWrapper = svg.append("g")
      .attr("class", "radar-wrapper");
      
    // Create a group for hover interactions
    const hoverGroup = svg.append("g")
      .attr("class", "radar-hover-group");

    data.forEach((d, i) => {
      const color = colors[i % colors.length];
      const seriesName = labels[i] || `Series ${i+1}`;

      // Filled area with increased curviness
      blobWrapper.append("path")
        .attr("class", `radar-area radar-area-${i}`)
        .attr("d", () => {
          const points = d.map((point, j) => ({
            x: rScale(point.value) * Math.cos(angleSlice * j - Math.PI / 2),
            y: rScale(point.value) * Math.sin(angleSlice * j - Math.PI / 2),
            value: point.value,
            axis: point.axis
          }));
          
          return d3.line<{x: number, y: number}>()
            .x(p => p.x)
            .y(p => p.y)
            .curve(d3.curveCatmullRomClosed.alpha(1.5))
            (points);
        })
        .style("fill", color)
        .style("fill-opacity", opacityArea)
        .style("filter", "url(#glow)");
      
      // Stroke outline with increased curviness
      blobWrapper.append("path")
        .attr("class", `radar-stroke radar-stroke-${i}`)
        .attr("d", () => {
          const points = d.map((point, j) => ({
            x: rScale(point.value) * Math.cos(angleSlice * j - Math.PI / 2),
            y: rScale(point.value) * Math.sin(angleSlice * j - Math.PI / 2),
            value: point.value,
            axis: point.axis
          }));
          
          return d3.line<{x: number, y: number}>()
            .x(p => p.x)
            .y(p => p.y)
            .curve(d3.curveCatmullRomClosed.alpha(1.5))
            (points);
        })
        .style("stroke", color)
        .style("stroke-width", `${strokeWidth}px`)
        .style("fill", "none")
        .style("filter", "url(#glow)");

      // Add dots at each data point with enhanced interactivity
      blobWrapper.selectAll(`.radar-circle-group-${i}`)
        .data(d)
        .enter()
        .append("circle")
        .attr("class", `radar-circle radar-circle-${i}`)
        .attr("r", dotRadius)
        .attr("cx", (d, j) => rScale(d.value) * Math.cos(angleSlice * j - Math.PI / 2))
        .attr("cy", (d, j) => rScale(d.value) * Math.sin(angleSlice * j - Math.PI / 2))
        .style("fill", color)
        .style("fill-opacity", 0.8)
        .style("stroke", "#fff")
        .style("stroke-width", "1px")
        .style("cursor", "pointer")
        .style("filter", "url(#glow)")
        .on("mouseover", function(event: MouseEvent, d) {
          // Show tooltip with detailed information
          tooltip.transition()
            .duration(200)
            .style("opacity", 0.9);
          
          tooltip.html(`
            <div style="font-weight:bold; margin-bottom:4px; color:${color}">
              ${seriesName}
            </div>
            <div>${d.axis}: <strong>${d.value}%</strong></div>
          `)
            .style("left", (event.pageX + 10) + "px")
            .style("top", (event.pageY - 28) + "px");
          
          // Highlight the current dot
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", dotRadius * 2);
        })
        .on("mouseout", function() {
          // Hide tooltip
          tooltip.transition()
            .duration(500)
            .style("opacity", 0);
          
          // Reset dot size
          d3.select(this)
            .transition()
            .duration(200)
            .attr("r", dotRadius);
        });
        
        // Add invisible larger hover areas over the line for better UX
        const points = d.map((point, j) => {
          return {
            x: rScale(point.value) * Math.cos(angleSlice * j - Math.PI / 2),
            y: rScale(point.value) * Math.sin(angleSlice * j - Math.PI / 2),
          };
        });
        
        hoverGroup.append("path")
          .attr("d", d3.line<{x: number, y: number}>()
            .x(p => p.x)
            .y(p => p.y)
            .curve(d3.curveCatmullRomClosed.alpha(0.8))(points)
          )
          .style("stroke", "transparent")
          .style("stroke-width", "15px")
          .style("fill", "none")
          .style("cursor", "pointer")
          .on("mouseover", function(event: MouseEvent) {
            // Highlight the area
            d3.selectAll(`.radar-area`)
              .style("fill-opacity", 0.1); 
            d3.select(`.radar-area-${i}`)
              .style("fill-opacity", 0.7);
            
            // Highlight the stroke
            d3.selectAll(`.radar-stroke`)
              .style("stroke-opacity", 0.1);
            d3.select(`.radar-stroke-${i}`)
              .style("stroke-opacity", 1)
              .style("stroke-width", `${strokeWidth * 1.5}px`);
              
            // Highlight the dots
            d3.selectAll(`.radar-circle`)
              .style("opacity", 0.1);
            d3.selectAll(`.radar-circle-${i}`)
              .style("opacity", 1)
              .attr("r", dotRadius * 1.5);
              
            // Show series name tooltip
            tooltip.transition()
              .duration(200)
              .style("opacity", 0.9);
            
            tooltip.html(`
              <div style="font-weight:bold; color:${color}">
                ${seriesName}
              </div>
            `)
              .style("left", (event.pageX + 10) + "px")
              .style("top", (event.pageY - 28) + "px");
          })
          .on("mouseout", function() {
            // Reset all
            d3.selectAll(".radar-area")
              .style("fill-opacity", opacityArea);
            d3.selectAll(".radar-stroke")
              .style("stroke-opacity", 1)
              .style("stroke-width", `${strokeWidth}px`);
            d3.selectAll(".radar-circle")
              .style("opacity", 1)
              .attr("r", dotRadius);
              
            // Hide tooltip
            tooltip.transition()
              .duration(500)
              .style("opacity", 0);
          });
    });

    // Cleanup function
    return () => {
      d3.select("body").selectAll(".radar-tooltip").remove();
    };
    
    // Helper function to wrap text
    function wrap(text: d3.Selection<d3.BaseType, unknown, d3.BaseType, unknown>, width: number) {
      text.each(function() {
        const text = d3.select(this);
        const words = text.text().split(/\s+/).reverse();
        let word;
        let line: string[] = [];
        let lineNumber = 0;
        const lineHeight = 1.1;
        const y = text.attr("y");
        const x = text.attr("x");
        const dy = parseFloat(text.attr("dy") || "0");
        
        let tspan = text.text(null).append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em");
        
        while (word = words.pop()) {
          line.push(word);
          tspan.text(line.join(" "));
          
          if ((tspan.node()?.getComputedTextLength() || 0) > width) {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text.append("tspan")
              .attr("x", x)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }

  }, [data, width, height, maxValue, levels, colors, labelFactor, wrapWidth, opacityArea, dotRadius, opacityCircles, strokeWidth, roundStrokes, className, labels, showLabels, showAxes, showLevels]);

  return (
    <div className="radar-chart-container">
      <svg ref={svgRef} className={`d3-radar-chart ${className}`}></svg>
    </div>
  );
};

export default D3RadarChart;