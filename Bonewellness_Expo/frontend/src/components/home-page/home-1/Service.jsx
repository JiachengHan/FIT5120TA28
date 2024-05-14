import { Link } from "react-router-dom";

const services = [
  {
    icon: "/static/images/icon/icon_105.svg",
    title: "Learning about Osteoporosis",
    direct: "/pages-menu/informations",
    delayAnim: 0,
  },
  {
    icon: "/static/images/icon/icon_104.svg",
    title: "Preventing Osteoporosis",
    direct: "/pages-menu/preventionpage",
    delayAnim: 100,
  },
  {
    icon: "/static/images/icon/icon_106.svg",
    title: "Finding Hospitals Near Me",
    direct: "/portfolio/HospitalPage",
    delayAnim: 200,
  },
  {
    icon: "/static/images/icon/icon_107.svg",
    title: "Accessing Risk Model Assessment",
    direct: "/contact/riskassessment",
    delayAnim: 300,
  },
];

const Service = () => {
  return (
    <>
      {services.map((service, index) => (
        <div
          className="col-xl-3 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={service.delayAnim}
        >
          <div className="card-style-sixteen tran3s text-center position-relative mt-30">
            <Link to={service.direct}>
              <div className="icon">
                <img src={service.icon} alt="" className="lazy-img m-auto" />
              </div>
              <p className="fs-20 m0 pt-20">I want</p>
              <h4 className="tx-dark">{service.title}</h4>
              <i className="bi bi-arrow-right" />
            </Link>
          </div>{" "}
          {/* /.card-style-sixteen */}
        </div>
      ))}
    </>
  );
};

export default Service;
