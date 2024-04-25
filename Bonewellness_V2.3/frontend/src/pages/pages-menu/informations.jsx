import Seo from "../../components/common/Seo";
import Footer from "../../components/home-page/home-10/Footer";
import DefaulHeader from "@/components/header/DefaulHeader";
import AboutCeo from "../../components/about/AboutCeo";
import RiskofFractures from "@/components/about/RiskofFractures";
import ImportanceofBoneHealth from "@/components/about/ImportanceofBoneHealth";
import BodilyPain from "@/components/about/BodilyPain";
import RelatedDeath from "@/components/about/RelatedDeath";

const Informations = () => {
  return (
    <>
      <Seo pageTitle="Information" />
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <DefaulHeader />
      {/* 
      =============================================
      Theme Inner Banner
      ============================================== 
      */}
      <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/static/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">
                An Educational Content
              </h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              on Osteoporosis based on data from Australian Institute of
              Health and Welfare
            </p>
          </div>
          {/* End container */}
        </div>
        {/* /.bg-wrapper */}
      </div>
      {/* /.inner-banner-three */}

      {/* 
        =============================================
        Feature Section Two
        ============================================== 
        */}
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <AboutCeo />
          </div>
        </div>{" "}
      </div>
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <RiskofFractures />
          </div>
        </div>{" "}
      </div>
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <ImportanceofBoneHealth />
          </div>
        </div>{" "}
      </div>
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <BodilyPain />
          </div>
        </div>{" "}
      </div>
      <div className="fancy-feature-two position-relative pt-150 lg-pt-90">
        <div className="container">
          <div className="row align-items-center">
            <RelatedDeath />
          </div>
        </div>{" "}
      </div>
      {/* /.fancy-feature-two */}

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

export default Informations;
