import React from "react";
import { Link } from "react-router-dom";
import "./Faqs.css";

export default function faqs() {
  return (
    <div className="  ">
      <div className="container-fluid faq-container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-8 col-lg-6">
            <div
              className="section_heading text-center wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp",
              }}
            >
              <h1 className="text-light mt-2">
                <b>Frequently Asked Questions</b>
              </h1>

              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-lg-8">
            <div className="accordion faq-accordian" id="faqAccordion">
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingOne">
                  <h6
                    className="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <b>
                      {" "}
                      How will M-loan decide the home loan amount i am eligible
                      for?
                    </b>
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseOne"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="card-body text-light">
                    <p>
                      M-loan will determine your Home Loan Eligibility largely
                      by your income and repayment capacity. Other important
                      factors include your age, qualification, number of
                      dependants, your spouse's income (if any), assets &
                      liabilities, savings history and the stability &
                      continuity of occupation.
                    </p>
                    <p>
                      Appland is completely creative, lightweight, clean &amp;
                      super responsive app landing page.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.3s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingTwo">
                  <h6
                    className="mb-0 collapsed "
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <b> Do i get tax benefits on the loan?</b>
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseTwo"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="card-body text-light">
                    <p>
                      Yes. You are eligible for tax benefits on the principal
                      and interest components of your Home Loan under the Income
                      Tax Act, 1961. As the benefits could vary each year,
                      please do check with our Loan Counselor about the tax
                      benefits which you could avail on your loan.
                    </p>
                    <p>
                      Appland is completely creative, lightweight, clean &amp;
                      super responsive app landing page.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card border-0 wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="card-header" id="headingThree">
                  <h6
                    className="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    <b>What security will i have to provide?</b>
                    <span className="lni-chevron-up"></span>
                  </h6>
                </div>
                <div
                  className="collapse"
                  id="collapseThree"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="card-body text-light">
                    <p>
                      Security of the loan would generally be security interest
                      on the property being financed by us and / or any other
                      collateral / interim security as may be required by us. It
                      is extremely important for you to ensure that the title to
                      the property is clear, marketable and free from
                      encumbrance. There should not be any existing mortgage,
                      loan or litigation, which is likely to adversely affect
                      the title to the property.
                    </p>
                    <p>
                      Appland is completely creative, lightweight, clean &amp;
                      super responsive app landing page.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
              data-wow-delay="0.5s"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              <i className="lni-emoji-sad"></i>
              <p className="mb-0 px-2 text-light">Can't find your answers?</p>
              <a href="#">
                {" "}
                <Link to="/contactus">Contact us</Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
