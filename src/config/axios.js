import axios from "axios";
import { getToken, clearToken } from "../services/localStorageService";

axios.defaults.baseURL = "http://localhost:8001";
axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${getToken()}`;
    return config;
  },
  (err) => Promise.reject(err)
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.status === 401) {
      clearToken();
      window.location.assign("/login");
      return;
    }
  }
);
export default axios;
