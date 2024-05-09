import React from "react";
import AgeSex from "../visualisation/AgeSex";

const AboutCeo = () => {
  const aboutData = {
    title: {
      subtitle: "Data Source: AIHW",
      mainTitle: <>Age and Sex</>,
    },
    content: {
      description:
        "As we age, our bones gradually lose density, making them more susceptible \
        to conditions like osteoporosis characterized by significant bone weakening. \
        The bar charts depict the trend of Osteoporosis becoming increasingly likely as we grow older.  \
        It shows a notable increase in osteoporosis prevalence with older age groups. Additionally, \
        the charts show a clear gender disparity, with women being significantly more susceptible to osteoporosis than men. \
        Therefore, it's crucial that elderly individuals, particularly women, \
        take proactive measures to maintain their bone health.",
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
          <AgeSex />
          {/* <img
            style={{ objectFit: "cover" }}
            src="/images/media/img_01.jpg"
            alt="shape"
            className="lazy-img"
          /> */}

          {/* /.card-one */}
        </div>{" "}
        {/* /.img-meta */}
      </div>
    </>
  );
};

export default AboutCeo;
