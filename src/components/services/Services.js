import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";
const Services = () => {
  return (
    <div>
      <div
        className="container-fluid mx-auto mt-5 mb-5 col-12"
        style={{ textAlign: "center" }}
      >
        <div className="hd mb-5">
          <h1>
            <b>Services</b>
          </h1>
        </div>

        <div className="row" style={{ justifyContent: "center" }}>
          <div className="card col-md-3 col-12">
            <div className="card-content">
              <div className="card-bodyy mb-5">
                {" "}
                <Link to="/howtoapply">
                  <img className="img" src="https://i.imgur.com/S7FJza5.png" />
                </Link>
                <div className="card-title ">
                  {" "}
                  <h2>
                    <b>How To Apply</b>
                  </h2>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-3 col-12 " style={{ marginLeft: "10px" }}>
            <div className="card-content">
              <div className="card-bodyy">
                {" "}
                <Link to="/about">
                  <img className="img" src="https://i.imgur.com/xUWJuHB.png" />
                </Link>
                <div className="card-title">
                  {" "}
                  <h2>
                    <b>About</b>
                  </h2>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="card col-md-3 col-12" style={{ marginLeft: "10px" }}>
            <div className="card-content">
              <div className="card-bodyy ">
                {" "}
                <Link to="/contactus">
                  <img
                    className="img rck"
                    src="https://i.imgur.com/rG3CGn3.png"
                  />
                </Link>
                <div className="card-title">
                  {" "}
                  <h2>
                    <b>Contact-Us</b>
                  </h2>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
