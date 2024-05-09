import React from "react";
import ReportedBodilyPain from "../visualisation/ReportedBodilyPain";

const BodilyPain = () => {
  const aboutData = {
    title: {
      subtitle: "Data Source: AIHW",
      mainTitle: <>Increased Bodily Pain</>,
    },
    content: {
      description:
        "Osteoporosis is not only a risk factor for fractures but also \
        associates with increased levels of pain. Data from the 2017 \
        national health survey reveals that individuals with osteoporosis \
        report experiencing severe pain at more than double the rate of \
        those without the condition. Across all pain categories, from \
        moderate to very severe, there is a consistently higher prevalence \
        of pain among those with osteoporosis compared to those without.",
    },
  };

  return (
    <>
      <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        <div className="block-style-one" data-aos="fade-left">
          <div className="img-meta d-inline-block position-relative ps-3 ps-lg-5 pb-50 sm-mt-90">
            <ReportedBodilyPain />

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

export default BodilyPain;
