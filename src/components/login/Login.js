import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { faMailBulk } from "@react-icons/all-files/fa/faMailBulk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk } from "@fortawesome/free-solid-svg-icons";
// import { GetuserbyEmailAndPassword, Postlogin } from "../../api/Api";

// import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/actions/auth";

export const ValidateLoginForm = (input) => {
  const errors = [];

  console.log(input);
  if (!input.email) {
    errors.push("Email is Required");
  }
  if (!input.password) {
    errors.push("Please enter Password");
  }
  return errors;
};

const LoginData = {
  email: "",
  password: "",
};

function Login() {
  const [Logindetails, setLogindetails] = useState(LoginData);

  const handleChange = (e) =>
    setLogindetails({ ...Logindetails, [e.target.name]: e.target.value });

  let navigate = useNavigate();

  let dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(LoginAction(Logindetails, navigate));
  };

  return (
    <>
      <div className="container mt-5 h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="card col-5" style={{ backgroundColor: "black" }}>
            <div className="card-header Cardtop ">
              <h3 className="login-name text-light">
                <b>Login</b>
              </h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text text-white"
                      style={{ minWidth: "150px" }}
                    >
                      <FontAwesomeIcon
                        className="fa-beat-fade"
                        icon={faMailBulk}
                        style={{
                          fontSize: "1.75em",
                          color: "black",
                        }}
                      ></FontAwesomeIcon>
                      <label className="text-dark ms-2" for="EmailId">
                        <b>Email Id</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    aria-label="email"
                    className="form-control ms-2"
                    placeholder="email"
                    value={Logindetails.email}
                    onChange={handleChange}
                    // required="required"
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
                        <b>Password</b>
                      </label>
                    </span>
                  </div>
                  <input
                    type="password"
                    name="password"
                    aria-label="password"
                    className="form-control ms-2"
                    placeholder="password"
                    value={Logindetails.password}
                    onChange={handleChange}
                    // required="required"
                  />
                </div>

                <div className="form-group">
                  <button
                    type="submit"
                    value="Login"
                    name="Login"
                    aria-label="Login"
                    className="btn float-right  btn-dark mt-2 px-4"
                  >
                    Login
                  </button>
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
}

export default Login;
