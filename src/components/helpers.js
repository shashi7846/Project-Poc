export const validatePropertyDetailsForm = (input) => {
  const errors = [];
  if (!input.address) {
    errors.push("Address is required");
  }
  if (!input.area) {
    errors.push("Area is required");
  }
  if (!input.price) {
    errors.push("Price is required");
  }
  if (!input.downPayment) {
    errors.push("Down payment is required");
  }
  if (!input.loanAmount) {
    errors.push("Loan amount is required");
  }
  if (!input.purposeOfLoan) {
    errors.push("Purpose of loan is required");
  }

  return errors;
};

export const validateRegisterForm = (input) => {
  const errors = [];
  if (!input.gender) {
    errors.push("Address is required");
  }
  if (!input.username) {
    errors.push("Area is required");
  }
  if (!input.email) {
    errors.push("Price is required");
  }
  if (!input.date) {
    errors.push("Down payment is required");
  }
  if (!input.password) {
    errors.push("Loan amount is required");
  }
  if (!input.ConfirmPassword) {
    errors.push("Purpose of loan is required");
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
