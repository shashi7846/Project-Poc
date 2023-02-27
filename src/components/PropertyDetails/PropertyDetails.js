import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAreaChart,
  faQuestion,
  faMapMarker,
  faInr,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { PostPropertyDetails } from "../../Api/Api";
import { toast } from "react-toastify";
import { validatePropertyDetailsForm } from "../helpers";

const defaultData = {
  address: "12-12-120",
  area: "30000",
  price: "3500000",
  downPayment: "1500000",
  loanAmount: "2500000",
  purposeOfLoan: "Ready To Move",
};

function PropertyDetails(props) {
  const [propertyDetails, setPropertyDetails] = useState(defaultData);

  let navigate = useNavigate();
  const handleChange = (e) =>
    setPropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value });

  const handleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const errors = validatePropertyDetailsForm(propertyDetails);
      if (errors.length) {
        throw new Error(errors[0]);
      }
      await PostPropertyDetails(localStorage.getItem("id"), {
        propertyDetails,
      });
      setPropertyDetails(defaultData);
      navigate("/emicheck");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card bg-dark col-4">
            <div className="card-header ">
              <h3 className="login-name text-light">PropertyDetails</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form onSubmit={handleOnSubmit}>
                <div className="input-group form-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faMapMarker}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Enter your address"
                    value={propertyDetails.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faAreaChart}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    name="area"
                    placeholder="Enter Area in square Yards"
                    value={propertyDetails.area}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="Property Price"
                    value={propertyDetails.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    name="downPayment"
                    placeholder="Enter Down Payment"
                    value={propertyDetails.downPayment}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      />
                    </span>
                  </div>

                  <input
                    type="number"
                    className="form-control"
                    name="loanAmount"
                    placeholder="Enter Loan Amount"
                    value={propertyDetails.loanAmount}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faQuestion}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>{" "}
                  <select
                    name="purposeOfLoan"
                    id="Purpose Of Loan"
                    value={propertyDetails.purposeOfLoan}
                    onChange={handleChange}
                    style={{ width: "347px ", borderRadius: "7px" }}
                  >
                    <option value="Purpose Of Loan" disabled>
                      Purpose Of Loan {""}
                    </option>
                    <option value="UnderConstruction">UnderConstruction</option>
                    <option value="Ready To Move">Ready To Move</option>
                    <option value="Home Renovation">Home Renovation</option>
                  </select>{" "}
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn float-right  btn-dark mt-2"
                  >
                    <Link to="/login">Back</Link>
                  </button>
                  <button
                    type="submit"
                    value="Submit"
                    className="btn float-right  btn-dark mt-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PropertyDetails;
