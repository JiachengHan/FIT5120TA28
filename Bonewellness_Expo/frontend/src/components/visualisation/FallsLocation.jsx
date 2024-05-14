import React, { useEffect, useState, useRef } from "react";
import * as d3 from "d3";

const FallsLocation = () => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const data = [
    { location: "Home", falls_per: 52.56 },
    { location: "Residential institutions", falls_per: 21.24 },
    { location: "Unspecified or Unknown", falls_per: 14.47 },
    { location: "Street or highway", falls_per: 4.12 },
    { location: "Trade or service area", falls_per: 3.22 },
    { location: "Other specified area", falls_per: 2.28 },
    { location: "Health service facility areas", falls_per: 1.5 },
    { location: "Sports or athletic area", falls_per: 0.49 },
    { location: "Industrial or construction area", falls_per: 0.08 },
    { location: "School", falls_per: 0.04 },
  ];

  useEffect(() => {
    setWidth(ref.current.clientWidth);
    function handleResize() {
      setWidth(ref.current.clientWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
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
          if (tspan.node().getComputedTextLength() > width) {
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
    const margin = { top: 20, right: 20, bottom: 80, left: 55 };
    const effectiveWidth = width - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    const x = d3.scaleBand().range([0, effectiveWidth]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    d3.select("#locationBar").select("g").remove();

    const svg = d3
      .select("#locationBar")
      .attr("width", effectiveWidth + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    x.domain(data.map((d) => d.location));
    y.domain([0, 55]);

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

    svg
      .selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(d.location))
      .attr("width", x.bandwidth())
      .attr("y", (d) => y(d.falls_per))
      .attr("height", (d) => height - y(d.falls_per))
      .attr("fill", "steelblue")
      .on("mouseover", function (event, d) {
        d3.select(this).attr("stroke", "black").attr("stroke-width", 5);
        tooltip.transition().duration(200).style("opacity", 1);
        tooltip
          .html(d.location + ": " + d.falls_per + "%")
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", function (d) {
        d3.select(this).attr("stroke", null);
        tooltip.transition().duration(500).style("opacity", 0);
      });
    svg
      .append("g")
      .attr("transform", "translate(0 ," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(0)")
      .attr("text-anchor", "end")
      .attr("dx", "0em")
      .attr("dy", "0.5em")
      .style("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .call(wrap, x.bandwidth());

    svg
      .append("g")
      .call(d3.axisLeft(y).ticks(15))
      .style("font-size", "16px")
      .style("font-weight", "bold");

    svg
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x", 0 - height / 2)
      .attr("dy", "0.8em")
      .style("text-anchor", "middle")
      .text("Percentage of Falls (%)")
      .style("font-size", "20px")
      .style("font-weight", "bold");

    svg
      .append("text")
      .attr(
        "transform",
        "translate(" + width / 2 + " ," + (height + margin.top + 50) + ")"
      )
      .style("text-anchor", "middle")
      .text("Locations")
      .style("font-size", "20px")
      .style("font-weight", "bold");

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 8)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Percentage of Falls by Location (2019-2020)");

    svg
      .selectAll(".text")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", (d) => x(d.location) + x.bandwidth() / 2)
      .attr("y", (d) => y(parseFloat(d.falls_per)) - 2)
      .attr("text-anchor", "middle")
      .text((d) => d.falls_per + "%");
  }, [width]);

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <svg id="locationBar"></svg>
    </div>
  );
};

export default FallsLocation;
