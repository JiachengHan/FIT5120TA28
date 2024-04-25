import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import PortfolioGallery2 from "../../components/portfolio/PortfolioGallery2";
import Map from "../../components/contact/Map";

const Hospital = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [hospitals, setHospitals] = useState([]);
  const [postcode, setPostcode] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [message, setMessage] = useState("");
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const [selectedHospital, setSelectedHospital] = useState(null);

  useEffect(() => {
    fetch("/api/hospitals/")
      .then((response) => response.json())
      .then((data) => {
        setHospitals(data);
        const initialPostcode = searchParams.get("postcode");
        if (initialPostcode) {
          const filtered = data.filter(
            (hospital) => String(hospital.postcode) === initialPostcode
          );
          setFilteredHospitals(filtered.length > 0 ? filtered : data);
          setMessage(filtered.length > 0 ? "" : "No hospital nearby");
          setPostcode(initialPostcode);
        } else {
          setFilteredHospitals(data);
        }
      })
      .catch((error) => console.error("Error fetching hospitals:", error));
  }, []);

  const options = [
    { value: 0, display: "Select Your State..." },
    // { value: 1, display: "ACT" },
    // { value: 2, display: "NSW" },
    // { value: 3, display: "NT" },
    // { value: 4, display: "QLD" },
    // { value: 5, display: "SA" },
    { value: 6, display: "VIC" },
    // { value: 7, display: "WA" },
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    const matchedHospitals = hospitals.filter(
      (hospital) => String(hospital.postcode) === postcode
    );
    if (matchedHospitals.length > 0) {
      setFilteredHospitals(matchedHospitals);
      setMessage("");
    } else {
      setFilteredHospitals(hospitals);
      setMessage("No hospital nearby");
    }
    setCurrentPage(1);
  };

  const handlePostcodeChange = (event) => {
    const inputPostcode = String(event.target.value).trim();
    setPostcode(inputPostcode);
  };
  return (
    <>
      <Seo pageTitle="Hospital" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
        =============================================
        Feature Section Fifty One
        ============================================== 
        */}

      <div className="hero-banner-ten position-relative zn2">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-9 col-md-10 m-auto text-center"
              data-aos="fade-up"
            >
              <h1>Locating Nearby Hospital</h1>
              <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
                Type in postcode to find the hospital near you.
              </p>
              <form
                className="search-area d-md-inline-flex m-auto"
                onSubmit={handleSubmit}
              >
                <select className="nice-select form-select">
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.display}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  className="zip-code-input"
                  placeholder="Your Zip code"
                  required="required"
                  pattern="^3\d{3}$"
                  title="Only postcode are allowed."
                  data-error="Zipcode is required."
                  onChange={handlePostcodeChange}
                  value={postcode}
                />
                <button className="fw-500 text-white tran3s" type="submit">
                  Search
                </button>
              </form>
              {message && <p>{message}</p>}
              {/* End form */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- 
        =============================================
        Portfolio Gallery Three
        ============================================== 
        --> */}
      <PortfolioGallery2
        hospitals={filteredHospitals}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onHospitalSelect={setSelectedHospital}
      />

      <div className="contact-section-one mt-60 lg-mt-30">
        <Map
          address={
            selectedHospital
              ? selectedHospital.address + "," + selectedHospital.suburb
              : "Melbourne, Australia"
          }
        />
      </div>

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default Hospital;
