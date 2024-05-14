const Feature = () => {
  const features = [
    {
      background: "#fffee7",
      title: <>New Treatment Targets for Osteoporosis.</>,
      description:
        "Pave the way for future treatments not just for osteoporosis but also for conditions like arthritis",
      icon: "/static/images/icon/icon_100.svg",
      ref: "https://www.sciencedaily.com/releases/2021/10/211014100223.htm",
      width: "169",
      height: "165",
      delay: "100",
    },
    {
      background: "#FBF1FF",
      title: <>Innovations in Drug Development.</>,
      width: "202",
      height: "170",
      ref: "https://www.purdue.edu/newsroom/releases/2021/Q1/new-drug-form-may-help-treat-osteoporosis,-calcium-related-disorders.html",
      description: "Replace the currently used salmon calcitonin",
      icon: "/static/images/icon/icon_101.svg",
      delay: "200",
    },
    {
      background: "#EEFBFA",
      title: <>Global Collaboration for Bone Health.</>,
      width: "175",
      height: "175",
      ref: "https://www.who.int/news/item/23-02-2023-new-collaboration-targets-better-bone-health-and-ageing",
      description: "Develop a strategic roadmap on bone health and aging",
      icon: "/static/images/icon/icon_102.svg",
      delay: "300",
    },
  ];

  return (
    <>
      {features.map((feature, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={index}
          data-aos="fade-up"
          data-aos-delay={feature.delay}
        >
          <a
            href={feature.ref}
            target="_blank"
            className={`card-style-fifteen tran3s position-relative mt-35`}
            style={{ background: feature.background }}
          >
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>

            <img src={feature.icon} alt="icon" className="position-absolute" />
          </a>{" "}
          {/* /.card-style-fifteen */}
        </div>
      ))}
    </>
  );
};

export default Feature;
