import axios from "axios";

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "https://zerodha-colne-zsx2.onrender.com",
  headers: {
    Authorization: `Bearer ${token}`, // JWT attached to all requests
  },
});

// Optional: handle expired JWT
API.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "https://zerodha-colne-dshboard-w8n4.vercel.app/login";
    }
    return Promise.reject(err);
  }
);

export default API;