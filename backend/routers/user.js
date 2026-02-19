const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// ---------------- SIGNUP ----------------
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    await User.register(newUser, password); // passport-local-mongoose
    res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ---------------- LOGIN ----------------
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.status(200).json({ message: "Login successful", redirect: "/dashboard" });
});

// ---------------- LOGOUT ----------------
router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);

    req.session.destroy(() => {
      res.clearCookie("connect.sid"); // important
      res.redirect("http://zerodha-colne-dshboard-w8n4.vercel.app")
      res.json({ message: "Logged out successfully" });
    });
  });
});


module.exports = router;
