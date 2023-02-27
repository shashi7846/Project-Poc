import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const Howtoapply = () => {
  return (
    <div className="card bg-dark mt-5">
      <h3 className="card-header text-light">How To Apply</h3>
      <div className="card-body" style={{ backgroundColor: "#b30000" }}>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Visit the website and fil the online form
        </h5>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Enter your personal and property details
        </h5>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Fill in your financial and income data to access the loan offer
        </h5>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Submit Your Loan Application
        </h5>
        <h6 className="text-light">
          Our relationship manager will take you through the process of hassel
          free and smooth borrowing experience.
        </h6>
      </div>
    </div>
  );
};

export default Howtoapply;
