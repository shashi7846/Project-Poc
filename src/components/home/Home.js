import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Aboutimg from "../../Images/Aboutus.jpg";
import Contactimg from "../../Images/Contactus.jpg";
import Howtoapplyimg from "../../Images/Howtoapplyimg.jpg";

const Home = () => {
  const Navigate = useNavigate();
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
      <div>
        <h1>
          <center className="landingpage">
            <h1 className="h">
              Welcome to <b>M-Loan</b>
            </h1>
          </center>
        </h1>
        <p className="paragraph text-light">
          {/* Need Loan? then you are right place 😉 check you eligibility and{" "}
          <br />
          apply for the loan. */}
          Planning to take a Mortage Loan? Use this Mortage Loan EMI Calculator
          <br />
          to estimate the EMI amount payable per month to repay the Mortage
          <br />
          Loan. The Mortage Loan EMI Calculator is easy to use. All you need to
          <br />
          select is the Loan amount, Loan Tenure . After selecting the Loan
          <br />
          Amount, and The Loan Tenure, the calculator will estimate the monthly
          <br />
          EMI amount and the total Interest payable till the end of the loan
          tenure.
        </p>
        {!localStorage.getItem("id") && (
          <>
            <button className="btn btn-outline-dark home-btn1 " type="submit">
              <Link className="nav-item nav-link text-light" to="/register">
                Register
              </Link>
            </button>
            <button
              className="btn btn-outline-dark txt-light home-btn2"
              type="submit"
            >
              <Link
                className="nav-item nav-link text-light"
                onClick={handleLogInOut}
                to="/login"
              >
                Login
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
