import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faMailBulk,
  faPhone,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
const Registrationform = ({ handleRegistration, userData, inputChange }) => {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card bg-dark col-6">
            <div className="card-header ">
              <h3 className="login-name text-light">Register</h3>
            </div>

            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form onSubmit={handleRegistration}>
                <div className="form-check form-check-inline mt-3 text-light">
                  <h4>
                    <b>Gender</b>
                  </h4>
                </div>
                <div className="Registergender form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    aria-label="Male"
                    name="gender"
                    id="male"
                    value="M"
                    onChange={inputChange}
                  />
                  <label className="form-check-label text-light ">Male</label>
                </div>
                <div className=" Registergender form-check form-check-inline text-light">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="F"
                    onChange={inputChange}
                  />
                  <label className="form-check-label ">Female</label>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faUser}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>UserName</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control ms-2"
                    placeholder="Username"
                    value={userData.username}
                    onChange={inputChange}
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
                        icon={faMailBulk}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Email ID</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    aria-label="email"
                    className="form-control ms-2"
                    placeholder="email"
                    value={userData.email}
                    onChange={inputChange}
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white "
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faCalendar}
                        style={{
                          fontSize: "1.75em",
                          color: "black",
                        }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>DateOfBirth</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control ms-2"
                    placeholder="date of birth"
                    value={userData.date}
                    onChange={inputChange}
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
                        icon={faKey}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Password</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control ms-2 "
                    placeholder="set password"
                    value={userData.password}
                    onChange={inputChange}
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white "
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faKey}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2">
                        <b>Confirm</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="form-control ms-2"
                    placeholder="confirm password"
                    value={userData.confirmPassword}
                    onChange={inputChange}
                  />
                </div>
                {/* {password !== confirmPassword && (
                  <div className="Registercaption">
                    Password and Confirm Password must match!
                  </div>
                )} */}
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faPhone}
                        style={{ fontSize: "1.75em", color: "black" }}
                      />
                      <label className="text-dark ms-2">
                        <b>MobileNo.</b>
                      </label>
                    </span>
                  </div>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control ms-2"
                    placeholder="Enter Mobile Number"
                    value={userData.phone}
                    onChange={inputChange}
                  />
                </div>

                <div className="form-group mt-2">
                  <input
                    type="submit"
                    value="Register"
                    aria-label="Register"
                    className="btn float-right  btn-dark mt-1 px-4"
                  />
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links text-light">
                Already have an account?<Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrationform;
