import axios from "axios";
import config from "../config/index";
import {
  loginFail,
  loginStart,
  loginSuccess,
  logoutFail,
  logoutStart,
  logoutSuccess,
  registerFail,
  registerStart,
  registerSuccess,
} from "./auth-slice";

const urlApi = config.api.url;

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${urlApi}/login`, user, { withCredentials: true });
    dispatch(loginSuccess(res.data));
    navigate(config.routes.home);
  } catch (err) {
    dispatch(loginFail());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post(`${urlApi}/register`, user);
    dispatch(registerSuccess());
    navigate(config.routes.signin);
  } catch (err) {
    dispatch(registerFail());
  }
};

export const logoutUser = async (dispatch, navigate, axiosJWT) => {
  dispatch(logoutStart());
  try {
    //need to call api log out
    //await axiosJWT.post(`${urlApi}/logout`);
    dispatch(logoutSuccess());
    navigate(config.routes.signin);
  } catch (err) {
    dispatch(logoutFail());
  }
};
