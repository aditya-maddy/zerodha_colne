

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home.jsx";
import axios from "axios";
const token = localStorage.getItem("token");
axios.defaults.baseURL = "https://your-backend-name.onrender.com";

if (!token) {
  window.location.href =
    "https://zerodha-colne-dshboard-w8n4.vercel.app/login";
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);