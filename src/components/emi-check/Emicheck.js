import React from "react";
import { Slider } from "@material-ui/core";
import Box from "@mui/material/Box";
const Emicheck = () => {
  // Added

  // function calculateEmi(loanAmount, interestRate, loanTerm) {
  //   const r = (interestRate / 100) / 12;
  //   const n = loanTerm * 12;
  //   const emi = (loanAmount * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  //  emi.toFixed(2);
  // }
  return (
    <>
      <Box width={500}>
        <Slider
          size=""
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <Slider
          defaultValue={10}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </Box>
    </>
  );
};
export default Emicheck;
