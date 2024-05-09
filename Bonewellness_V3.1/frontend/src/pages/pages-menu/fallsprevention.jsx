import Seo from "../../components/common/Seo";
import Header5 from "../../components/header/Header5";
import Quote from "../../components/home-page/home-5/Quote";
import About from "../../components/home-page/home-5/about";
import Testimonial from "../../components/home-page/home-5/Testimonial";
import Blog from "../../components/home-page/home-5/Blog";
import Footer from "../../components/footer/Footer";
import Team4 from "../../components/team/Team4";
import { Link } from "react-router-dom";
import HouseMap from "@/components/visualisation/HouseMap";
import FloorMap from "@/components/about/FloorMap";
import DeathDueToFalls from "@/components/about/DeathDueToFalls";
import FallsLocation from "@/components/visualisation/FallsLocation";
import Faq3 from "../../components/faqs/Faq3";

const FallsPrevention = () => {
  return (
    <>
      <Seo pageTitle="Falls Prevention" />
      {/* <!--  =============================================
        Theme Header3 Menu
        ============================================== 	--> */}
      <Header5 />
      {/* 
        =============================================
        Theme Inner Banner
        ============================================== 
        */}
      <div className="inner-banner-one text-center">
        <div className="container">
          <h2 className="title fw-500 tx-dark">Falls Among Elderly</h2>
        </div>
      </div>
      <div className="fancy-feature-fiftySix pt-225 lg-pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="title-style-seven text-center text-lg-start"
                data-aos="fade-right"
              >
                <h2 className="main-title fw-bold tx-dark">
                  Why{" "}
                  <span className="position-relative d-inline-block">
                    Falls{" "}
                    <img src="/static/images/shape/shape_96.svg" alt="shape" />
                  </span>{" "}
                  Prevention?
                </h2>
              </div>
            </div>

            <div className="col-xl-5 col-lg-6 ms-auto" data-aos="fade-left">
              <p className="m0 fs-20 lh-lg text-center text-lg-start md-pt-20">
                As elderly people and particularly those osteoporosis have high
                risk of fall-related fractures, raising awareness about falls
                prevention strategies is crucial because it empowers elderly
                individuals and those with osteoporosis to take proactive steps
                in safeguarding their health and independence.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /.inner-banner-one */}
      {/* 
        =============================================
        Feature Section Forty Six
        ============================================== 
        */}
      {/* <div className="fancy-feature-fortySix position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-20 pb-180 lg-pt-20 md-pb-130">
            <Quote />
          </div>
        </div>
      </div> */}
      {/* 
        =============================================
        Feature Section Forty Eight
        ============================================== 
        */}
      {/* <div className="fancy-feature-fortyEight position-relative">
        <div className="container">
          <div className="line-bg-wrapper position-relative pt-200 pb-200 lg-pt-120 lg-pb-110">
            <About />
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="row align-items-center">
          <DeathDueToFalls />
        </div>
      </div>{" "}
      <div className="fancy-short-banner-twelve position-relative zn2 pt-160 pb-150 lg-pt-120 lg-pb-120">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="col-xl-8 m-auto text-center">
              <div className="title-style-ten" data-aos="fade-up">
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  <span className="position-relative">
                    Home{" "}
                    <img src="/static/images/shape/shape_132.svg" alt="shape" />
                  </span>
                  Is Where Most Falls Occur For Elderly
                </h2>
              </div>
            </div>
          </div>
          <FallsLocation />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <FloorMap />
        </div>
      </div>{" "}
      <div className="fancy-feature-twentyFive mt-140 lg-mt-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-9 m-auto" data-aos="fade-up">
              <div className="title-style-seven text-center pb-120 lg-pb-50">
                <h2 className="main-title fw-bold tx-dark">
                  How to Prevent? <br /> Well, Here are some{" "}
                  <span className="position-relative d-inline-block">
                    Strategies{" "}
                    <img src="/static/images/shape/shape_99.svg" alt="" />
                  </span>
                </h2>
              </div>{" "}
            </div>

            <div className="col-xl-9 col-lg-10 m-auto" data-aos="fade-up">
              <Faq3 />
              {/* /.accordion-style-two */}
            </div>

            <div
              className="text-center mt-80 lg-mt-50"
              data-aos="fade-up"
            ></div>
          </div>
        </div>{" "}
        {/* /.container */}
      </div>
      {/* <div className="feedback-section-fourteen position-relative zn2">
        <div className="container">
          <div className="line-bg-wrapper position-relative zn2 pt-250 pb-180 lg-pt-120 lg-pb-80">
            <div className="row">
              <div className="col-md-6" data-aos="fade-right">
                <div className="title-style-five">
                  <h2 className="main-title fw-500 tx-dark">Title</h2>
                </div>
                <div className="mt-120 lg-mt-40 ps-xl-5 ms-xl-5">
                  <div className="feedback_slider_eleven">
                    <Testimonial />
                  </div>
                </div>
              </div>

              <div className="col-xl-6 col-lg-5 col-md-6 ms-auto">
                <div className="position-relative mt-25" data-aos="fade-left">
                  <HouseMap />
                  <img
                    src="/static/images/shape/shape_163.svg"
                    alt="shape"
                    className="lazy-img shapes shape-one"
                  />
                  <img
                    src="/static/images/shape/shape_168.svg"
                    alt="shape"
                    className="lazy-img shapes shape-two"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/static/images/shape/shape_169.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
        />
      </div> */}
      {/* 
        =============================================
        Blog Section Six
        ============================================== 
        */}
      {/* <div className="blog-section-six position-relative zn2 pt-150 pb-200 lg-pt-90 lg-pb-100">
        <div className="container">
          <div className="position-relative">
            <div className="title-style-five text-center text-sm-start mb-30 lg-mb-10">
              <h2 className="main-title fw-500 tx-dark">Our Blog</h2>
            </div>

            <div className="row gx-xxl-5">
              <Blog />
            </div>

            <div className="btn-holder text-center">
              <div className="btn-eighteen position-relative d-inline-block tx-dark">
                <Link to="/blog/blog-v1" className="fw-500 tran3s">
                  Check our all news <i className="fa-solid fa-angle-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          src="/static/images/shape/shape_163.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
      </div> */}
      {/* <!--
        =====================================================
        Footer
        =====================================================
        --> */}
      <div className="footer-style-ten theme-basic-footer zn2 position-relative">
        <div className="container">
          <div className="inner-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-3 footer-intro mb-40">
                <div className="logo">
                  <Link to="/">
                    <img
                      src="/static/images/logo/logo_02.png"
                      alt="logo"
                      width={95}
                    />
                  </Link>
                </div>
                <p className="text-white opacity-75 fs-18 mt-15 mb-45 lg-mb-10">
                  Everything for Your Bone Health.
                </p>
                <p className="text-white opacity-50 fs-15 m0 d-none d-lg-block">
                  © {new Date().getFullYear()} - {new Date().getFullYear() + 1}{" "}
                  TA28 TheFourGurus.
                </p>
              </div>
              <Footer />
            </div>
          </div>
          {/* /.inner-wrapper */}
        </div>
        {/* End .container */}
        <img
          src="/static/images/assets/ils_13.png"
          alt="illustration"
          className="lazy-img illustration-one"
          data-aos="fade-left"
        />
        <img
          src="/static/images/assets/ils_14.png"
          alt="illustration"
          className="lazy-img illustration-two"
          data-aos="fade-right"
        />
      </div>
    </>
  );
};

export default FallsPrevention;
