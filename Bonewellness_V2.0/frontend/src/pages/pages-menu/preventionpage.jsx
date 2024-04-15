import Seo from "../../components/common/Seo";
import DefaulHeader from "../../components/header/DefaulHeader";
import DefaultFooter from "../../components/footer/DefaultFooter";
import Partners from "../../components/services/Partners";
import Faq from "../../components/services/Faq";
import Testimonial from "../../components/home-page/home-3/Testimonial";
import Block from "../../components/services/Block";
import { Link } from "react-router-dom";
import PreventionVideo from "@/components/about/PreventionVideo";
import Counter from "../../components/about/Counter";

const PreventionPage = () => {
  const features = [
    {
      text: "Dairy products such as low-fat and non-fat milk, yogurt and cheese.",
    },
    { text: "Fish like canned sardines and salmon (with bones)." },
    { text: "Fruits and vegetables like chinese cabbage." },
    {
      text: "Fortified Foods like Calcium and vitamin D are sometimes added to certain brands of juices.",
    },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      <Seo pageTitle="Prevention" />

      <DefaulHeader />

      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <div className="sc-title-two fst-italic position-relative">
                  Teaching you more about
                </div>
                <h2 className="main-title fw-500 tx-dark">
                  How to prevent osteoporosis.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">
                  According to{" "}
                  <a
                    href="https://www.guidelinecentral.com/guideline/1226249/"
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                  >
                    ACOG Clinical Practice Guideline
                  </a>
                </h6>
                <p className="text-lg tx-dark">
                  Routine aerobic physical activity (moderate-to-high impact)
                  and weight-bearing exercises (muscle strengthening or exercise
                  against resistance) can maintain bone health and prevent bone
                  loss. This is based on moderate-quality evidence that suggests
                  such activities, including resistance training, can preserve
                  or improve Bone Mineral Density (BMD) throughout life.
                </p>
                <div className="row">
                  <Counter />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container */}

        <img
          src="/images/shape/shape_171.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
        />
        <img
          src="/images/shape/shape_172.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
        />
      </div>

      <PreventionVideo />

      {/* 
			=============================================
				Feature Section Thirty Seven
			============================================== 
			*/}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">
                    Something About Food
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    Diet improves osteoporosis.
                  </h2>
                </div>
                {/* /.title-style-ten */}
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  According to an article published by{" "}
                  <a
                    href="https://www.bonehealthandosteoporosis.org/patients/treatment/nutrition/"
                    target="_blank"
                    style={{ textDecoration: "underline" }}
                  >
                    Bone Health and Osteoporosis Foundation
                  </a>
                  , <br />
                  the following food are good for your bones.
                </p>
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End .col */}

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
            {/* End .col */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.fancy-feature-thirtySeven */}

      {/*
			=====================================================
				Fancy Short Banner Sixteen
			=====================================================
			*/}
      <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        There is no end to learning.
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Discover more about how to prevent osteoporosis.
                      </h2>
                    </div>
                  </div>
                  {/* End .col-6 */}

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <a
                      href="https://www.hopkinsmedicine.org/health/conditions-and-diseases/osteoporosis/what-you-can-do-now-to-prevent-osteoporosis"
                      className="btn-twentyOne fw-500 tran3s"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Started Today!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.bg-wrapper */}
        </div>
      </div>
      {/* /.fancy-short-banner-sixteen */}

      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
      <DefaultFooter />
    </>
  );
};

export default PreventionPage;
