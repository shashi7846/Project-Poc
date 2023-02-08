import React from "react";
import { Link, Navigate } from "react-router-dom";

const Navbar = () => {
  function handleClick() {
    Navigate("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark  ">
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
            <Link class="nav-item nav-link text-light" to="/register">
              <i className="bi bi-box-arrow-in-right"></i>Register
            </Link>
            <Link class="nav-item nav-link text-light" to="/login">
              <i className="bi bi-box-arrow-in-right"></i> Login
            </Link>
            <Link
              class="nav-item nav-link text-light"
              to="/login"
              onClick={() => {
                window.localStorage.removeItem("app_token"); //removing the jwt token for logging out
                Navigate(`/login`);
              }}
            >
              Logout
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
