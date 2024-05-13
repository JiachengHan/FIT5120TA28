import React from "react";
import AgeSex from "../visualisation/AgeSex";
import HouseMap from "../visualisation/HouseMap";

const FloorMap = () => {
  const aboutData = {
    title: {
      subtitle: "",
      mainTitle: <>High Risk Areas At Home</>,
    },
    content: {
      description:
        "Focusing on home, our analysis of the 2019 falls data for elderly \
        Australians, identified that outdoor areas of the home pose the highest \
        risk, accounting for approximately 30% of falls. This is followed by the \
        bathroom (around 20%), bedroom and living room (each approximately \
        16%), with the kitchen comprising 10% of falls. Conversely, areas such \
        as the driveway and garage present minimal percentages or risk of falls.\
        (Note: Many of the reported falls were reported as “Unspecific area”\
        these are excluded from our analysis。)",
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
          <HouseMap />
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

export default FloorMap;
