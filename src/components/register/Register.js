import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faMailBulk,
  faPhone,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { GetuserbyEmail, Postregister } from "../../Api/Api";
import { validateRegisterFOrm } from "../helpers";
const Register = () => {
  let [Male, SetMale] = useState("");
  let [Female, SetFemale] = useState("");
  let [Date, SetDate] = useState("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  let [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  let userData = {
    username,
    email,
    password,
    ConfirmPassword,
    phone,
    Date,
    Male,
    Female,
  };

  let Navigate = useNavigate();

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleConfirmPasswordChange(event) {
    setConfirmPassword(event.target.value);
  }

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-center h-100">
          <div className="card bg-dark col-4">
            <div className="card-header ">
              <h3 className="login-name text-light">Register</h3>
            </div>

            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  let getApiData = GetuserbyEmail(email)
                    .then((getApiData) => {
                      setError((previousState) => {
                        if (getApiData.data.length !== 0)
                          return "An user already exists with this email.";
                        else return "";
                      });
                      getApiData.data.length !== 0 &&
                        console.log("error: ", error);
                      if (getApiData.data.length === 0) {
                        Postregister(userData).then((data) => {
                          setEmail("");
                          setPassword("");
                          setConfirmPassword("");
                          setPhone("");
                          setUsername("");
                          Navigate("/login");
                        });
                      }
                    })
                    .catch((error) => console.log(error));
                }}
              >
                <div className="form-check form-check-inline mt-3 text-light">
                  <h4>
                    <b>Gender</b>
                  </h4>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="Male"
                    onChange={(e) => {
                      SetMale(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label text-light bg-dark"
                    for="inlineRadio1"
                  >
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline text-light">
                  <input
                    className="form-check-input  "
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="Female"
                    onChange={(e) => {
                      SetFemale(e.target.value);
                    }}
                  />
                  <label
                    className="form-check-label bg-dark"
                    for="inlineRadio2"
                  >
                    Female
                  </label>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faUser}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faMailBulk}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    type="date"
                    className="form-control"
                    placeholder="date of birth"
                    required
                    value={Date}
                    // onChange={(e) => setPassword(e.target.value)}
                    onChange={(e) => {
                      SetDate(e.target.value);
                    }}
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faKey}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="set password"
                    required
                    value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    onChange={handlePasswordChange}
                  />
                </div>

                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faKey}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="confirm password"
                    required
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {password !== ConfirmPassword && (
                  <div>Password and Confirm Password must match!</div>
                )}
                <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faPhone}
                        style={{ fontSize: "1.75em", color: "black" }}
                      />
                    </span>
                  </div>

                  <input
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Register"
                    className="btn float-right  btn-dark mt-1"
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
    </>
  );
};

export default Register;
