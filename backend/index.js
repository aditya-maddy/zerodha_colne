// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cors = require("cors");

// ---------------- Models & Routers ----------------
const User = require("./models/user");
const userRouter = require("./routers/user");
const HoldingsModel = require("./models/HoldingsModels");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");

// ---------------- CONFIG ----------------
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL || !process.env.SECRET) {
  console.error("❌ Missing MONGO_URL or SECRET in .env");
  process.exit(1);
}

// ---------------- MONGOOSE ----------------
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ DB connected"))
  .catch(err => console.error("❌ DB connection error:", err));

// ---------------- EXPRESS ----------------
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------- CORS ----------------
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
}));

// ---------------- SESSION ----------------
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    secure: false, // set to true if using HTTPS
  },
}));

app.use(flash());

// ---------------- PASSPORT ----------------
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ---------------- FLASH MESSAGES ----------------
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ---------------- AUTH MIDDLEWARE ----------------
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "You must be logged in" });
}

// ---------------- ROUTES ----------------
app.use("/api/users", userRouter);

// Health check
app.get("/", (req, res) => {
  res.send("🚀 Zerodha Clone Backend is running!");
});

// ---------------- DEFAULT HOLDINGS & POSITIONS ----------------
app.get("/api/allholdings", async (req, res, next) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (err) {
    next(err);
  }
});

app.get("/api/allpositions", async (req, res, next) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    next(err);
  }
});

// ---------------- USER-SPECIFIC ORDERS ----------------
app.post("/api/neworder", isLoggedIn, async (req, res, next) => {
  try {
    const { name, qty, price, orderType } = req.body;

    // Simple validation
    if (!name || !qty || !price || !orderType) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const order = new OrdersModel({
      name,
      qty,
      price,
      orderType,
      user: req.user._id,
    });

    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    next(err);
  }
});

app.get("/api/allorders", isLoggedIn, async (req, res, next) => {
  try {
    const orders = await OrdersModel.find({ user: req.user._id });
    res.json(orders);
  } catch (err) {
    next(err);
  }
});

// ---------------- DASHBOARD SPA ----------------
const dashboardPath = path.join(__dirname, "../dashboard/dist");
app.use("/dashboard", isLoggedIn, express.static(dashboardPath));
app.get(/^\/dashboard\/.*/, isLoggedIn, (req, res) => {
  res.sendFile(path.join(dashboardPath, "index.html"));
});

// ---------------- REACT CLIENT ----------------
const clientBuildPath = path.join(__dirname, "client/build");
app.use(express.static(clientBuildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(clientBuildPath, "index.html"));
});

// ---------------- ERROR HANDLING ----------------
app.use((err, req, res, next) => {
  console.error("❌ ERROR:", err);
  res.status(err.status || 500).json({ error: err.message || "Server error" });
});

// ---------------- START SERVER ----------------
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
