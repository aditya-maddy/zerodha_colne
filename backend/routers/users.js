const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// ---------------- SIGNUP ----------------
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email });
    await User.register(newUser, password);

    res.status(200).json({ message: "Signup successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// ---------------- LOGIN ----------------
router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    req.logIn(user, (err) => {
      if (err) return next(err);
      return res.status(200).json({ message: "Login successful" });
    });
  })(req, res, next);
});

// ---------------- LOGOUT ----------------
router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) return next(err);

    req.session.destroy(() => {
      res.clearCookie("sid");
      res.json({ message: "Logged out successfully" });
    });
  });
});

module.exports = router;
