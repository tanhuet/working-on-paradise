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

import {
  getAllUserStart,
  getAllUserSuccess,
  getAllUserFail,
} from "./user-slice";

const urlApi = config.api.url;

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${urlApi}/login`, user, {
      withCredentials: true,
    });
    dispatch(loginSuccess(res.data));
    navigate(config.routes.home);
  } catch (err) {
    alert('Username or Password is incorrected. Try again');
    dispatch(loginFail());
  }
};

export const registerUser = async (user, dispatch, navigate, optionUser) => {
  dispatch(registerStart());
  try {
    await axios.post(
      optionUser === "jobseeker" ? `${urlApi}/jobseeker` : `${urlApi}/employer`,
      user
    );
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

export const getAllUser = async (dispatch, navigate) => {
  dispatch(getAllUserStart());
  try {
    const res = await axios.get(`${urlApi}/user/allUser`);
    dispatch(getAllUserSuccess(res.data));
    navigate(config.routes.signin);
  } catch (err) {
    dispatch(getAllUserFail());
  }
};
