import React, { useState } from "react";
import Seo from "../../components/common/Seo";
import ModelResult from "@/components/contact/ModelResult";
import RiskModel from "@/components/contact/riskmodel";
import Footer from "../../components/home-page/home-10/Footer";
import DefaulHeader from "../../components/header/DefaulHeader";

const RiskAssessment = () => {
  const [result, setResult] = useState("");
  const [probability, setProbability] = useState(50);
  return (
    <>
      <Seo pageTitle="Risk Assessment" />
      {/* <!-- 
      =============================================
      Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />

      {/* 
		=============================================
		Title
		============================================== 
		*/}
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/static/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Risk Assessment</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">This model will help you ...</p>
          </div>

          {/* QA section */}
          <div className="container">
            <div className="contact-section-two text-start mt-80 lg-mt-60">
              <div className="row">
                <div className="col-lg-7">
                  <div
                    className="form-style-three md-mb-60"
                    data-aos="fade-right"
                  >
                    <RiskModel
                      setResult={setResult}
                      setProbability={setProbability}
                    />
                  </div>
                </div>
                {/* result section */}
                <div
                  className="col-xl-4 col-lg-5  ms-auto"
                  data-aos="fade-left"
                >
                  <ModelResult probability={probability} result={result} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =============================================
        Footer
        ============================================== 
        */}
      <div className="footer-style-one theme-basic-footer position-relative">
        <div className="shapes shape-one" />
        <div className="container">
          <div className="inner-wrapper">
            <Footer />
            <div className="bottom-footer">
              <p className="copyright text-center m0">
                © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                TA28 TheFourGurus.
              </p>
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
      </div>
      {/* /.footer-style-one */}
    </>
  );
};

export default RiskAssessment;
