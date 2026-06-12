import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://6a02eca20d92f63dd25481e9.mockapi.io/api/details",
  responseType: "json",
  timeout: 2000,
});

export default axiosInstance;
