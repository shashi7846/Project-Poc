// import { authConstants } from "../constants";

// const initState = {
//   loading: false,
//   error: null,
//   message: "",
// };

// export const authReducer = (state = initState, action) => {
//   switch (action.type) {
//     case authConstants.SIGNIN_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case authConstants.SIGNIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//       };
//     case authConstants.SIGNIN_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//       };
//     // case authConstants.SIGNIN_REQUEST:
//     //   return {
//     //     ...state,
//     //     loading: true,
//     //   };
//     // case authConstants.SIGNIN_SUCCESS:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     message: action.payload.message,
//     //     authToken: action.payload.authToken,

//     //     isAuthenticated: true,
//     //   };
//     // case authConstants.SIGNIN_FAILURE:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     error: action.payload.error,
//     //   };
//     // case authConstants.SIGNOUT_REQUEST:
//     //   return {
//     //     ...state,
//     //     loading: true,
//     //   };
//     // case authConstants.SIGNOUT_SUCCESS:
//     //   return {
//     //     ...initState,
//     //   };
//     // case authConstants.SIGNOUT_FAILURE:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     error: action.payload.error,
//     //   };
//     // case authConstants.FORGOT_REQUEST:
//     //   return {
//     //     ...state,
//     //     loading: true,
//     //   };
//     // case authConstants.FORGOT_SUCCESS:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     message: action.payload.message,
//     //   };
//     // case authConstants.FORGOT_FAILURE:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     error: action.payload.error,
//     //   };
//     // case authConstants.VERIFY_TOKEN_REQUEST:
//     //   return {
//     //     ...state,
//     //     loading: true,
//     //   };
//     // case authConstants.VERIFY_TOKEN_SUCCESS:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     isAuthenticated: action.payload.isAuthenticated,
//     //     authToken: action.payload.authToken,
//     //   };
//     // case authConstants.VERIFY_TOKEN_FAILURE:
//     //   return {
//     //     ...state,
//     //     loading: false,
//     //     error: action.payload.error,
//     //   };
//     default:
//       return state;
//   }
// };
