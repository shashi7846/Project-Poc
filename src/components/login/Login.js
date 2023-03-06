import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { faMailBulk } from "@react-icons/all-files/fa/faMailBulk";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { GetuserbyEmailAndPassword, Postlogin } from "../../Api/Api";

import { ValidateLoginForm } from "../helpers";
import { toast } from "react-toastify";

const LoginData = {
  email: "",
  password: "",
};

function Login() {
  const [Logindetails, setLogindetails] = useState(LoginData);

  const handleChange = (e) =>
    setLogindetails({ ...Logindetails, [e.target.name]: e.target.value });
  let navigate = useNavigate();

  const HandleOnSubmit = async (e) => {
    try {
      e.preventDefault();
      const errors = ValidateLoginForm(Logindetails);
      if (errors.length) {
        throw new Error(errors[0]);
      }
      const { data: userData } = await GetuserbyEmailAndPassword(Logindetails);
      if (userData.length !== 0) {
        localStorage.setItem("id", userData[0].id);
        console.log(userData);
        setLogindetails(LoginData);
        navigate("/propertydetails");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
        theme: "dark",
      });
    }
  };

  return (
    <>
      <div className="container mt-5 h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="card col-4" style={{ backgroundColor: "black" }}>
            <div className="card-header Cardtop ">
              <h3 className="login-name text-light">
                <b>Login</b>
              </h3>
            </div>
            <div
              className="card-body"
              // style={{ backgroundColor: "rgb(199 19 6)" }}
            >
              <form onSubmit={HandleOnSubmit}>
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
                    name="email"
                    className="form-control"
                    placeholder="email"
                    value={Logindetails.email}
                    onChange={handleChange}
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
                    name="password"
                    className="form-control"
                    placeholder="password"
                    value={Logindetails.password}
                    onChange={handleChange}
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
