const Block = () => {
  return (
    <>
      <div className="row align-items-end" data-aos="fade-up">
        <div className="col-md-5 col-sm-4">
          <img
            src="/static/images/shape/shape_136.svg"
            alt="shape"
            className="lazy-img d-none d-sm-inline-block"
          />
        </div>
        <div className="col-md-7 col-sm-8" data-aos="fade-down">
          <div className="block-wrapper block-one">
            <h3 style={{ color: "#FFAE10" }}>No Heavy Alcohol</h3>
            <p>Be sure to limit alcohol consumption.</p>
          </div>
          {/* /.block-wrapper */}
        </div>
      </div>
      {/* End .row */}

      <div className="row gx-xxl-5" data-aos="fade-down">
        <div className="col-sm-7" data-aos="fade-down">
          <div className="block-wrapper block-two position-relative mt-50 sm-mt-30">
            <h3 style={{ color: "#9650EF" }}>
              Limited <br />
              <span>Caffeine</span>
            </h3>
            <p>
              Coffee, tea and soft drinks (sodas) contain caffeine, which may
              decrease calcium absorption and contribute to bone loss.
            </p>
            <img
              src="/static/images/shape/shape_138.svg"
              alt="sahpe"
              className="lazy-img shapes shape-one"
            />
          </div>
          {/* /.block-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-sm-5" data-aos="fade-up">
          <div className="block-wrapper block-three mt-50 sm-mt-30">
            <h3 style={{ color: "#00BDE6" }}>
              <span>Light Diet</span>
            </h3>
            <p>
              Salty food causes your body to lose calcium and can lead to bone
              loss.
            </p>
          </div>
          {/* /.block-wrapper */}
          <img
            src="/static/images/shape/shape_137.svg"
            alt="shape"
            className="lazy-img mt-30 ms-auto me-auto d-none d-sm-inline-block"
          />
        </div>
      </div>
    </>
  );
};

export default Block;
