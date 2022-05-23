import { Dispatch } from "@reduxjs/toolkit";
import * as ActionTypes from "./authSlice";

const login = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(ActionTypes.loginBegin());
      setTimeout(() => {
        dispatch(ActionTypes.loginSuccess(true));
      }, 300);
      // window.location.replace("/");
    } catch (err) {
      dispatch(ActionTypes.loginError());
      console.log(err);
    }
  };
};

const logOut = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(ActionTypes.logoutBegin());
      setTimeout(() => {
        dispatch(ActionTypes.logoutSuccess(false));
      }, 300);
      // window.location.reload();
    } catch (err) {
      dispatch(ActionTypes.logoutError());
    }
  };
};

export { login, logOut };
