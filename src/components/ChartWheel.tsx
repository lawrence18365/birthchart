import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ChartData } from '../types/chart';
import { Sun, Moon, Star } from 'lucide-react';
import * as d3 from 'd3';

interface Props {
  chartData: ChartData;
}

export default function ChartWheel({ chartData }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);
  const controls = useAnimation();
  
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = 600;
    const height = 600;
    const radius = Math.min(width, height) / 2;

    // Clear previous content
    svg.selectAll("*").remove();

    // Create the base wheel
    const wheel = svg
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create zodiac segments
    const pie = d3.pie().value(1);
    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const zodiacData = new Array(12).fill(1);
    
    wheel.selectAll("path")
      .data(pie(zodiacData))
      .enter()
      .append("path")
      .attr("d", arc as any)
      .attr("fill", (_, i) => d3.interpolateRainbow(i / 12))
      .attr("stroke", "white")
      .attr("stroke-width", 2);

    // Add zodiac symbols
    const symbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
    const symbolRadius = radius * 0.65;

    symbols.forEach((symbol, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      wheel.append("text")
        .attr("x", symbolRadius * Math.cos(angle))
        .attr("y", symbolRadius * Math.sin(angle))
        .attr("text-anchor", "middle")
        .attr("dominant-baseline", "middle")
        .attr("fill", "white")
        .attr("font-size", "24px")
        .text(symbol);
    });

    // Add planetary positions
    Object.entries(chartData).forEach(([planet, data]) => {
      if (planet === 'houses' || planet === 'ascendant' || planet === 'midheaven') return;

      const angle = ((data.degree + (symbols.indexOf(data.sign) * 30) - 90) * Math.PI) / 180;
      const planetRadius = radius * 0.4;

      wheel.append("circle")
        .attr("cx", planetRadius * Math.cos(angle))
        .attr("cy", planetRadius * Math.sin(angle))
        .attr("r", 10)
        .attr("fill", getPlanetColor(planet))
        .attr("stroke", "white")
        .attr("stroke-width", 2);
    });

    // Animate the wheel
    controls.start({
      rotate: 360,
      transition: { duration: 120, repeat: Infinity, ease: "linear" }
    });

  }, [chartData]);

  const getPlanetColor = (planet: string): string => {
    const colors = {
      sun: "#FFD700",
      moon: "#C0C0C0",
      mercury: "#B87333",
      venus: "#FFC0CB",
      mars: "#FF4500",
      jupiter: "#DAA520",
      saturn: "#808080"
    };
    return colors[planet as keyof typeof colors] || "#000000";
  };

  return (
    <div className="relative aspect-square max-w-2xl mx-auto">
      <motion.div animate={controls} className="relative w-full h-full">
        <svg
          ref={svgRef}
          viewBox="0 0 600 600"
          className="w-full h-full"
        />
      </motion.div>
    </div>
  );
}