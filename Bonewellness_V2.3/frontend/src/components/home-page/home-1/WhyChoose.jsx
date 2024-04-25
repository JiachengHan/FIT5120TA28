const accordionItems = [
  {
    id: 1,
    icon: "/static/images/icon/icon_110.svg",
    title: "Overview",
    content:
      "Osteoporosis is a disease that causes bones to become weak and brittle. It is common in older women, especially post-menopausal women. This condition occurs when new bone formation cannot keep up with the rate at which old bone is lost.",
  },
  {
    id: 2,
    icon: "/static/images/icon/icon_109.svg",
    title: "Causes",
    content:
      "Bone mass usually peaks at age 30, although that can be influenced by genetics and ethnicity. The decrease in bone mass with age increases the risk of osteoporosis in older age groups.",
  },
  {
    id: 3,
    icon: "/static/images/icon/icon_108.svg",
    title: "Complications",
    content:
      "The most severe complications of osteoporosis are bone fractures, especially in the spine and hip, with hip fractures frequently leading to disability and increased mortality within a year. Spinal fractures can occur without a fall, causing back pain, reduced height, and a hunched posture.",
  },
];

const WhyChoose = () => {
  return (
    <div className="accordion accordion-style-five md-mb-70" id="accordionOne">
      {accordionItems.map((item) => (
        <div className="accordion-item" key={item.id}>
          <div className="accordion-header" id={`heading${item.id}`}>
            <button
              className={`accordion-button ${item.id === 2 ? "" : "collapsed"}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${item.id}`}
              aria-expanded={item.id === 2 ? "true" : "false"}
              aria-controls={`collapse${item.id}`}
            >
              <img src={item.icon} alt="" className="me-3" /> {item.title}
            </button>
          </div>
          <div
            id={`collapse${item.id}`}
            className={`accordion-collapse collapse${
              item.id === 1 ? " show" : ""
            }`}
            aria-labelledby={`heading${item.id}`}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyChoose;
