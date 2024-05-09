import RiskPanel from "../visualisation/RiskPanel";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ModelResult = ({ probability, result, formData, modelDone }) => {
  const handleDownloadPdf = async () => {
    const postData = {
      ...formData,
      probability,
      result,
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/pdf/generate_pdf/",
        postData,
        {
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
              <h5 className="title">Download Result PDF</h5>
            </a>
            <p>Click above to Download your result report in PDF file.</p>
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
