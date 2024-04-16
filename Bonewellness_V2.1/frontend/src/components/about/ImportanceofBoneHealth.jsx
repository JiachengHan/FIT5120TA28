import React from "react";
import FracturesSites from "../visualisation/FracturesSites";

const ImportanceofBoneHealth = () => {
  const aboutData = {
    title: {
      subtitle: "Data Source: AIHW",
      mainTitle: <>Common Fractures Sites Among Elderly</>,
    },
    content: {
      description:
        "The data spanning from 2011 to 2021 on hospitalizations for minimal trauma fractures, \
        indicates that for individuals over the age of 65, hip fractures are the most prevalent. \
        Not only are hip fractures the most common, but they can permanently impact one's mobility, \
        and increase the elderly’s risk of death. Reviews have found that fewer than half of those who \
        suffer a hip fracture return to their pre-fracture level of mobility. The latter emphasizes the importance of \
        being proactive about one's bone health, as many seniors may face long-term challenges in regaining \
        their independence and mobility following such an injury.",
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
          <FracturesSites />

          {/* /.card-one */}
        </div>{" "}
        {/* /.img-meta */}
      </div>
    </>
  );
};

export default ImportanceofBoneHealth;
