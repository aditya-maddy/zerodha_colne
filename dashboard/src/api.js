import axios from "axios";

const API = axios.create({
  baseURL: "https://zerodha-colne-zsx2.onrender.com",
  withCredentials: true
});

export default API;