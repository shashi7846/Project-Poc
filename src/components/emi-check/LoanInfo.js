import React from "react";

const LoanInfo = (props) => {
  let index = props.data.length - 1;
  return (
    <div className="rightSide" style={{ margin: 1 }}>
      {props.data.length > 0 ? (
        <div className="infos">
          <h4> Interest Rate</h4>
          <span className="rate"> {props.data[index].interestRate}</span>
          <h4>Monthly Payment</h4>
          <span className="monthlyPay">
            $ {props.data[index].monthlyPayment.amount}
          </span>
          <h4>Number of Payments </h4>
          <span className="numPay">{props.data[index].numPayments}</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LoanInfo;
