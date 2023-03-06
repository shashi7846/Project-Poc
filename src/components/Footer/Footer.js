import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="text-center text-white bg-dark">
        <div
          className="text-center p-3 py-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &#169; 2022 Copyright: <span className="text-danger">M-Loan</span>
        </div>
      </footer>
    </>
  );
}
