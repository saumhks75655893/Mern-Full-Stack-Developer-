import axios from "axios";

const api = axios.create({
  baseURL: "https://6a12e6e378d0434e0d5d9a6a.mockapi.io/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
