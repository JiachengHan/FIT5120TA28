import React, { useState, useEffect } from "react";
import items from "../../data/portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Link } from "react-router-dom";

const PortfolioGallery2 = () => {
  const [hospitals, setHospitals] = useState([]);
  const [filter, setFilter] = useState("*");

  useEffect(() => {
    fetch("/api/hospitals/")
      .then((response) => response.json())
      .then((data) => setHospitals(data))
      .catch((error) => console.error("Error fetching hospitals:", error));
  }, []);
  const filteredItems =
    filter === "*"
      ? hospitals
      : hospitals.filter((hospital) => hospital.category.includes(filter));

  return (
    <div className="portfolio-gallery-three pt-30">
      <div className="container">
        <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
          <li
            className={filter === "*" ? "is-checked" : ""}
            onClick={() => setFilter("*")}
          >
            All
          </li>
          <li
            className={filter === "marketing" ? "is-checked" : ""}
            onClick={() => setFilter("marketing")}
          >
            Marketing
          </li>
          <li
            className={filter === "application" ? "is-checked" : ""}
            onClick={() => setFilter("application")}
          >
            Application
          </li>
          <li
            className={filter === "design" ? "is-checked" : ""}
            onClick={() => setFilter("design")}
          >
            Design
          </li>
          <li
            className={filter === "dev" ? "is-checked" : ""}
            onClick={() => setFilter("dev")}
          >
            Development
          </li>
        </ul>
        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={`col-lg-4 col-md-6 ${item.category}`}
              >
                <div className="portfolio-block-four mb-50">
                  <div className="img-meta position-relative">
                    <img src={item.image} alt="gallary" className="w-100" />

                    <Item
                      original={item.image}
                      thumbnail={item.image}
                      width={410}
                      height={340}
                    >
                      {({ ref, open }) => (
                        <span
                          role="button"
                          title="Click for large view"
                          className="fancybox expend-btn d-flex align-items-center justify-content-center tran3s"
                          ref={ref}
                          onClick={open}
                        >
                          <i className="bi bi-plus-lg"></i>
                        </span>
                      )}
                    </Item>
                  </div>
                  <Link
                    to={`/portfolio/${item.id}`}
                    className="title tran3s d-flex flex-column align-items-center"
                  >
                    <span className="pj-name tran3s fw-500">{item.name}</span>
                    <span className="tag">{item.tag}</span>
                  </Link>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery2;
