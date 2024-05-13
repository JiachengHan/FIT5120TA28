import React from "react";
import Lineandbar from "../visualisation/lineandbar";

const RelatedDeath = () => {
  const aboutData = {
    title: {
      subtitle: "Data Source: AIHW",
      mainTitle: <>Osteoporosis-related Deaths</>,
    },
    content: {
      description:
        "The visualsations here show osteoporosis-related deaths in \
        Australia over the years, highlighting it as a significant health \
        issue, especially for women. The data reveals almost a constant \
        proportion of such deaths, emphasizing the need for better bone \
        health management and awareness, especially for those aged 65 and \
        above.",
    },
  };

  return (
    <>
      <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        <div className="block-style-one" data-aos="fade-left">
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
        {/* /.block-style-one */}
      </div>
      {/* End .col-5 */}

      <div className="col-md-6 order-md-first" data-aos="fade-right">
        <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
          <Lineandbar />

          {/* /.card-one */}
        </div>{" "}
        {/* /.img-meta */}
      </div>
    </>
  );
};

export default RelatedDeath;
