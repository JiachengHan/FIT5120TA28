import React from "react";
import IncreasedRiskofFractures from "../visualisation/IncreasedRiskofFractures";

const RiskofFractures = () => {
  const aboutData = {
    title: {
      subtitle: "Data Source: AIHW",
      mainTitle: <>Increased Risk of Fractures</>,
    },
    content: {
      description:
        "The 2021 data on hospitalizations due to minimal trauma fractures in \
        Australia underscores a significant correlation between age and \
        fracture risk, a common consequence of osteoporosis. As individuals \
        age, their bones naturally weaken, increasing vulnerability to \
        fractures. Notably, this risk is higher in women than in men. \
        Again, this emphasizes the importance of proactive bone health \
        management, especially among the elderly population, to reduce the \
        risk of osteoporosis-related fractures.",
    },
  };

  return (
    <>
      <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        <div className="block-style-one" data-aos="fade-left">
          <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
            <IncreasedRiskofFractures />

            {/* /.card-one */}
          </div>{" "}
          {/* /.img-meta */}
        </div>
        {/* /.block-style-one */}
      </div>
      {/* End .col-5 */}

      <div className="col-md-6 order-md-first" data-aos="fade-right">
        <div className="title-style-one">
          <div className="sc-title text-uppercase">
            {aboutData.title.subtitle}
          </div>
          <h2 className="main-title fw-bold tx-dark m0">
            {aboutData.title.mainTitle}
          </h2>
        </div>
        <p className="fs-20">{aboutData.content.description}</p>
      </div>
    </>
  );
};

export default RiskofFractures;
