import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const ReportedBodilyPain = () => {
  const [selectedCond, setSelectedCond] = useState("wiz");

  const data = [
    { lop: "Very Severe", condition: "wizout", percent: "2.2" },
    { lop: "Severe", condition: "wizout", percent: "7.7" },
    { lop: "Moderate", condition: "wizout", percent: "22.9" },
    { lop: "Very Severe", condition: "wiz", percent: "4.1" },
    { lop: "Severe", condition: "wiz", percent: "16" },
    { lop: "Moderate", condition: "wiz", percent: "34.7" },
  ];

  useEffect(() => {
    const filteredData = data.filter((d) => d.condition === selectedCond);

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 550 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    d3.select("#rbp").select("g").remove();

    const svg = d3
      .select("#rbp")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(filteredData.map((d) => d.lop));
    y.domain([0, 36]);

    svg
      .selectAll(".bar")
      .data(filteredData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.lop))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.percent))
      .attr("height", (d) => height - y(d.percent))
      .attr("fill", "grey");

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .style("font-size", "20px")
      .style("font-weight", "bold");

    svg
      .append("g")
      .call(d3.axisLeft(y).ticks(15))
      .style("font-size", "20px")
      .style("font-weight", "bold");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "3em")
      .style("text-anchor", "middle")
      .text("Percentage")
      .style("font-size", "20px")
      .style("font-weight", "bold");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Reported Bodily Pain (Aged 45 and Older)");

    svg
      .selectAll(".text")
      .data(filteredData)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x(d.lop) + x.bandwidth() / 2)
      .attr("y", (d) => y(parseFloat(d.percent)) - 2)
      .attr("text-anchor", "middle")
      .text((d) => d.percent + "%");
  }, [selectedCond]);

  return (
    <div>
      <select
        value={selectedCond}
        onChange={(e) => setSelectedCond(e.target.value)}
      >
        <option value="wiz">With Osteoporosis</option>
        <option value="wizout">Without Osteoporosis</option>
      </select>
      <svg id="rbp"></svg>
    </div>
  );
};

export default ReportedBodilyPain;
