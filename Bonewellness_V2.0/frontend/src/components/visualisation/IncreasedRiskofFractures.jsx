import React, { useEffect } from "react";
import * as d3 from "d3";

const IncreasedRiskofFractures = () => {
  const data = [
    { age: "45-49", sex: "Males", value: 146.7 },
    { age: "50-54", sex: "Males", value: 171.7 },
    { age: "55-59", sex: "Males", value: 195.6 },
    { age: "60-64", sex: "Males", value: 302.9 },
    { age: "65-69", sex: "Males", value: 395 },
    { age: "70-74", sex: "Males", value: 673.5 },
    { age: "75-79", sex: "Males", value: 1115.6 },
    { age: "80-84", sex: "Males", value: 2087.6 },
    { age: "85+", sex: "Males", value: 4610.8 },
    { age: "45-49", sex: "Females", value: 184.5 },
    { age: "50-54", sex: "Females", value: 312.4 },
    { age: "55-59", sex: "Females", value: 470.3 },
    { age: "60-64", sex: "Females", value: 698.5 },
    { age: "65-69", sex: "Females", value: 986.5 },
    { age: "70-74", sex: "Females", value: 1439.9 },
    { age: "75-79", sex: "Females", value: 2340.2 },
    { age: "80-84", sex: "Females", value: 3811.7 },
    { age: "85+", sex: "Females", value: 6849.5 },
  ];

  const malesData = data.filter((d) => d.sex === "Males");
  const femalesData = data.filter((d) => d.sex === "Females");

  useEffect(() => {
    const margin = { top: 20, right: 20, bottom: 50, left: 50 };
    const width = 550 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

    d3.select("#irof").select("g").remove();

    const svg = d3
      .select("#irof")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d.age))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height, 0]);

    svg
      .append("path")
      .datum(malesData)
      .attr("fill", "none")
      .attr("stroke", "lightblue")
      .attr("stroke-width", 5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.age);
          })
          .y(function (d) {
            return y(d.value);
          })
      );

    svg
      .append("path")
      .datum(femalesData)
      .attr("fill", "none")
      .attr("stroke", "pink")
      .attr("stroke-width", 5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.age);
          })
          .y(function (d) {
            return y(d.value);
          })
      );

    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .style("font-size", "15px")
      .style("font-weight", "bold");

    svg
      .append("g")
      .call(d3.axisLeft(y).tickFormat((d) => d / 1000 + "k"))
      .style("font-size", "15px")
      .style("font-weight", "bold");
    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "5.2em")
      .style("text-anchor", "middle")
      .text("Hospitalisations per 100,000 population")
      .style("font-size", "12px")
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
      .attr("y", 10)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Hospitalisations Due To Minimal Trauma Fracture in AU");

    const tooltip = d3
      .select("body")
      .append("div")
      .attr("class", "tooltip")
      .style("position", "absolute")
      .style("opacity", 0)
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px");

    svg
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.age))
      .attr("cy", (d) => y(d.value))
      .attr("r", 8)
      .attr("fill", (d) => (d.sex === "Males" ? "lightblue" : "pink"))
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(150).attr("r", 10);
        tooltip
          .style("opacity", 1)
          .html(d.sex + " aged " + d.age + ": <br/>" + d.value + " /100,000")
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 10 + "px");
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().duration(150).attr("r", 8);
        tooltip.style("opacity", 0);
      });

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
  }, []);

  return (
    <div>
      <svg id="irof"></svg>
    </div>
  );
};

export default IncreasedRiskofFractures;
