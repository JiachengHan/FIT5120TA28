import React, { useState, useEffect } from "react";
// import items from "../../data/portfolio";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { Link } from "react-router-dom";

const PortfolioGallery2 = ({
  hospitals,
  currentPage,
  setCurrentPage,
  onHospitalSelect,
  scrolltocomponent,
}) => {
  const hospitalsPerPage = 12;

  const getPageNumbersToShow = (currentPage, totalPages, delta = 1) => {
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      range.unshift("...");
    }
    if (currentPage + delta < totalPages - 1) {
      range.push("...");
    }

    range.unshift(1);
    if (totalPages > 1) {
      range.push(totalPages);
    }

    return range;
  };

  const totalPages = Math.ceil(hospitals.length / hospitalsPerPage);
  const pageNumbers = getPageNumbersToShow(currentPage, totalPages);

  const indexOfLastHospital = currentPage * hospitalsPerPage;
  const indexOfFirstHospital = indexOfLastHospital - hospitalsPerPage;
  const currentHospitals = hospitals.slice(
    indexOfFirstHospital,
    indexOfLastHospital
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(totalPages, prev + 1));
  const handlePrevious = () => setCurrentPage((prev) => Math.max(1, prev - 1));
  const handleFirst = () => setCurrentPage(1);
  const handleLast = () => setCurrentPage(totalPages);
  const handleSelectHospital = (item) => {
    onHospitalSelect(item);
    scrolltocomponent("mapSection");
  };

  // const [hospitals, setHospitals] = useState([]);
  // const [filter, setFilter] = useState("*");

  // useEffect(() => {
  //   fetch("/api/hospitals/")
  //     .then((response) => response.json())
  //     .then((data) => setHospitals(data))
  //     .catch((error) => console.error("Error fetching hospitals:", error));
  // }, []);
  // const filteredItems =
  //   filter === "*"
  //     ? hospitals
  //     : hospitals.filter((hospital) => hospital.category.includes(filter));

  return (
    <div id="hospitalSection" className="portfolio-gallery-three pt-30">
      <div className="container">
        <p className="text-lg text-center tx-dark mt-45 lg-mt-30 lg-mb-40">
          Select and click the hospital below to see the location on the map.
        </p>
        {/* <ul className="style-none text-center isotop-menu-wrapper g-control-nav-two">
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
        </ul> */}
        <div className="row pt-90 lg-pt-50">
          <Gallery>
            {currentHospitals.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectHospital(item)}
                className={`col-lg-4 col-md-6 design dev`}
              >
                <div className="portfolio-block-four mb-50">
                  {/* <div className="img-meta position-relative">
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
                  </div> */}
                  <Link
                    className="title tran3s d-flex flex-column align-items-center"
                    style={{
                      height: "150px",
                      justifyContent: "space-between",
                      backgroundColor: "lightcyan",
                    }}
                  >
                    <span
                      className="pj-name tran3s fw-500"
                      style={{ textAlign: "center" }}
                    >
                      {item.formal_name}
                    </span>
                    <span className="tag">
                      {item.address}, {item.suburb}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </Gallery>
        </div>
        <div
          className="page-pagination-one d-flex justify-content-center text-center pt-15"
          style={{ flexWrap: "wrap", width: "100%" }}
        >
          {currentPage > 1 && (
            <>
              <button
                style={{
                  margin: "0 4px",
                  fontSize: "15px",
                  padding: "5px 5px",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                  backgroundColor: "#f8f8f8",
                  transition: "background-color 0.3s",
                }}
                onClick={handleFirst}
              >
                &lt; First
              </button>
              <button
                style={{
                  margin: "0 4px",
                  fontSize: "15px",
                  padding: "5px 5px",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                  backgroundColor: "#f8f8f8",
                  transition: "background-color 0.3s",
                }}
                onClick={handlePrevious}
              >
                &lt;&lt; Previous
              </button>
            </>
          )}
          {pageNumbers.map((number, index) => (
            <button
              style={{
                margin: "0 4px",
                fontSize: "15px",
                padding: "5px 10px",
                cursor: "pointer",
                border: "1px solid #ccc",
                backgroundColor: "#f8f8f8",
                transition: "background-color 0.3s",
              }}
              key={index}
              disabled={number === "..."}
              onClick={() => number !== "..." && paginate(number)}
            >
              {number}
            </button>
          ))}
          {currentPage < totalPages && (
            <>
              <button
                style={{
                  margin: "0 4px",
                  fontSize: "15px",
                  padding: "5px 5px",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                  backgroundColor: "#f8f8f8",
                  transition: "background-color 0.3s",
                }}
                onClick={handleNext}
              >
                Next &gt;
              </button>
              <button
                style={{
                  margin: "0 4px",
                  fontSize: "15px",
                  padding: "5px 5px",
                  cursor: "pointer",
                  border: "1px solid #ccc",
                  backgroundColor: "#f8f8f8",
                  transition: "background-color 0.3s",
                }}
                onClick={handleLast}
              >
                Last &gt;&gt;
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGallery2;
