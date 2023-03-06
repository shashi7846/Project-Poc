import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  let Navigate = useNavigate();
  // function handleClick() {
  //   Navigate("/login");
  // }

  const handleLogInOut = () => {
    const userId = localStorage.getItem("id");
    if (userId) {
      localStorage.removeItem("id");
      Navigate("/");
    } else {
      Navigate("/login");
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            <img
              src="favicon.ico"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            <b>-Loan</b>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto text-center">
              <li class="nav-item">
                <Link className="nav-item nav-link text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/howtoapply">
                  How to Apply
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-item nav-link text-light" to="/about">
                  About
                </Link>
              </li>

              {localStorage.getItem("id") ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/propertydetails"
                    >
                      Property Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/emicheck"
                    >
                      Emi-Check
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/contactus"
                    >
                      Contact-Us
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-item nav-link text-light"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}

              <li class="nav-item">
                <Link
                  className="nav-item nav-link text-light"
                  onClick={handleLogInOut}
                  to="/login"
                >
                  {localStorage.getItem("id") ? "Logout" : "Login"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <Link className="navbar-brand text-light" to="/">
          <img
            src="favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          -Loan
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-item nav-link text-light" to="/">
              {localStorage.getItem("id") ? "" : "Home"}
            </Link>
            <Link className="nav-item nav-link text-light" to="/howtoapply">
              {localStorage.getItem("id") ? "" : "How to Apply"}
            </Link>
            <Link className="nav-item nav-link text-light" to="/about">
              {localStorage.getItem("id") ? "" : "About"}
            </Link>
            <Link className="nav-item nav-link text-light" to="/register">
              {localStorage.getItem("id") ? "" : "Register"}
            </Link>

            <Link className="nav-item nav-link text-light" to="/contactus">
              {localStorage.getItem("id") ? "Contact-Us" : ""}
            </Link>
            <Link
              className="nav-item nav-link text-light"
              onClick={handleLogInOut}
              to="/login"
            >
              {localStorage.getItem("id") ? "Logout" : "Login"}
            </Link>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navbar;
