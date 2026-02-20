import axios from "axios";

const api = axios.create({
  baseURL: "https://zerodha-colne-zsx2.onrender.com",
});

export default api;