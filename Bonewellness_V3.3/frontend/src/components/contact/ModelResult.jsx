import RiskPanel from "../visualisation/RiskPanel";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BeatLoader } from "react-spinners";
import "../animationTextCss.css";

import axios from "axios";
import Cookies from "js-cookie";

const getCsrfToken = () => {
  return Cookies.get("csrftoken");
};

const ModelResult = ({ probability, result, formData, modelDone }) => {
  const [loading, setLoading] = useState(false);

  const handleDownloadPdf = async () => {
    const postData = {
      ...formData,
      probability,
      result,
    };
    setLoading(true);
    try {
      const csrfToken = getCsrfToken();
      const response = await axios.post(
        "https://bonewellness.xyz/pdf/generate_pdf/",
        postData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
          responseType: "blob",
        }
      );
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fileLink = document.createElement("a");
      fileLink.href = fileURL;
      fileLink.setAttribute("download", "report.pdf");
      document.body.appendChild(fileLink);
      fileLink.click();
    } catch (error) {
      console.error("Error during PDF download:", error);
    }
    setLoading(false);
  };

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
      {modelDone && (
        <div className="address-block-three d-flex mb-15 lg-mb-40">
          <div className="icon">
            <img src="/static/images/icon/icon_162.svg" alt="icon" />
          </div>
          <div className="text">
            <a href="#" onClick={handleDownloadPdf}>
              <h5 className="title">Download Risk Result</h5>
            </a>
            {loading ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <BeatLoader color="#123abc" />
                <span className="bouncing-text" style={{ marginLeft: "10px" }}>
                  Downloading...
                </span>
              </div>
            ) : (
              <p>Click above to Download your result report in PDF file.</p>
            )}
          </div>
        </div>
      )}
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
