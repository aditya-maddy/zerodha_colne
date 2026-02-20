import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import axios from "axios";

// ---------------- CAPTURE TOKEN ----------------
const urlParams = new URLSearchParams(window.location.search);
const tokenFromURL = urlParams.get("token");

if (tokenFromURL) {
  // Save JWT in localStorage for API calls
  localStorage.setItem("token", tokenFromURL);

  // Clean URL
  window.history.replaceState({}, document.title, "/");
}

// ---------------- REDIRECT IF NOT LOGGED IN ----------------
const token = localStorage.getItem("token");
// if (!token) {
//   window.location.href =
//     "https://zerodha-colne-dshboard-w8n4.vercel.app/login";
// }

// ---------------- AXIOS DEFAULT ----------------
axios.defaults.baseURL = "https://zerodha-colne-zsx2.onrender.com";
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);