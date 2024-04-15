import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const FracturesSites = () => {
  const data = [
    { site: "Shoulder & upper arm", hospitalisations: 18379, sex: "Male" },
    { site: "Other", hospitalisations: 60695, sex: "Male" },
    { site: "Lumbar spine and pelvis", hospitalisations: 27480, sex: "Male" },
    { site: "Lower leg including ankle", hospitalisations: 15743, sex: "Male" },
    { site: "Hip", hospitalisations: 77584, sex: "Male" },
    { site: "Forearm", hospitalisations: 9894, sex: "Male" },
    { site: "Other", hospitalisations: 102314, sex: "Female" },
    { site: "Shoulder & upper arm", hospitalisations: 65597, sex: "Female" },
    { site: "Lumbar spine and pelvis", hospitalisations: 78971, sex: "Female" },
    {
      site: "Lower leg including ankle",
      hospitalisations: 52706,
      sex: "Female",
    },
    { site: "Forearm", hospitalisations: 73232, sex: "Female" },
    { site: "Hip", hospitalisations: 180690, sex: "Female" },
  ];

  const [selectedSex, setSelectedSex] = useState("Male");

  useEffect(() => {
    const filteredData = data.filter((d) => d.sex === selectedSex);

    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const width = 550 - margin.left - margin.right;
    const height = 550 - margin.top - margin.bottom;

    d3.select("#fs").select("g").remove();

    const svg = d3
      .select("#fs")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const colorMap = {
      Other: "grey",
      "Shoulder & upper arm": "yellow",
      Hip: "red",
      "Lower leg including ankle": "orange",
      Forearm: "lightblue",
      "Lumbar spine and pelvis": "pink",
    };

    const radiusScale = d3
      .scaleSqrt()
      .domain([0, d3.max(filteredData, (d) => d.hospitalisations)])
      .range([0, 100]);

    const simulation = d3
      .forceSimulation(filteredData)
      .force("charge", d3.forceManyBody().strength(30))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force(
        "collision",
        d3.forceCollide().radius((d) => radiusScale(d.hospitalisations) + 1)
      )
      .on("tick", ticked);
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

    function ticked() {
      const bubbles = svg
        .selectAll("circle")
        .data(filteredData)
        .join("circle")
        .attr("cx", (d) => d.x)
        .attr("cy", (d) => d.y)
        .attr("r", (d) => radiusScale(d.hospitalisations))
        .attr("fill", (d) => colorMap[d.site] || "black")
        .on("mouseover", function (event, d) {
          d3.select(this).attr("stroke", "black").attr("stroke-width", 5);
          tooltip
            .style("opacity", 1)
            .html(`Site: ${d.site}<br>Hospitalisations: ${d.hospitalisations}`)
            .style("left", event.pageX + 10 + "px")
            .style("top", event.pageY - 10 + "px");
        })
        .on("mouseout", function () {
          d3.select(this).attr("stroke", null);
          tooltip.style("opacity", 0);
        });

      svg
        .selectAll("text")
        .data(filteredData)
        .join("text")
        .attr("x", (d) => d.x)
        .attr("y", (d) => d.y)
        .attr("text-anchor", "middle")
        .attr("dy", ".35em")
        .selectAll("tspan")
        .data((d) => d.site.split(" "))
        .join("tspan")
        .attr("x", (d, i, nodes) => d3.select(nodes[i].parentNode).attr("x"))
        .attr("y", (d, i, nodes) => {
          const parentY = d3.select(nodes[i].parentNode).attr("y");
          return parseFloat(parentY) + i * 20 - (nodes.length - 1) * 7.5;
        })
        .text((d) => d);
    }
  }, [selectedSex]);

  return (
    <div>
      <select
        value={selectedSex}
        onChange={(e) => setSelectedSex(e.target.value)}
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <svg id="fs"></svg>
    </div>
  );
};

export default FracturesSites;
