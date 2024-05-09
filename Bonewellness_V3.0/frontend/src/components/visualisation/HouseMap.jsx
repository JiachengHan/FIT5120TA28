import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const HouseMap = () => {
  const svgContainerRef = useRef(null);
  const [tooltip, setTooltip] = useState({
    display: false,
    content: "",
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const data = [
      { area: "Laundry", title: "Laundry", percent: "1.05" },
      { area: "Garage", title: "Garage", percent: "2.42" },
      { area: "Driveway", title: "Driveway", percent: "4.07" },
      { area: "Kitchen", title: "Kitchen", percent: "11.89" },
      { area: "Bedroom", title: "Bedroom", percent: "16.47" },
      {
        area: "Indoorlivingareas",
        title: "Indoor living areas",
        percent: "16.88",
      },
      { area: "Bathroom", title: "Bathroom", percent: "20.18" },
      { area: "Outdoorareas", title: "Outdoor areas", percent: "27.04" },
    ];

    fetch("/static/images/shape/FloorPlan.svg")
      .then((response) => response.text())
      .then((svgData) => {
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = svgData;
          const svgDoc = d3.select(svgContainerRef.current).select("svg");

          const bbox = svgDoc.node().getBBox();
          svgDoc
            .attr("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`)
            .attr("width", "100%")
            .attr("height", "500px");

          const colorScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => parseFloat(d.percent))])
            .range(["rgba(71, 255, 191, 0.8)", "rgba(255, 0, 0, 0.8)"]);

          const sizeScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => parseFloat(d.percent))])
            .range([20, 100]);

          data.forEach((item) => {
            const element = svgDoc.select(`#${item.area}`);
            const bbox = element.node().getBBox();
            const centerX = bbox.x + bbox.width / 2;
            const centerY = bbox.y + bbox.height / 2;
            const radius = sizeScale(parseFloat(item.percent * 3));

            svgDoc
              .append("circle")
              .attr("cx", centerX)
              .attr("cy", centerY)
              .attr("r", radius)
              .attr("fill", colorScale(parseFloat(item.percent)))
              .on("mouseover", function (event) {
                d3.select(this)
                  .transition()
                  .duration(50)
                  .attr("stroke", "yellow")
                  .attr("stroke-width", 10);

                const rect = svgContainerRef.current.getBoundingClientRect();
                const scrollTop =
                  window.pageYOffset || document.documentElement.scrollTop;
                const scrollLeft =
                  window.pageXOffset || document.documentElement.scrollLeft;

                const x = event.pageX - rect.left - scrollLeft + 10;
                const y = event.pageY - rect.top - scrollTop + 10;

                setTooltip({
                  display: true,
                  content: `${item.title}: ${item.percent}%`,
                  x: x,
                  y: y,
                });
              })
              .on("mouseout", function () {
                d3.select(this)
                  .transition()
                  .duration(150)
                  .attr("stroke", null)
                  .attr("store-width", null);
                setTooltip({ display: false, content: "", x: 0, y: 0 });
              });
            const fontSize = Math.max(12, Math.max(20, radius / 2));

            svgDoc
              .append("text")
              .attr("x", centerX)
              .attr("y", centerY)
              .attr("text-anchor", "middle")
              .attr("dominant-baseline", "central")
              .text(`${item.percent}%`)
              .style("fill", "black")
              .style("font-size", `${fontSize}px`)
              .style("pointer-events", "none");
          });
        }
      });
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={svgContainerRef}
        style={{ width: "100%", height: "100%", minHeight: "400px" }}
      />
      {tooltip.display && (
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            padding: "8px",
            fontSize: "16px",
            background: "white",
            border: "2px solid #ccc",
            borderRadius: "5px",
            top: `${tooltip.y}px`,
            left: `${tooltip.x}px`,
            pointerEvents: "none",
            opacity: 1,
            zIndex: 1000,
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default HouseMap;
