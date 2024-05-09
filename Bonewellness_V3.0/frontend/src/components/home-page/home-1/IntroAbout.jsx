import { useState } from "react";
import ModalVideo from "react-modal-video";

const IntroAbout = () => {
  const [isOpen, setOpen] = useState(false);
  const cardsData = [
    {
      id: 1,
      cardNo: "card-one",
      title: "Diagnose",
      subtitle: "Osteoporosis",
    },
    {
      id: 2,
      title: "Measure ",
      cardNo: "card-two",
      subtitle: "Risk of fractures",
    },
    {
      id: 3,
      title: "Monitor",
      cardNo: "card-three",
      subtitle: "Osteoporosis treatment",
    },
  ];

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="pVBlu6pD46o"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-xl-5 col-md-6 order-md-last">
          <div className="text-wrapper md-pb-70">
            <img
              src="/static/images/icon/icon_103.svg"
              alt="icon"
              className="lazy-img cursor-pointer"
              onClick={() => setOpen(true)}
            />
            <p className="tx-dark pt-30 pb-30 md-pb-15" data-aos="fade-up">
              Clicking the Play icon above to check out{" "}
              <strong className="fw-500">
                Bone Mineral Density (BMD) Test
              </strong>
              .
            </p>
            <h6
              className="fs-20 tx-dark d-inline-block fst-italic position-relative ps-4"
              data-aos="fade-up"
            >
              Delhi Orthopedic Clinic
            </h6>
          </div>
          {/* /.text-wrapper */}
        </div>
        {/* End .col */}

        <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-up">
          <div className="img-holder d-lg-inline-flex position-relative zn2 pb-45 xl-pb-90">
            <img
              src="/static/images/shape/shape_135.svg"
              alt="shape"
              className="lazy-img"
            />
            <img
              src="/static/images/media/img_53.png"
              className="lazy-img avatar-img"
              alt="man"
            />

            {cardsData.map((item) => (
              <div
                className={`card-style ${item.cardNo} d-flex justify-content-center`}
                key={item.id}
              >
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="bi bi-check-lg" />
                </div>
                <div className="ps-2 ps-lg-4">
                  <h3>{item.title}</h3>
                  <p className="fs-20 tx-dark m0">{item.subtitle}</p>
                </div>
              </div>
            ))}
            {/* /.card */}
          </div>
        </div>
        {/* End .col-xl-7 */}
      </div>
    </>
  );
};

export default IntroAbout;
