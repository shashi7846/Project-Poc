import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const About = () => {
  return (
    <div className="card bg-dark mt-5">
      <h3 className="card-header text-light Cardtop">
        <b>About Us</b>
      </h3>
      <div className="card-body" style={{ backgroundColor: "rgb(125,13,16)" }}>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Introduction: Welcome to M-Loan, your trusted source for mortgage
          loans. We're committed to helping you achieve your dream of
          homeownership by providing personalized, expert support and a wide
          range of loan options.
        </h5>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Why Choose Us: At M-Loan, we understand that choosing a mortgage
          lender can be a confusing and overwhelming experience. That's why we
          offer competitive rates, a streamlined application process, and a team
          of experienced professionals who are dedicated to making the loan
          process as easy and stress-free as possible.
        </h5>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Our Loan Options: Whether you're a first-time homebuyer, looking to
          refinance, or interested in investment property, we have the loan
          options to meet your needs. From fixed-rate and adjustable-rate
          mortgages, to government-backed loans and jumbo loans, we'll help you
          find the best loan option for your specific financial situation.
        </h5>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Pre-approval Process: Getting pre-approved for a mortgage loan can
          save you time and hassle when it comes to purchasing a home. Our
          pre-approval process is quick, easy, and comes with no obligation.
          Simply provide us with some basic information about yourself and your
          financial situation, and we'll let you know how much you can afford to
          borrow.
        </h5>
        <h5 className="card-text text-light">
          <FontAwesomeIcon
            className="fa-beat-fade"
            icon={faCheckCircle}
          ></FontAwesomeIcon>{" "}
          Start Your Journey: Take the first step towards homeownership and
          start your journey with M-Loan. Apply for a mortgage loan today and
          experience the difference that comes from working with a trusted and
          experienced lender.
        </h5>
      </div>
    </div>
  );
};

export default About;
