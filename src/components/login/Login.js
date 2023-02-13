import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { faMailBulk } from "@react-icons/all-files/fa/faMailBulk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { GetuserbyEmailAndPassword } from "../../Api/Api";
import axios from "axios";
const Login = () => {
  let [email, setEmail] = useState("shashikanth@email.com");
  let [password, setPassword] = useState("1234");
  const [error, setError] = useState("");

  let Navigate = useNavigate();
  let userData = { email, password };

  return (
    <>
      <div className="container mt-5 h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="card bg-dark col-4">
            <div className="card-header ">
              <h3 className="login-name text-light">Login</h3>
            </div>
            <div className="card-body" style={{ backgroundColor: "#b30000" }}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  // try{

                  // let logindata = await Postlogin(userData);
                  // window.localStorage.setItem("app_token", logindata.data.token)
                  // let token = logindata.data.token;
                  // if (token) {
                  //  let data = apiData.data.length;
                  let logindata = GetuserbyEmailAndPassword({
                    email,
                    password,
                  });
                  //     .then((logindata) => {
                  //       console.log(logindata);

                  //       logindata.data.length === 0 &&
                  //         console.log("error: ", error);
                  //       // let apiData = apiData.data.length;
                  //       if (logindata.data.length !== 0) {
                  //         setEmail("");
                  //         setPassword("");
                  //         localStorage.setItem("id", logindata.data.id);
                  //         Navigate("/Propertydetails");
                  //       }
                  //       setError((previousState) => {
                  //         if (logindata.data.length === 0)
                  //           return "Invalid credentials!";
                  //         else return "";
                  //       });
                  //     })
                  //     .catch((error) => console.log(error));
                  // }}
                  // axios
                  //   // with query parameter userId and password
                  //   .get(
                  //     `http://localhost:4000/users?email=${userData.email}&password=${userData.password}`
                  //   )
                  GetuserbyEmailAndPassword({
                    email,
                    password,
                  })
                    // execute after getting response from backend
                    .then(({ data }) => {
                      console.log(data);
                      // If user doesn't exists with those credentials, length will be zero
                      if (data.length === 0) {
                        // Updates the error state with invalid credentials error
                        setError("Invalid credentials");
                      } else {
                        // If user does exists, updates error state to empty
                        setError("");
                        // stores id in local storage for authentication and authorization
                        localStorage.setItem("id", data[0].id);
                        // Navigates to gold calculator route after getting response
                        Navigate("/Propertydetails");
                      }
                    })
                    // catches error if any and updates in error state
                    .catch((error) => setError(error));
                }}
              >
                <div className="input-group form-group">
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
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    value="Login"
                    className="btn float-right  btn-dark mt-1"
                  >
                    Login
                  </button>
                  {/* <Link to="/Propertydetails" /> */}
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links text-light">
                Don't have an account?<Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
