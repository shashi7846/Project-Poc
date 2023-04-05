import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faPercent,
  faInr,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { emiCalculator, emicheckValidation } from "../validators";
import { PuffLoader } from "react-spinners";
import { errorToast } from "../Toast";

const defaultData = {
  loanAmount: "",
  netIncome: "",
  tenure: "",
  price: "",
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

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // let navigate = useNavigate();
  const handleChange = (e) =>
    setEmiCheck({ ...emicheck, [e.target.name]: e.target.value });
  const handleClose = () => setShow(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const errors = emicheckValidation(emicheck);
    if (errors.length) {
      errorToast(errors[0]);
      return;
    }
    const { loanAmount, netIncome, tenure, interest } = emicheck;
    const emi = emiCalculator(loanAmount, interest, tenure);
    const maxLoanAmount = Math.floor(((+netIncome * 0.5) / +emi) * loanAmount);
    const maxEmi = emiCalculator(maxLoanAmount, interest, tenure);
    setEligibility({ loanAmount, emi, maxLoanAmount, maxEmi });
    setShow(true);
  };

  return (
    <>
      {/* {loading ? (
        <PuffLoader
          className="Loader"
          color={'#e60909'}
          loading={loading}
          size={100}
        />
      ) : ( */}
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card bg-dark col-6">
            <div className="card-header ">
              <h3 className="login-name text-light">
                <b>Check Emi</b>
              </h3>
            </div>
            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form onSubmit={handleOnSubmit}>
                <div className="input-group form-group mt-3 mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      />{" "}
                      <label className="text-dark ms-2">
                        <b>PropertyPrice</b>
                      </label>
                    </span>
                  </div>

                  <input
                    type="number"
                    className="form-control ms-2"
                    name="price"
                    placeholder="Enter property price"
                    value={emicheck.price}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>LoanAmount</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control ms-2"
                    name="loanAmount"
                    value={emicheck.loanAmount}
                    onChange={handleChange}
                    placeholder="Enter Loan Amount"
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
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Income P/M</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="number"
                    className="form-control ms-2"
                    name="netIncome"
                    value={emicheck.netIncome}
                    onChange={handleChange}
                    placeholder="Net Income Per Month"
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
                        icon={faCalendar}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>LoanTenure</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="number"
                    min={12}
                    max={120}
                    step={12}
                    className="form-control ms-2"
                    name="tenure"
                    value={emicheck.tenure}
                    onChange={handleChange}
                    placeholder=" Select Loan Tenure"
                  />
                </div>
                <div>
                  <label htmlFor="loan-amount" className="form-label"></label>
                  <input
                    type="range"
                    className="form-range mt-2 mb-3"
                    name="tenure"
                    min={12}
                    max={120}
                    step={12}
                    value={emicheck.tenure}
                    onChange={handleChange}
                  ></input>
                </div>

                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faPercent}
                        style={{ fontSize: "1.75em", color: "black" }}
                      />{" "}
                      <label className="text-dark ms-2">
                        <b>InterestRate</b>
                      </label>
                    </span>
                  </div>

                  <input
                    type="number"
                    aria-label="interest"
                    className="form-control ms-2"
                    value={emicheck.interest}
                    placeholder="Rate Of Interest"
                    disabled
                  />
                </div>
                <div className="form-group mt-2">
                  <Link
                    type="submit"
                    to="/Propertydetails"
                    className="btn float-right  btn-dark mt-2 px-4 "
                  >
                    <b>Back</b>
                  </Link>
                  <Link
                    type="submit"
                    to="/"
                    className="btn float-right  btn-dark mt-2 px-4"
                  >
                    <b>Close</b>
                  </Link>
                  <button
                    type="submit"
                    className="btn float-right  btn-dark mt-2 px-4"
                  >
                    <b>Check Eligibility</b>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Loan Eligibility</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Emi For Entered Amount will be<b>₹ {eligibility.loanAmount}</b> at EMI
          <b> ₹ {eligibility.emi}</b> */}
          <br /> <h4>You are Eligible for a Maximum loan of</h4> <br />
          <b>₹ {eligibility.maxLoanAmount} </b>
          at EMI <b>₹ {eligibility.maxEmi}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <Link to="/confirmpage" style={{ color: "white" }}>
              {" "}
              Proceed
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Emicheck;
