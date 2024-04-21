import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const RiskofDeath = () => {
  const data = [
    { age_group: "65-69", avg_death_falls_per: 1.08 },
    { age_group: "70-74", avg_death_falls_per: 1.54 },
    { age_group: "75-79", avg_death_falls_per: 2.27 },
    { age_group: "80-84", avg_death_falls_per: 3.3 },
    { age_group: "85-89", avg_death_falls_per: 4.64 },
    { age_group: "90-94", avg_death_falls_per: 6.75 },
    { age_group: "95+", avg_death_falls_per: 9.74 },
  ];

  const margin = { top: 20, right: 20, bottom: 40, left: 70 };
  const width = 550 - margin.left - margin.right;
  const height = 550 - margin.top - margin.bottom;

  useEffect(() => {
    d3.select("#riskline").select("g").remove();

    const lineChartHeight = height / 2;

    const svgLineChart = d3
      .select("#riskline")
      .attr("width", width + margin.left + margin.right)
      .attr("height", lineChartHeight + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3
      .scalePoint()
      .domain([
        "65-69",
        ...data
          .map((d) => d.age_group)
          .filter((age_group) => age_group > "65-69"),
      ])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.avg_death_falls_per)])
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
            return x(d.age_group);
          })
          .y(function (d) {
            return y(d.avg_death_falls_per);
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
      .text("Average Death/Falls Ratio (%)")
      .style("font-size", "12px")
      .style("font-weight", "bold");

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
      .text("Age Group")
      .style("font-size", "14px")
      .style("font-weight", "bold");

    svgLineChart
      .append("text")
      .attr("x", width / 2)
      .attr("y", 0)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text("Deaths To Falls Ratio By Age Group");
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
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "dot")
      .attr("cx", (d) => x(d.age_group))
      .attr("cy", (d) => y(d.avg_death_falls_per))
      .attr("r", 12)
      .attr("fill", "grey")
      .on("mouseover", function (event, d) {
        d3.select(this).transition().duration(150).attr("r", 15);
        tooltip
          .style("opacity", 1)
          .html(d.age_group + " : " + d.avg_death_falls_per)
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
      <svg id="riskline" style={{ marginBottom: "5px" }} />
      <div>
        <div>
          {/* <div className="sc-title text-uppercase">
              {aboutData.title.subtitle}
            </div> */}
          <h2 className="main-title fw-bold tx-dark m0">
            Increased Risk of Deaths Due to Falls{" "}
          </h2>
        </div>
        <p className="fs-20">
          We can clearly observe the increased risk of death due to falls as we
          age. From 1% deaths to falls ra0o for age group 65-69 to around 10%
          for those aged 95+ (i.e., ten 0mes increased risk of death). The laQer
          necessitates that the elderly should take great care in reducing their
          risk of falls to avoid such unfortunate scenario
        </p>
      </div>
    </div>
  );
};

export default RiskofDeath;
