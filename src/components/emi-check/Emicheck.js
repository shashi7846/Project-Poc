import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPercent,
  faInr,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { emiCalculator } from "../helpers";

const defaultData = {
  loanAmount: "800000",
  netIncome: "30000",
  tenure: "72",
  interest: "9.5",
};

function Emicheck() {
  const [emicheck, setEmiCheck] = useState(defaultData);
  const [show, setShow] = useState(false);
  const [eligibility, setEligibility] = useState({
    loanAmount: 0,
    emi: 0,
    maxLoanAmount: 0,
    maxEmi: 0,
  });

  let navigate = useNavigate();
  const handleChange = (e) =>
    setEmiCheck({ ...emicheck, [e.target.name]: e.target.value });
  const handleClose = () => setShow(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const { loanAmount, netIncome, tenure, interest } = emicheck;
    const emi = emiCalculator(loanAmount, interest, tenure);
    const maxLoanAmount = Math.floor(((+netIncome * 0.5) / +emi) * loanAmount);
    const maxEmi = emiCalculator(maxLoanAmount, interest, tenure);
    setEligibility({ loanAmount, emi, maxLoanAmount, maxEmi });
    setShow(true);
    // navigate('/');
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card bg-dark col-4">
            <div className="card-header ">
              <h3 className="login-name text-light">Check Emi</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form onSubmit={handleOnSubmit}>
                <div className="input-group form-group">
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
                    name="loanAmount"
                    value={emicheck.loanAmount}
                    onChange={handleChange}
                    placeholder="Enter Loan Amount"
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
                    name="netIncome"
                    value={emicheck.netIncome}
                    onChange={handleChange}
                    placeholder="Net Income Per Month"
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faCalendar}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control"
                    name="tenure"
                    value={emicheck.tenure}
                    onChange={handleChange}
                    placeholder=" Select Loan Tenure"
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faPercent}
                        style={{ fontSize: "1.75em", color: "black" }}
                      />
                    </span>
                  </div>

                  <input
                    type="number"
                    className="form-control"
                    value={emicheck.interest}
                    placeholder="Rate Of Interest"
                    disabled
                  />
                </div>
                <div className="form-group">
                  <Link
                    type="submit"
                    to="/Propertydetails"
                    className="btn float-right  btn-dark mt-2 "
                  >
                    Back
                  </Link>
                  <Link
                    type="submit"
                    to="/"
                    className="btn float-right  btn-dark mt-2 "
                  >
                    Close
                  </Link>
                  <button
                    type="submit"
                    className="btn float-right  btn-dark mt-2"
                  >
                    Check Eligibility
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>You are Eligible</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <b>₹ {eligibility.loanAmount}</b> at EMI<b> ₹ {eligibility.emi}</b>{" "}
          You are Eligible for a Maximum loan of{" "}
          <b>₹ {eligibility.maxLoanAmount} </b>
          at EMI <b>₹ {eligibility.maxEmi}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Emicheck;
