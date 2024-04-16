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
    const filteredData = data.filter((d) => d.sex === selectedSex);

    const margin = { top: 20, right: 20, bottom: 50, left: 55 };
    const width = 550 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

    const x = d3.scaleBand().range([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    d3.select("#agesex").select("g").remove();

    const svg = d3
      .select("#agesex")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(filteredData.map((d) => d.ageGroup));
    y.domain([0, 32]);

    svg
      .selectAll(".bar")
      .data(filteredData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.ageGroup))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.percent))
      .attr("height", (d) => height - y(d.percent))
      .attr("fill", selectedSex === "male" ? "lightblue" : "pink");

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
      .data(filteredData)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x(d.ageGroup) + x.bandwidth() / 2)
      .attr("y", (d) => y(parseFloat(d.percent)) - 2)
      .attr("text-anchor", "middle")
      .text((d) => d.percent + "%");
  }, [selectedSex]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          marginBottom: "5px",
        }}
      >
        <span
          style={{ marginRight: "5px", fontSize: "16px", fontWeight: "bold" }}
        >
          Selection:{" "}
        </span>
        <button
          onClick={() => setSelectedSex("male")}
          style={{
            marginRight: "10px",
            padding: "5px 10px",
            fontSize: "14px",
            border: selectedSex === "male" ? "solid" : "none",
            backgroundColor: "lightblue",
            color: "black",
          }}
        >
          Male
        </button>
        <button
          onClick={() => setSelectedSex("female")}
          style={{
            padding: "5px 10px",
            fontSize: "14px",
            border: selectedSex === "female" ? "solid" : "none",
            backgroundColor: "pink",
            color: "black",
          }}
        >
          Female
        </button>
      </div>
      <svg id="agesex"></svg>
    </div>
  );
};

export default AgeSex;
