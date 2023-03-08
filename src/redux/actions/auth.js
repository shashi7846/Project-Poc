import axios from "axios";
import { validateRegistrationForm } from "../../components/register/Register";

import { errorToast, successToast } from "../../components/Toast";
import { constants } from "../constants";

export const registrationAction = (userData, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: constants.SIGNUP_REQUEST });
      const errors = validateRegistrationForm(userData);
      if (Object.keys(errors).length) throw new Error(Object.values(errors)[0]);
      const { data } = await axios.post(
        `http://localhost:8000/register`,
        userData
      );

      successToast(data.message);

      dispatch({
        type: constants.SIGNUP_SUCCESS,
      });

      navigate("/login");
      // const { message } = res;
      // successToast("success");

      // dispatch({
      //   type: constants.REGISTRATION_SUCCESS,
      //   payload: { message: "success" },
      // });
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
  return async (dispatch) => {
    try {
      dispatch({ type: constants.SIGNIN_REQUEST });
      const res = await axios.post(`http://localhost:4000/login`, {
        ...user,
      });
      if (res.status === 201) {
        successToast("Login Successful");

        dispatch({
          type: constants.SIGNIN_SUCCESS,
        });

        navigate("/propertydetails");
      }
    } catch (err) {
      errorToast("Login Failure");
      dispatch({
        type: constants.SIGNIN_FAILURE,
        payload: { error: "Login Failure" },
      });
    }
  };
};

// export const signoutAction = (user, navigate) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: constants.SIGNOUT_REQUEST });
//       const res = await axios.post(`/auth/signout`, {
//         ...user,
//       });
//       if (res.status === 200) {
//         const { message } = res.data;
//         successToast(message);
//         navigate('/');
//         Cookies.set('OSNR_Token', undefined);
//         dispatch({
//           type: constants.SIGNOUT_SUCCESS,
//           payload: { message },
//         });
//       }
//     } catch (err) {
//       dispatch({
//         type: constants.SIGNOUT_FAILURE,
//         payload: { error: err.response.data.error },
//       });
//     }
//   };
// };

// export const forgotAction = (user, resetForm, navigate) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: constants.FORGOT_REQUEST });
//       const res = await axios.patch(`/auth/forgot`, {
//         ...user,
//       });
//       if (res.status === 200) {
//         const { message } = res.data;
//         successToast(message);
//         dispatch({
//           type: constants.FORGOT_SUCCESS,
//           payload: { message },
//         });
//         resetForm();
//         navigate('/signin');
//       }
//     } catch (err) {
//       if (hasUserError(err)) errorToast(err.response.data.error);
//       dispatch({
//         type: constants.FORGOT_FAILURE,
//         payload: { error: err.response.data.error },
//       });
//     }
//   };
// };

// export const verifyTokenAction = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: constants.VERIFY_TOKEN_REQUEST });
//       const authToken = Cookies.get(tokeName);
//       const user = authToken ? decodeToken(authToken) : undefined;
//       const isAuthenticated = user ? true : false;
//       dispatch({
//         type: constants.VERIFY_TOKEN_SUCCESS,
//         payload: { authToken, user, isAuthenticated },
//       });
//     } catch (err) {
//       dispatch({
//         type: constants.VERIFY_TOKEN_FAILURE,
//         payload: { error: err.message },
//       });
//     }
//   };
// };
