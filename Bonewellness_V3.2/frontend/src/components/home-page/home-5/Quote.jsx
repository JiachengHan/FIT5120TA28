const Quote = () => {
  return (
    <div
      className="quote-wrapper text-center mt-120 lg-mt-80"
      data-aos="fade-up"
    >
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
            <img
              src="/static/images/icon/icon_138.svg"
              alt=""
              className="lazy-img"
            />
          </div>
          <p className="tx-dark mt-25 mb-30 fw-500">
            As elderly people and particularly those osteoporosis have high risk
            of fall-related fractures, raising awareness about falls prevention
            strategies is crucial because it empowers elderly individuals and
            those with osteoporosis to take proactive steps in safeguarding
            their health and independence.
          </p>
          <h6 className="fw-normal fst-italic tx-dark opacity-50 fs-20">
            Marvin S.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Quote;
