import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const RiskPanel = ({ value }) => {
  const [data, setdata] = useState(50);

  useEffect(() => {
    function mapValue(x) {
      return ((x - 40) / (60 - 40)) * (100 - 0) + 0;
    }
    if (value > 60) {
      value = 60;
    }
    setdata(mapValue(value));
    const margin = 11.4;
    const width = 190;
    const height = 190;

    d3.select("#panel").select("g").remove();

    const svg = d3
      .select("#panel")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#111");

    const chart = svg.append("g");

    const colorScale = d3.scaleOrdinal(d3.schemePaired);

    const radius = d3.min([width - 4 * margin, height - 4 * margin]) / 2;

    const nums = [0, 25, 50, 75, 100];

    const numLength = 100;

    const anglelength = 280;

    let angleDraw = [];

    nums.forEach((item, i) => {
      if (i != nums.length - 1) {
        const angleS = (item / numLength) * anglelength;
        const angleE = (nums[i + 1] / numLength) * anglelength;
        angleDraw.push({
          startAngle: (angleS - anglelength / 2) * (Math.PI / 180),
          endAngle: (angleE - anglelength / 2) * (Math.PI / 180),
        });
      }
    });

    let innerArc = 25;

    const arc = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(radius - innerArc);

    chart
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll()
      .data(angleDraw)
      .enter()
      .append("path")
      .attr("class", (d, i) => "arc-" + i)
      .attr("d", arc)
      .attr("fill", (d, i) => colorScale(i));

    function points() {
      const upper = Math.floor(radius - innerArc);
      const short = Math.floor(upper * 0.3);
      const both = Math.floor(short * 0.6);
      return ["0," + short, both + ",0", "0," + -upper, -both + ",0"];
    }

    const pointer = chart
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
      .selectAll()
      .data([data])
      .enter()
      .append("polygon")
      .attr("class", "pointer")
      .attr("points", points)
      .attr("fill", colorScale(0))
      .attr("transform", "rotate(" + -0.5 * anglelength + ")");

    pointer
      .transition()
      .duration(1000)
      .attrTween("transform", rotateTween)
      .attrTween("fill", fillTween);

    function rotateTween(d) {
      const angleOffset = -140;
      const scale = d3
        .scaleLinear()
        .domain([0, 100])
        .range([angleOffset, angleOffset + anglelength]);
      return function (t) {
        return "rotate(" + scale(d * t) + ")";
      };
    }
    function fillTween(d) {
      return function (t) {
        let i = 0;
        while (i < nums.length - 1 && nums[i] < d * t) {
          i++;
        }
        return colorScale(i - 1);
      };
    }
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 30)
      .text("Low")
      .attr("fill", "black")
      .attr("font-size", "16px");

    svg
      .append("text")
      .attr("x", width)
      .attr("y", 30)
      .text("High")
      .attr("fill", "black")
      .attr("font-size", "16px")
      .attr("text-anchor", "end");
  }, [value, data]);

  return (
    <div style={{ width: "100%" }}>
      <svg id="panel"></svg>
    </div>
  );
};
export default RiskPanel;
