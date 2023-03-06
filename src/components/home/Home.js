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
            <h1 className="h">Welcome to M-Loan Website</h1>
          </center>
        </h1>
        <p className="paragraph">
          Need Loan? then you are right place 😉 check you eligibility and{" "}
          <br />
          apply for the loan.
        </p>
        {!localStorage.getItem("id") && (
          <>
            <button class="btn btn-outline-dark home-btn1 " type="submit">
              <Link className="nav-item nav-link text-light" to="/register">
                Register
              </Link>
            </button>
            <button
              class="btn btn-outline-dark txt-light home-btn2"
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
      <div class="container Homecards ui-card">
        <div class="row middle">
          <div class="col-sm">
            <div class="card">
              <img
                class="card-img-top"
                src={Howtoapplyimg}
                alt="Card image cap"
                height="250px"
              />
              <div class="card-body">
                <Link to="/howtoapply" class="btn btn-primary">
                  Click Here
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <img
                className="card-img-top "
                src={Aboutimg}
                alt="Card image cap"
                height="250px"
              />
              <div class="card-body">
                <Link to="/about" class="btn btn-primary">
                  Click Here
                </Link>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <img
                className="card-img-top"
                src={Contactimg}
                alt="Card image cap"
                height="250px"
              />
              <div class="card-body">
                <Link to="/contactus" class="btn btn-primary">
                  Click Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
