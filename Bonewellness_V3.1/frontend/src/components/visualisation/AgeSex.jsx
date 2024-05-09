import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const AgeSex = () => {
  const [selectedSex, setSelectedSex] = useState("male");

  const data = [
    { ageGroup: "<45", sex: "male", percent: "0.2" },
    { ageGroup: "45-54", sex: "male", percent: "0.8" },
    { ageGroup: "55-64", sex: "male", percent: "3.2" },
    { ageGroup: "65-74", sex: "male", percent: "3.2" },
    { ageGroup: ">75", sex: "male", percent: "10.1" },
    { ageGroup: "<45", sex: "female", percent: "0.3" },
    { ageGroup: "45-54", sex: "female", percent: "4.4" },
    { ageGroup: "55-64", sex: "female", percent: "13" },
    { ageGroup: "65-74", sex: "female", percent: "21.1" },
    { ageGroup: ">75", sex: "female", percent: "29.2" },
  ];

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 50, left: 55 };
    const width = 550 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

    const x0 = d3.scaleBand().range([0, width]).padding(0.1);
    const x1 = d3.scaleBand().padding(0.05);
    const y = d3.scaleLinear().range([height, 0]);

    d3.select("#agesex").select("g").remove();

    const svg = d3
      .select("#agesex")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const ageGroups = Array.from(new Set(data.map((d) => d.ageGroup)));
    const sexes = ["male", "female"];
    x0.domain(ageGroups);
    x1.domain(sexes).rangeRound([0, x0.bandwidth()]);
    y.domain([0, 32]);

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x0(d.ageGroup) + x1(d.sex))
      .attr("width", x1.bandwidth())
      .attr("y", (d) => y(d.percent))
      .attr("height", (d) => height - y(d.percent))
      .attr("fill", (d) => (d.sex === "male" ? "lightblue" : "pink"));

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
      .attr(
        "transform",
        "translate(" + width / 2 + " ," + (height + margin.top + 20) + ")"
      )
      .style("text-anchor", "middle")
      .text("Age Group")
      .style("font-size", "20px")
      .style("font-weight", "bold");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 8)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Proportion of People with Osteoporosis in Each Age Group");

    svg
      .selectAll(".text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x0(d.ageGroup) + x1(d.sex) + x1.bandwidth() / 2)
      .attr("y", (d) => y(d.percent) - 2)
      .attr("text-anchor", "middle")
      .text((d) => d.percent + "%")
      .style("font-size", "12px");
    const legend = svg
      .append("g")
      .attr("class", "legend")
      .attr("transform", "translate(" + 30 + "," + 20 + ")");

    const legendData = [
      { color: "lightblue", text: "Males" },
      { color: "pink", text: "Females" },
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
  }, [selectedSex]);

  return (
    <div style={{ width: "100%" }}>
      <svg id="agesex"></svg>
    </div>
  );
};

export default AgeSex;
