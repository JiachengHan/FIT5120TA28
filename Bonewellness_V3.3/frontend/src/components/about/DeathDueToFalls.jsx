import React from "react";
import TrendofDeath from "../visualisation/TrendofDeath";
import RiskofDeath from "../visualisation/RiskofDeath";

const DeathDueToFalls = () => {
  return (
    <>
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 ms-auto order-lg-last"
              data-aos="fade-left"
            >
              <div className="sc-title text-uppercase">Data Source: AIHW</div>
              <RiskofDeath />
            </div>

            <div className="col-lg-6 order-lg-first" data-aos="fade-right">
              <div className="sc-title text-uppercase">Data Source: AIHW</div>
              <TrendofDeath />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-lg-5 col-md-6 ms-auto order-md-last">
        <div className="block-style-one" data-aos="fade-left">
          <RiskofDeath />
        </div>
      </div>

      <div className="col-md-6 order-md-first" data-aos="fade-right">
        <TrendofDeath />
        
      </div> */}
    </>
  );
};

export default DeathDueToFalls;
