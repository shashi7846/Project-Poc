export const validatePropertyDetailsForm = (input) => {
  const errors = [];
  const addressRegx = /[A-Za-z0-9,/-]+$/;
  if (!input.address) {
    errors.push("Address is required");
  } else if (!addressRegx.test(input.address)) {
    errors.push("enter valid address format");
  }

  if (!input.area) {
    errors.push("Area is required");
  } else if (input.area > 100000) {
    errors.push("Area is too large");
  }

  if (!input.pincode) {
    errors.push("pincode required");
  } else if (input.pincode.length !== 6 || isNaN(+input.pincode)) {
    errors.push("Invalid pincode");
  }

  if (!input.purposeOfLoan) {
    errors.push("Purpose of loan is required");
  }

  return errors;
};

export const ValidateLoginForm = (input) => {
  const errors = [];
  if (!input.email) {
    errors.push("Email is Required");
  }
  if (!input.password) {
    errors.push("Please enter Password");
  }
  return errors;
};

export const emicheckValidation = (input) => {
  const errors = [];

  if (!input.price) {
    errors.push("Estimated loan amount is required");
  } else if (+input.price > 10000000) {
    errors.push("please enter  amount less than 1 crore");
  } else if (+input.price < 10000) {
    errors.push("please enter  amount greater than 10,000");
  }

  if (!input.loanAmount) {
    errors.push("Loan amount is required");
  } else if (+input.loanAmount > +input.price) {
    errors.push("Your property value is too low for this loan amount");
  }
  if (!input.netIncome) {
    errors.push("Income is required");
  } else if (+input.netIncome > 1000000) {
    errors.push("please enter income less than 10L");
  } else if (+input.netIncome < 10000) {
    errors.push("income should be greater than 10,000");
  }
  return errors;
};

export function emiCalculator(principle, interestRate = 9.5, time) {
  if (!principle || !time) return 0;
  interestRate = interestRate / (12 * 100);
  let emi =
    (principle * interestRate * Math.pow(1 + interestRate, time)) /
    (Math.pow(1 + interestRate, time) - 1);
  return !isNaN(emi) && isFinite(emi) ? Math.ceil(emi + 0.000414) : 0;
}
