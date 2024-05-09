const AppBanner = () => {
  // const features = [
  //   "Compare different insurance Item",
  //   "Buy, store and share all your policies online",
  //   "Email & Live chat.",
  // ];

  // const buttons = [
  //   {
  //     platform: "Google play",
  //     icon: "images/icon/playstore.svg",
  //     className: "windows-button",
  //   },
  //   {
  //     platform: "App store",
  //     icon: "images/icon/apple-black.svg",
  //     className: "ios-button",
  //   },
  // ];

  return (
    <div className="row align-items-center">
      <div className="col-lg-6">
        <div className="block-style-seven" data-aos="fade-right">
          <div className="title-style-one">
            <div className="sc-title text-uppercase">Data Source: AIHW</div>
            <h2 className="main-title fw-500 tx-dark m0">Age and Sex</h2>
          </div>
          <p className="fs-20 pt-30 pb-30 lg-pb-20">
            As we age, our bones gradually lose density, making them more
            susceptible to conditions like osteoporosis. Osteoporosis,
            characterized by significant bone weakening, becomes increasingly
            likely as we grow older. The bar charts depict this trend, showing a
            notable increase in osteoporosis prevalence with older age groups.
            Additionally, the charts shows a clear gender disparity, with women
            being significantly more susceptible to osteoporosis than men.
            <br />
            Therefore, it's crucial that elderly individuals, particularly
            women, take proactive measures to maintain their bone health.
          </p>
          {/* <ul className="style-none list-item">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul> */}
          {/* End list */}

          {/* <div className="d-sm-flex align-items-center platform-button-group-three mt-55 lg-mt-30">
            {buttons.map((button, index) => (
              <a
                href="#"
                className={`d-flex align-items-center ${button.className}`}
                key={index}
              >
                <img src={button.icon} alt="" className="lazy-img icon" />
                <div>
                  <span>Get it on</span>
                  <strong>{button.platform}</strong>
                </div>
              </a>
            ))}
          </div> */}
          {/* /.platform-button-group-three */}
        </div>
        {/* /.block-style-seven */}
      </div>
      {/* End col-6 */}

      <div className="col-lg-6" data-aos="fade-left">
        <div className="illustration-holder position-relative pt-50 pb-50 pe-md-5 lg-mt-80">
          <img
            src="images/media/img_57.png"
            alt=""
            className="lazy-img main-img ms-auto"
          />
          <img
            src="images/media/img_56.png"
            alt=""
            className="lazy-img screen-two"
          />
          {/* <img
            src="images/shape/shape_139.svg"
            alt=""
            className="lazy-img shapes shape-one"
          />
          <img
            src="images/shape/shape_140.svg"
            alt=""
            className="lazy-img shapes shape-two"
          /> */}
        </div>{" "}
        {/* /.illustration-holder */}
      </div>
    </div>
  );
};

export default AppBanner;
