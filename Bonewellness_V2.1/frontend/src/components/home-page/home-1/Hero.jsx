import React from "react";

const Hero1 = () => {
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
              Everything for your <span>Bone</span> Health.
            </h1>
            <p className="text-lg tx-dark mt-45 mb-50 lg-mt-30 lg-mb-40">
              Type in postcode to find the hospital that offer BMD test near
              you.
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
