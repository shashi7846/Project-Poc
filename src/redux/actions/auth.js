import axios from "axios";

import { errorToast, successToast } from "../../components/Toast";
import { authConstants } from "../constants";

export const registrationAction = (user, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.SIGNUP_REQUEST });
      const res = await axios.post(`http://localhost:8000/register`, {
        ...user,
      });
      if (res.status === 201) {
        successToast("Registration Successful");

        dispatch({
          type: authConstants.SIGNUP_SUCCESS,
        });

        navigate("/login");
      }
    } catch (err) {
      errorToast("Registration Failure");
      dispatch({
        type: authConstants.SIGNUP_FAILURE,
        payload: { error: "Registration Failure" },
      });
    }
  };
};

export const LoginAction = (user, navigate) => {
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.SIGNIN_REQUEST });
      const res = await axios.post(`http://localhost:4000/login`, {
        ...user,
      });
      if (res.status === 201) {
        successToast("Login Successful");

        dispatch({
          type: authConstants.SIGNIN_SUCCESS,
        });

        navigate("/propertydetails");
      }
    } catch (err) {
      errorToast("Login Failure");
      dispatch({
        type: authConstants.SIGNIN_FAILURE,
        payload: { error: "Login Failure" },
      });
    }
  };
};

// export const signoutAction = (user, navigate) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: authConstants.SIGNOUT_REQUEST });
//       const res = await axios.post(`/auth/signout`, {
//         ...user,
//       });
//       if (res.status === 200) {
//         const { message } = res.data;
//         successToast(message);
//         navigate('/');
//         Cookies.set('OSNR_Token', undefined);
//         dispatch({
//           type: authConstants.SIGNOUT_SUCCESS,
//           payload: { message },
//         });
//       }
//     } catch (err) {
//       dispatch({
//         type: authConstants.SIGNOUT_FAILURE,
//         payload: { error: err.response.data.error },
//       });
//     }
//   };
// };

// export const forgotAction = (user, resetForm, navigate) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: authConstants.FORGOT_REQUEST });
//       const res = await axios.patch(`/auth/forgot`, {
//         ...user,
//       });
//       if (res.status === 200) {
//         const { message } = res.data;
//         successToast(message);
//         dispatch({
//           type: authConstants.FORGOT_SUCCESS,
//           payload: { message },
//         });
//         resetForm();
//         navigate('/signin');
//       }
//     } catch (err) {
//       if (hasUserError(err)) errorToast(err.response.data.error);
//       dispatch({
//         type: authConstants.FORGOT_FAILURE,
//         payload: { error: err.response.data.error },
//       });
//     }
//   };
// };

// export const verifyTokenAction = () => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: authConstants.VERIFY_TOKEN_REQUEST });
//       const authToken = Cookies.get(tokeName);
//       const user = authToken ? decodeToken(authToken) : undefined;
//       const isAuthenticated = user ? true : false;
//       dispatch({
//         type: authConstants.VERIFY_TOKEN_SUCCESS,
//         payload: { authToken, user, isAuthenticated },
//       });
//     } catch (err) {
//       dispatch({
//         type: authConstants.VERIFY_TOKEN_FAILURE,
//         payload: { error: err.message },
//       });
//     }
//   };
// };
