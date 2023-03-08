import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrationAction } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import Registrationform from "./form";

export const validateRegistrationForm = (values) => {
  const errors = {};
  const phoneRegex = /^[0-9]{10}$/;
  if (!values.phone) {
    errors.phone = "Phone is required!";
  } else if (!phoneRegex.test(values.phone))
    errors.phone = "Phone Number is invalid..";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!values.email) {
    errors.email = "email is required!";
  } else if (!emailRegex.test(values.email))
    errors.email = "email is invalid..";

  const usernameRegex = /^[a-zA-Z0-9]+$/;
  if (!values.username) {
    errors.username = "username is required!";
  } else if (!usernameRegex.test(values.username))
    errors.username = "username is invalid..";

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  if (!values.password) {
    errors.password = "password is required!";
  } else if (!passwordRegex.test(values.password))
    errors.password = "password should contain capital and special characters.";

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm the password";
  } else if (values.confirmPassword !== values.password)
    errors.confirmPassword = "Passwords doesn't match";

  if (!values.date) {
    errors.date = "Please enter the date";
  } else if (isNaN(Date.parse(values.date))) errors.date = "Enter valid date";

  if (!values.gender) {
    errors.gender = "Please enter the gender";
  } else if (values.gender !== "M" && values.gender !== "F")
    errors.gender = "Enter valid gender";

  return errors;
};

const defaultUserData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
  date: "",
  gender: "M",
};
const Register = () => {
  const [userData, setuserData] = useState(defaultUserData);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputChange = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleRegistration = async (event) => {
    event.preventDefault();
    dispatch(registrationAction(userData, navigate));
  };

  return (
    <>
      <Registrationform {...{ handleRegistration, userData, inputChange }} />
    </>
  );
};

export default Register;
