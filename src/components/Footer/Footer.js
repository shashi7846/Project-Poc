import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <footer
          className="text-light text-center text-lg-start Footer "
          style={{ backgroundColor: "#870000" }}
        >
          <div className="container p-4">
            <div className="row mt-4">
              <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">
                  <b>About Company</b>
                </h5>

                <p>
                  Welcome to M-Loan, your trusted source for mortgage loans.
                  We're committed to helping you achieve your dream of
                  homeownership by providing personalized, expert support and a
                  wide range of loan options.
                </p>

                <div className="mt-4">
                  <i className="bi bi-facebook fs-2"></i>

                  <i className="bi bi-youtube fs-2 mx-3"></i>

                  <i className="bi bi-twitter   fs-2 mx-3"></i>

                  <i className="bi bi-whatsapp  fs-2 mx-3"></i>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4 pb-1">
                  <b>Search something</b>
                </h5>

                <div className="input-group text-dark mb-4">
                  <input
                    type="text"
                    id="formControlLg"
                    className="form-control form-control-lg"
                    placeholder="Search"
                  />
                </div>

                <ul className="fa-ul" style={{ marginLeft: "1.65em" }}>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="bi bi-house  fs-3 "></i>
                    </span>
                    <span className="ms-3">Gachibowli,Hyderabad,500032</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="bi bi-envelope fs-3"></i>
                    </span>
                    <span className="ms-3">MLoan@outlook.co</span>
                  </li>
                  <li className="mb-3">
                    <span className="fa-li">
                      <i className="bi bi-telephone-inbound fs-3 "></i>
                    </span>
                    <span className="ms-3 my-auto ">+91 9000000890</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase mb-4">
                  <b>Opening hours</b>
                </h5>

                <table className="table text-center text-white">
                  <tbody className="fw-normal">
                    <tr>
                      <td>Mon - Fri:</td>
                      <td>8am - 9pm</td>
                    </tr>
                    <tr>
                      <td>Sat - Sun:</td>
                      <td>8am - 1pm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div
            className="text-center p-3 footer"
            // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            &#169; 2023 Copyright:
            <Link className="text-danger">M-Loan.com</Link>
          </div>
        </footer>
      </div>
    </>
  );
}
