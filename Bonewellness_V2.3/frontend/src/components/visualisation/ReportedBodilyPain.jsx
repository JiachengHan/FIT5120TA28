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
    const margin = { top: 20, right: 20, bottom: 30, left: 55 };
    const width = 550 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

    const x0 = d3.scaleBand().range([0, width]).paddingInner(0.1);
    const x1 = d3.scaleBand().padding(0.05);
    const y = d3.scaleLinear().range([height, 0]);

    d3.select("#rbp").select("g").remove();

    const svg = d3
      .select("#rbp")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const lopGroups = Array.from(new Set(data.map((d) => d.lop)));
    const conditions = ["wiz", "wizout"];
    x0.domain(lopGroups);
    x1.domain(conditions).rangeRound([0, x0.bandwidth()]);
    y.domain([0, 36]);

    const groupedData = lopGroups.map((lop) => {
      return {
        lop: lop,
        values: data.filter((d) => d.lop === lop),
      };
    });

    const lop = svg
      .selectAll("g.lop")
      .data(groupedData)
      .enter()
      .append("g")
      .attr("class", "lop")
      .attr("transform", (d) => "translate(" + x0(d.lop) + ",0)");

    lop
      .selectAll("rect")
      .data((d) => d.values)
      .enter()
      .append("rect")
      .attr("x", (d) => x1(d.condition))
      .attr("width", x1.bandwidth())
      .attr("y", (d) => y(d.percent))
      .attr("height", (d) => height - y(d.percent))
      .attr("fill", (d) => (d.condition === "wiz" ? "lightblue" : "pink"));

    lop
      .selectAll("text.label")
      .data((d) => d.values)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x1(d.condition) + x1.bandwidth() / 2)
      .attr("y", (d) => y(d.percent) - 5)
      .attr("text-anchor", "middle")
      .text((d) => d.percent + "%")
      .style("font-size", "12px");

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x0))
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
      .attr("dy", "0.8em")
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

    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", "translate(" + 30 + "," + 20 + ")");

    const legendData = [
      { color: "lightblue", text: "With Osteoporosis" },
      { color: "pink", text: "Without Osteoporosis" },
    ];

    legend
      .selectAll("rect")
      .data(legendData)
      .enter()
      .append("rect")
      .attr("x", 0)
      .attr("y", (d, i) => i * 20)
      .attr("width", 15)
      .attr("height", 15)
      .style("fill", (d) => d.color);

    legend
      .selectAll("text")
      .data(legendData)
      .enter()
      .append("text")
      .attr("x", 20)
      .attr("y", (d, i) => i * 20 + 12)
      .text((d) => d.text);
  }, [selectedCond]);

  return (
    <div>
      <svg id="rbp"></svg>
    </div>
  );
};

export default ReportedBodilyPain;
