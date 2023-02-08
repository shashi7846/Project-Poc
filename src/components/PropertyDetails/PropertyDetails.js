import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKey,
  faMailBulk,
  faPhone,
  faAreaChart,
  faQuestion,
  faMapMarker,
  faInr,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
//import { GetuserbyEmail, Postregister } from "../../Api/Api";
function PropertyDetails() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  let [phone, setPhone] = useState("");
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
                    type="email"
                    className="form-control"
                    placeholder="Enter your address"
                    value={email}
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
                    type="password"
                    className="form-control"
                    placeholder="Enter Area in square Yards"
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
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Property Price"
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
                        icon={faInr}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Down Payment"
                    required
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
                    type="tel"
                    pattern="[0-9]{10}"
                    required
                    className="form-control"
                    placeholder="Enter Loan Amount"
                    value={phone}
                  />
                </div>
                {/* <div className="input-group form-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text text-white">
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faQuestion}
                        style={{ fontSize: "1.75em", color: "black" }}
                      ></FontAwesomeIcon>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Purpose Of Loan"
                    value={username}
                  />
                </div> */}
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
                    name="Purpose of Loan"
                    id="Purpose Of Loan"
                    style={{ width: "347px ", borderRadius: "7px" }}
                  >
                    <option value="Purpose Of Loan" disabled selected>
                      Purpose Of Loan {""}
                    </option>
                    <option value="UnderConstruction">UnderConstruction</option>
                    <option value="Ready To Move">Ready To Move</option>
                    <option value="Home Renovation">Home Renovation</option>
                  </select>{" "}
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Submit"
                    className="btn float-right  btn-dark mt-2"
                  />
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
{
  /* <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      Purpose Of Loan
                    </button>
                    <div
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a class="dropdown-item" href="#">
                        Ready to move
                      </a>
                      <a class="dropdown-item" href="#">
                        Under Construction
                      </a>
                      <a class="dropdown-item" href="#">
                       Home Renovation
                      </a>
                    </div>
                  </div> */
}
