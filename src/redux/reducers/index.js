// import { combineReducers } from "redux";
// import { authReducer } from "./auth";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// export default rootReducer;

import { constants } from "../constants";
import { combineReducers } from "redux";

const initState = {
  isAuthenticated: Boolean(localStorage.getItem("id")),

  user: {},

  loading: false,
  error: null,
  message: "",
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case constants.SIGNUP_REQUEST:
    case constants.SIGNIN_REQUEST:
    case constants.SIGNOUT_REQUEST:
      return {
        ...state,
        error: null,
        message: null,
        loading: true,
      };
    case constants.SIGNUP_SUCCESS:
    case constants.SIGNUP_FAILURE:
    case constants.SIGNIN_SUCCESS:
    case constants.SIGNIN_FAILURE:
    case constants.SIGNOUT_FAILURE:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };

    case constants.SIGNOUT_SUCCESS:
      return initState;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ state: reducer });

export default rootReducer;
