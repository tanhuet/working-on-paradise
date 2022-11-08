import axios from "axios";
import jwtDecode from "jwt-decode";
import config from "./config";

const refreshToken = async () => {
  try {
    const res = await axios.post(`${config.api.url}/refreshToken`, "", {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createAxios = (user, dispatch, stateSuccess) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodeToken = jwtDecode(user?.accessToken);
      if (decodeToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["Authorization"] = `Bearer ${data}`;
        config.withCredentials = true;
      } else {
        config.headers["Authorization"] = `Bearer ${user?.accessToken}`;
        config.withCredentials = true;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};
