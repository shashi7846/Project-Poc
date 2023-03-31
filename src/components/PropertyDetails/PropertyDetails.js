import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAreaChart,
  faQuestion,
  faMapMarker,
  faMapPin,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { PostPropertyDetails } from "../../api/Api";
import { toast } from "react-toastify";
import { validatePropertyDetailsForm } from "../validators";
import { PuffLoader } from "react-spinners";
import { OverlayTrigger } from "react-bootstrap";

import Popover from "react-bootstrap/Popover";

export const customPopover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Address should only contain..</Popover.Header>
    <Popover.Body>
      <div>1). Alphabets Upper/Lower case</div>
      <div>2). " - "</div>
      <div>3). " / "</div>
      <div>4). Numbers 0-9</div>
      <div>{"->"} Anything other than this is not acceptable.</div>
    </Popover.Body>
  </Popover>
);

const defaultData = {
  address: "",
  area: "",
  pincode: "",
  purposeOfLoan: "",
};

function PropertyDetails(props) {
  const [propertyDetails, setPropertyDetails] = useState(defaultData);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

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
      {/* {loading ? (
        <PuffLoader
          className="Loader"
          color={"#e60909"}
          loading={loading}
          size={100}
        />
      ) : ( */}
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card bg-dark col-6">
            <div className="card-header ">
              <h3 className="login-name text-light">
                <b>PropertyDetails</b>
              </h3>
            </div>
            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form onSubmit={handleOnSubmit}>
                <div className="input-group form-group text-light ">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faMapMarker}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Address</b>
                      </label>
                      <OverlayTrigger
                        trigger="hover"
                        placement="right"
                        overlay={customPopover}
                      >
                        <FontAwesomeIcon
                          className="fa ms-2"
                          icon={faCircleInfo}
                          style={{ fontSize: "1rem", color: "black" }}
                        ></FontAwesomeIcon>
                      </OverlayTrigger>
                    </span>
                  </div>
                  <input
                    type="text"
                    name="address"
                    aria-label="address"
                    className="form-control ms-2"
                    placeholder="Enter your address"
                    value={propertyDetails.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faAreaChart}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Sq.Yard</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control ms-2"
                    name="area"
                    aria-label="area"
                    placeholder="Enter Area in square Yards"
                    value={propertyDetails.area}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faMapPin}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Pincode</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control ms-2"
                    name="pincode"
                    aria-label="Pincode"
                    placeholder="Pincode"
                    value={propertyDetails.pincode}
                    onChange={handleChange}
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faQuestion}
                        style={{
                          fontSize: "1.75em",
                          color: "black",
                          width: "30px",
                        }}
                      ></FontAwesomeIcon>
                      <label className="text-dark  ">
                        <b>Status</b>
                      </label>
                    </span>
                  </div>{" "}
                  <select
                    className="ms-2"
                    name="purposeOfLoan"
                    id="Purpose Of Loan"
                    value={propertyDetails.purposeOfLoan}
                    onChange={handleChange}
                    style={{ width: "442px ", borderRadius: "7px" }}
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
                  <Link
                    type="submit"
                    to="/"
                    className="btn float-right  btn-dark mt-4 px-4  "
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    value="Submit"
                    className="btn float-right  btn-dark mt-4 px-4 "
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}

export default PropertyDetails;
