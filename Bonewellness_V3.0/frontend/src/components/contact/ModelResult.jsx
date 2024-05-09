import RiskPanel from "../visualisation/RiskPanel";
import { Link } from "react-router-dom";
const ModelResult = ({ probability, result }) => {
  const addressBlocks = [
    {
      icon: "/static/images/icon/icon_162.svg",
      title: "Download Result PDF",
      content: <>Click above to Download your result report in PDF file.</>,
    },
    {
      icon: "/static/images/icon/icon_161.svg",
      title: "Nearby Hosptial",
      content: <>Click above to find the hosptials near you.</>,
    },
  ];

  return (
    <>
      <div className="address-block-three d-flex mb-15 lg-mb-40">
        <div className="icon">
          <img src="/static/images/icon/icon_163.svg" alt="icon" />
        </div>
        <div className="text">
          <h5 className="title">Your Result</h5>
          <RiskPanel value={probability} />
          <p>{result}</p>
        </div>
      </div>
      <div className="address-block-three d-flex mb-15 lg-mb-40">
        <div className="icon">
          <img src="/static/images/icon/icon_162.svg" alt="icon" />
        </div>
        <div className="text">
          <h5 className="title">Download Result PDF</h5>
          <p>Click above to Download your result report in PDF file.</p>
        </div>
      </div>
      <div className="address-block-three d-flex mb-15 lg-mb-40">
        <div className="icon">
          <img src="/static/images/icon/icon_161.svg" alt="icon" />
        </div>
        <div className="text">
          <Link to="/portfolio/HospitalPage">
            <h5 className="title">Nearby Hosptial</h5>
          </Link>
          <p>Click above to find the hosptials near you.</p>
        </div>
      </div>
      {/* {addressBlocks.map((block, index) => (
        <div className="address-block-three d-flex mb-70 lg-mb-40" key={index}>
          <div className="icon">
            <img src="/static/images/icon/icon_161.svg" alt="icon" />
          </div>
          <div className="text">
            <h5 className="title">{block.title}</h5>
            <p>{block.content}</p>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default ModelResult;
