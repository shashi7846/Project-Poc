import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faMailBulk,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
//import { GetuserbyEmail, Postregister } from "../../Api/Api";
function PropertyDetails() {
  let [username, setUsername] = useState("shashikanth");
  let [email, setEmail] = useState("shashikanth@email.com");
  let [password, setPassword] = useState("9080723612");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  let [phone, setPhone] = useState("9080723612");
  const [error, setError] = useState("");

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
              <h3 className="login-name text-light">PropertyDetails</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form
              // onSubmit={async (e) => {
              //   e.preventDefault();
              //   let getApiData = GetuserbyEmail(email)
              //     .then((getApiData) => {
              //       setError((previousState) => {
              //         if (getApiData.data.length !== 0)
              //           return "An user already exists with this email.";
              //         else return "";
              //       });
              //       getApiData.data.length !== 0 &&
              //         console.log("error: ", error);
              //       if (getApiData.data.length === 0) {
              //         Postregister(userData).then((data) => {
              //           setEmail("");
              //           setPassword("");
              //           setConfirmPassword("");
              //           setPhone("");
              //           setUsername("");
              //           Navigate("/login");
              //         });
              //       }
              //     })
              //       .catch((error) => console.log(error));
              //   }}
              >
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
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit"
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
}

export default PropertyDetails;
