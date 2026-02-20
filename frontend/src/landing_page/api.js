// frontend/src/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://zerodha-colne-zsx2.onrender.com",
});

// attach latest JWT token dynamically
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token"); // get token at request time
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// handle expired token
api.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;