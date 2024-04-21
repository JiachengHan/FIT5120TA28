import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const TrendofDeath = () => {
  const data = [
    { year: "2010", deaths: 3713 },
    { year: "2011", deaths: 3688 },
    { year: "2012", deaths: 3972 },
    { year: "2013", deaths: 4115 },
    { year: "2014", deaths: 4516 },
    { year: "2015", deaths: 4592 },
    { year: "2016", deaths: 4762 },
    { year: "2017", deaths: 4893 },
    { year: "2018", deaths: 5037 },
    { year: "2019", deaths: 5034 },
  ];

  const margin = { top: 20, right: 20, bottom: 40, left: 70 };
  const width = 550 - margin.left - margin.right;
  const height = 550 - margin.top - margin.bottom;

  useEffect(() => {
    d3.select("#tradeline").select("g").remove();

    const lineChartHeight = height / 2;

    const svgLineChart = d3
      .select("#tradeline")
      .attr("width", width + margin.left + margin.right)
      .attr("height", lineChartHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3
      .scalePoint()
      .domain([
        "2010",
        ...data.map((d) => d.year).filter((year) => year > "2010"),
      ])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([3400, d3.max(data, (d) => d.deaths)])
      .range([lineChartHeight, 0]);

    svgLineChart
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "grey")
      .attr("stroke-width", 2)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.year);
          })
          .y(function (d) {
            return y(d.deaths);
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
      .attr("dy", "0.8em")
      .style("text-anchor", "middle")
      .text("Number of Deaths")
      .style("font-size", "12px")
      .style("font-weight", "bold");

    svgLineChart
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Deaths Due To Falls From 2010 to 2019");
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
      .append("text")
      .attr(
        "transform",
        "translate(" +
          width / 2 +
          " ," +
          (lineChartHeight + margin.top + 20) +
          ")"
      )
      .style("text-anchor", "middle")
      .text("Year")
      .style("font-size", "14px")
      .style("font-weight", "bold");

    svgLineChart
      .selectAll(".dot")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.year))
      .attr("cy", (d) => y(d.deaths))
      .attr("r", 12)
      .attr("fill", "grey")
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(150).attr("r", 15);
        tooltip
          .style("opacity", 1)
          .html(d.deaths + " deaths in " + d.year)
          .style("left", event.pageX + 10 + "px")
          .style("top", event.pageY - 10 + "px");
      })
      .on("mouseout", function (d) {
        d3.select(this).transition().duration(150).attr("r", 12);
        tooltip.style("opacity", 0);
      });
  }, [data]);

  return (
    <div>
      <svg id="tradeline" style={{ marginBottom: "5px" }} />
      <div>
        <div className="title-style-one">
          {/* <div className="sc-title text-uppercase">
              {aboutData.title.subtitle}
            </div> */}
          <h2 className="main-title fw-bold tx-dark m0">
            Increasing Trend of Deaths Due to Falls
          </h2>
        </div>
        <p className="fs-20">
          Falls among elderly popula0on is a common issue worldwide, and in
          Australia, it is considered the leading cause of injury hospitalisa0on
          and death (AIHW, 2023). The AIHW data on falls among elderly
          Australians, revealed a concerning increasing trend of deaths due to
          falls for older Australians 65 and above.
        </p>
      </div>
    </div>
  );
};

export default TrendofDeath;
