import React, { useState } from "react";
import axios from "axios";

const RiskModel = ({
  setResult,
  setProbability,
  formData,
  setFormData,
  setModelDone,
}) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);
    setFormData({
      ...formData,
      [name]: intValue,
    });
    console.log(`${name}: ${intValue}`);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/model/predict/",
        formData
      );
      setProbability(response.data.prob);
      setResult(response.data.result);
      setModelDone(true);
      // console.log(`result: ${response.data.result}`);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="row controls">
        <div className="col-12">
          <div className="form-group mb-35">
            <label className="d-block">
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
            <label className="d-block">
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
            <label className="d-block">3. Do you consume alchohol?*</label>
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
            <label className="d-block">
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
            <label className="d-block">
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
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default RiskModel;
