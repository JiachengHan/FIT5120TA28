import { useNavigate } from "react-router-dom";
import React from "react";

const Hero1 = () => {
  const navigate = useNavigate();
  const [postcode, setPostcode] = React.useState("");

  const options = [
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
    navigate(`portfolio/HospitalPage?postcode=${encodeURIComponent(postcode)}`);
  };

  const handlePostcodeChange = (event) => {
    const inputPostcode = String(event.target.value).trim();
    setPostcode(inputPostcode);
  };

  return (
    <div className="hero-banner-ten position-relative zn2">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-9 col-md-10 m-auto text-center"
            data-aos="fade-up"
          >
            <h1 className="hero-heading fw-500 tx-dark">
              Stay Strong, <br />
              Stay Independent: Proactively Combat <span>Osteoporosis</span>!
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Type postcode to find the hospital nearby
            </p>
            <form
              className="search-area d-md-inline-flex m-auto"
              onSubmit={handleSubmit}
            >
              <select
                className="nice-select form-select"
                required
                placeholder="Select Your State..."
                title="Please select a state."
              >
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
            {/* End form */}

            <div>
              <div className="approval-info d-inline-flex align-items-center mt-130 lg-mt-80">
                <span style={{ color: "black" }}>
                  This website is intended solely for raising awareness on
                  osteoporosis and bone health for the elderly. For any medical
                  advice, please consult your doctor.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End .container */}

      <img
        src="/static/images/assets/ils_11.png"
        alt="ilustration"
        className="lazy-img illustration-one"
        data-aos="fade-left"
      />
      <img
        src="/static/images/assets/ils_12.png"
        alt="ilustration"
        className="lazy-img illustration-two"
        data-aos="fade-right"
      />
    </div>
  );
};

export default Hero1;
