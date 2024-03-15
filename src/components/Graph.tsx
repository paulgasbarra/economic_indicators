import { useState, useEffect, useRef } from "react";
import * as d3 from "d3";

interface GraphProps {
  indicator: { name: string; url: string };
}

const Graph: React.FC<GraphProps> = ({ indicator }) => {
  const [data, setData] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(indicator.url);
      const data = await response.json();
      const graphData = data[1].map((item: any) => ({
        date: item.date,
        value: item.value,
      }));
      console.log(indicator.name, graphData);
      setData(graphData);
    };
    getData();
  }, []);

  useEffect(() => {
    // Set dimensions and margins for the graph
    const margin = { top: 20, right: 30, bottom: 30, left: 100 },
      width = 400 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    // Set the ranges
    const x = d3.scaleTime().range([0, width]);
    const y = d3.scaleLinear().range([height, 0]);

    // Define the line
    const valueline = d3
      .line()
      .x((d) => x(d.date))
      .y((d) => y(d.value));

    // Append the svg object to the body of the page
    const svg = d3
      .select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Scale the range of the data
    x.domain(d3.extent(data, (d) => d.date));
    y.domain([0, d3.max(data, (d) => d.value)]);

    // Add the valueline path.
    svg
      .append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline)
      .attr("stroke", "steelblue")
      .attr("stroke-width", 2)
      .attr("fill", "none");

    // Add the X Axis
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add the Y Axis
    svg.append("g").call(d3.axisLeft(y));
  }, [data]); // Redraw graph when data changes

  return (
    <>
      <h1>{indicator.name}</h1>
      <svg ref={svgRef}></svg>
    </>
  );
};

export default Graph;
