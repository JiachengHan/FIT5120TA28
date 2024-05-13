import React, { useState } from "react";
import { BeatLoader } from "react-spinners";
import axios from "axios";
import Cookies from "js-cookie";
import "../animationTextCss.css";

const getCsrfToken = () => {
  return Cookies.get("csrftoken");
};

const RiskModel = ({
  setResult,
  setProbability,
  formData,
  setFormData,
  setModelDone,
}) => {
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    setFormData({
      ...formData,
      [name]: intValue,
    });
    // console.log(`${name}: ${intValue}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const csrfToken = getCsrfToken();
      const response = await axios.post(
        "https://bonewellness.xyz/model/predict/",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrfToken,
          },
        }
      );
      setProbability(response.data.prob);
      setResult(response.data.result);
      setModelDone(true);
    } catch (error) {
      console.error("Error during API call:", error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="form-group mb-35">
            <label className="d-block" style={{ fontWeight: "bolder" }}>
              1. Do you have CAD (Coronary Artery Disease)?*
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <input
                type="radio"
                id="cad_yes"
                name="CAD"
                value="1"
                required
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="cad_yes" style={{ marginRight: "20px" }}>
                Yes
              </label>
              <input
                type="radio"
                id="cad_no"
                name="CAD"
                value="0"
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="cad_no">No</label>
            </div>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-35">
            <label className="d-block" style={{ fontWeight: "bolder" }}>
              2. Have you had fractures before?*
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <input
                type="radio"
                id="fracture_yes"
                name="fracture"
                value="1"
                required
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="fracture_yes" style={{ marginRight: "20px" }}>
                Yes
              </label>
              <input
                type="radio"
                id="fracture_no"
                name="fracture"
                value="0"
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="fracture_no">No</label>
            </div>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-35">
            <label className="d-block" style={{ fontWeight: "bolder" }}>
              3. Do you consume alchohol?*
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <input
                type="radio"
                id="alcohol_yes"
                name="alcohol"
                value="1"
                required
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="alcohol_yes" style={{ marginRight: "20px" }}>
                Yes
              </label>
              <input
                type="radio"
                id="alcohol_no"
                name="alcohol"
                value="0"
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="alcohol_no">No</label>
            </div>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-35">
            <label className="d-block" style={{ fontWeight: "bolder" }}>
              4. Do you have COPD (Chronic Obstructive Pulmonary Disease)?*
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <input
                type="radio"
                id="COPD_yes"
                name="COPD"
                value="1"
                required
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="COPD_yes" style={{ marginRight: "20px" }}>
                Yes
              </label>
              <input
                type="radio"
                id="COPD_no"
                name="COPD"
                value="0"
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="COPD_no">No</label>
            </div>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group mb-35">
            <label className="d-block" style={{ fontWeight: "bolder" }}>
              5. Are you 65 years old and above?*
            </label>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "16px",
              }}
            >
              <input
                type="radio"
                id="age_yes"
                name="age"
                value="1"
                required
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="age_yes" style={{ marginRight: "20px" }}>
                Yes
              </label>
              <input
                type="radio"
                id="age_no"
                name="age"
                value="0"
                style={{ marginRight: "5px", transform: "scale(1.2)" }}
                onChange={handleInputChange}
              />
              <label htmlFor="age_no">No</label>
            </div>
            <div className="help-block with-errors" />
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-one fw-500 w-100 text-uppercase fs-14 d-block"
            disabled={loading}
          >
            Submit
          </button>
          {loading && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <BeatLoader color="#123abc" />
              <span className="bouncing-text" style={{ marginLeft: "10px" }}>
                Getting Result...
              </span>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default RiskModel;
