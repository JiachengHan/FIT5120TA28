import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Lineandbar = () => {
  // 把数据从你的文件或后端服务中提取出来
  const lineChartData = [
    { year: "2011", sex: "male", percent: 366.5 },
    { year: "2012", sex: "male", percent: 373.6 },
    { year: "2013", sex: "male", percent: 329.5 },
    { year: "2014", sex: "male", percent: 347 },
    { year: "2015", sex: "male", percent: 343.8 },
    { year: "2016", sex: "male", percent: 320.8 },
    { year: "2017", sex: "male", percent: 342.5 },
    { year: "2018", sex: "male", percent: 407.9 },
    { year: "2019", sex: "male", percent: 347.1 },
    { year: "2020", sex: "male", percent: 358.2 },
    { year: "2021", sex: "male", percent: 387.8 },
    { year: "2011", sex: "female", percent: 1247.4 },
    { year: "2012", sex: "female", percent: 1184.4 },
    { year: "2013", sex: "female", percent: 1091 },
    { year: "2014", sex: "female", percent: 1156.6 },
    { year: "2015", sex: "female", percent: 1125.2 },
    { year: "2016", sex: "female", percent: 1128.6 },
    { year: "2017", sex: "female", percent: 1093.9 },
    { year: "2018", sex: "female", percent: 1086.3 },
    { year: "2019", sex: "female", percent: 1037.6 },
    { year: "2020", sex: "female", percent: 1005.1 },
    { year: "2021", sex: "female", percent: 1098 },
  ];

  const barChartData = [
    {
      cousescope: "Underlying Cause of the Condition",
      sex: "male",
      percent: 15.3,
    },
    {
      cousescope: "Underlying AND/OR associated Cause of the Condition",
      sex: "male",
      percent: 193.9,
    },
    {
      cousescope: "Associated-only Cause of the Condition",
      sex: "male",
      percent: 178.6,
    },
    {
      cousescope: "Underlying Cause of the Condition",
      sex: "female",
      percent: 45.2,
    },
    {
      cousescope: "Underlying AND/OR associated Cause of the Condition",
      sex: "female",
      percent: 548.9,
    },
    {
      cousescope: "Associated-only Cause of the Condition",
      sex: "female",
      percent: 503.9,
    },
  ];

  const malesLine = lineChartData.filter((d) => d.sex === "male");
  const femalesLine = lineChartData.filter((d) => d.sex === "female");

  const margin = { top: 20, right: 20, bottom: 40, left: 50 };
  const width = 550 - margin.left - margin.right;
  const height = 550 - margin.top - margin.bottom;

  useEffect(() => {
    d3.select("#line").select("g").remove();

    const lineChartHeight = height / 2;

    const svgLineChart = d3
      .select("#line")
      .attr("width", width + margin.left + margin.right)
      .attr("height", lineChartHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3
      .scalePoint()
      .domain([
        "2010",
        ...lineChartData.map((d) => d.year).filter((year) => year > "2010"),
      ])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(lineChartData, (d) => d.percent)])
      .range([lineChartHeight, 0]);

    svgLineChart
      .append("path")
      .datum(malesLine)
      .attr("fill", "none")
      .attr("stroke", "lightblue")
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.year);
          })
          .y(function (d) {
            return y(d.percent);
          })
      );

    svgLineChart
      .append("path")
      .datum(femalesLine)
      .attr("fill", "none")
      .attr("stroke", "pink")
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.year);
          })
          .y(function (d) {
            return y(d.percent);
          })
      );

    svgLineChart
      .append("g")
      .attr("transform", "translate(0," + lineChartHeight + ")")
      .call(d3.axisBottom(x))
      .style("font-size", "15px")
      .style("font-weight", "bold");

    svgLineChart
      .append("g")
      .call(d3.axisLeft(y))
      .style("font-size", "15px")
      .style("font-weight", "bold");
    svgLineChart
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - lineChartHeight / 2)
      .attr("dy", "5.5em")
      .style("text-anchor", "middle")
      .text("Deaths Per 100,000 Population")
      .style("font-size", "12px")
      .style("font-weight", "bold");

    svgLineChart
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Total Osteoporosis-Related Deaths by Year");
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

    svgLineChart
      .selectAll(".dot")
      .data(lineChartData)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.year))
      .attr("cy", (d) => y(d.percent))
      .attr("r", 12)
      .attr("fill", (d) => (d.sex === "male" ? "lightblue" : "pink"))
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(150).attr("r", 15);
        tooltip
          .style("opacity", 1)
          .html(d.percent + "/100,000 " + d.sex + " died in " + d.year)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 10 + "px");
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().duration(150).attr("r", 12);
        tooltip.style("opacity", 0);
      });

    const legend = svgLineChart
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        "translate(" + (width * 5) / 6 + "," + lineChartHeight / 2 + ")"
      );

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
  }, [lineChartData]);

  useEffect(() => {
    const barChartHeight = height / 2;

    function wrap(text, width) {
      text.each(function () {
        var text = d3.select(this),
          words = text.text().split(/\s+/).reverse(),
          word,
          line = [],
          lineNumber = 0,
          lineHeight = 1.1, // ems
          y = text.attr("y"),
          dy = parseFloat(text.attr("dy")),
          tspan = text
            .text(null)
            .append("tspan")
            .attr("x", 0)
            .attr("y", y)
            .attr("dy", dy + "em");
        while ((word = words.pop())) {
          line.push(word);
          tspan.text(line.join(" "));
          if (word === "Cause") {
            line.pop();
            tspan.text(line.join(" "));
            line = [word];
            tspan = text
              .append("tspan")
              .attr("x", 0)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
              .text(word);
          }
        }
      });
    }

    d3.select("#bar").select("g").remove();

    const svgBarChart = d3
      .select("#bar")
      .attr("width", width + margin.left + margin.right)
      .attr("height", barChartHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x0 = d3
      .scaleBand()
      .domain(barChartData.map((d) => d.cousescope))
      .range([0, width])
      .paddingInner(0.1);

    const x1 = d3
      .scaleBand()
      .domain(["male", "female"])
      .range([0, x0.bandwidth()])
      .padding(0.05);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(barChartData, (d) => +d.percent)])
      .range([barChartHeight, 0]);

    svgBarChart
      .append("g")
      .attr("transform", "translate(0," + barChartHeight + ")")
      .call(d3.axisBottom(x0))
      .selectAll("text")
      .attr("transform", "rotate(0)")
      .style("text-anchor", "middle")
      .style("font-size", "12px")
      .style("font-weight", "bold")
      .call(wrap, x0.bandwidth());

    svgBarChart
      .append("g")
      .call(d3.axisLeft(y))
      .style("font-size", "16px")
      .style("font-weight", "bold");
    svgBarChart
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - barChartHeight / 2)
      .attr("dy", "5.5em")
      .style("text-anchor", "middle")
      .text("Deaths Per 100,000 Population")
      .style("font-size", "12px")
      .style("font-weight", "bold");

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
      .style("padding", "5px")
      .style("pointer-events", "none");

    const bars = svgBarChart
      .selectAll(".bar")
      .data(barChartData)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x0(d.cousescope) + x1(d.sex))
      .attr("y", (d) => y(+d.percent))
      .attr("width", x1.bandwidth())
      .attr("height", (d) => barChartHeight - y(+d.percent))
      .attr("fill", (d) => (d.sex === "male" ? "lightblue" : "pink"))
      .on("mouseover", function (event, d) {
        d3.select(this).attr("stroke", "black").attr("stroke-width", 5);
        tooltip.transition().duration(200).style("opacity", 0.9);
        tooltip
          .html(
            d.percent +
              "/100,000 " +
              d.sex +
              " in " +
              d.cousescope +
              "cause of condition. "
          )
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", function (d) {
        d3.select(this).attr("stroke", null);
        tooltip.transition().duration(500).style("opacity", 0);
      });

    svgBarChart
      .append("text")
      .attr("x", width / 2)
      .attr("y", -5)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Year 2021, Osteporosis-Related Deaths Breakdown");
  }, [barChartData]);

  return (
    <div>
      <svg id="line" style={{ marginBottom: "5px" }} />
      <svg id="bar" />
    </div>
  );
};

export default Lineandbar;
