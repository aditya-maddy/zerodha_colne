import axios from "axios";

const API = axios.create({
  baseURL: "https://zerodha-colne-zsx2.onrender.com",
});

// 🔥 Attach token dynamically before every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle expired token
API.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href =
        "https://zerodha-colne-dshboard.vercel.app/login";
    }
    return Promise.reject(err);
  }
);

export default API;