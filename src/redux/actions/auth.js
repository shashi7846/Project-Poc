import axios from "axios";
import { GetuserbyEmailAndPassword } from "../../api/Api";
import { ValidateLoginForm } from "../../components/login/Login";
import { validateRegistrationForm } from "../../components/register/Register";

import { errorToast, successToast } from "../../components/Toast";
import { constants } from "../constants";

export const registrationAction = (userData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: constants.SIGNUP_REQUEST });
      const errors = validateRegistrationForm(userData);

      if (Object.keys(errors).length) {
        const error = Object.values(errors)[0];
        errorToast(error);
        dispatch({
          type: constants.SIGNUP_FAILURE,
          payload: { error },
          message: "error",
        });
        return;
      }
      const { data } = await axios.post(
        `http://localhost:8000/register`,
        userData
      );

      successToast(data.message);

      dispatch({
        type: constants.SIGNUP_SUCCESS,
        payload: { data },
        message: "Successs",
      });

      navigate("/login");
    } catch (err) {
      errorToast(err.response.data.error);
      dispatch({
        type: constants.SIGNUP_FAILURE,
        payload: err.response.data,
      });
    }
  };
};

export const LoginAction = (user, navigate) => {
  console.log(user);
  return async (dispatch) => {
    try {
      dispatch({ type: constants.SIGNIN_REQUEST });
      const errors = ValidateLoginForm(user);

      if (Object.keys(errors).length) {
        throw new Error(Object.values(errors)[0]);
      }
      const { data: userData } = await axios.get(
        `http://localhost:4000/users?email=${user.email}&password=${user.password}`
      );
      //  const { data: userData } = await GetuserbyEmailAndPassword();
      if (userData.length !== 0) {
        localStorage.setItem("id", userData[0].id);

        dispatch({
          type: constants.SIGNIN_SUCCESS,
          payload: { ...userData, isAuthenticated: true },
        });

        successToast("Login Successful");
        navigate("/propertydetails");
      } else {
        throw new Error("user invalid");
      }
    } catch (err) {
      errorToast(err.message);
      dispatch({
        type: constants.SIGNIN_FAILURE,
        payload: err.message,
      });
    }
  };
};

export const logoutAction = (navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: constants.SIGNOUT_REQUEST });
      const user = await axios.post("http://localhost:8000/logout");

      const { message } = user.data;

      successToast(message);

      localStorage.removeItem("id");

      dispatch({
        type: constants.SIGNOUT_SUCCESS,
        payload: {},
      });

      navigate("/");
    } catch (err) {
      errorToast(err.message);
      dispatch({
        type: constants.SIGNOUT_FAILURE,
        payload: { error: err.response.data.error },
      });
    }
  };
};
