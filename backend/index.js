require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cors = require("cors");

// Models & Routers
const User = require("./models/user");
const userRouter = require("./routers/user");
const HoldingsModel = require("./models/HoldingsModels");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

// ---------------- MONGOOSE ----------------
mongoose.connect(MONGO_URL)
  .then(() => console.log("DB connected ✅"))
  .catch(err => console.log("DB error ❌", err));

// ---------------- EXPRESS ----------------
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

// ---------------- CORS ----------------
app.use(cors({
   origin: ["http://localhost:5173", "http://localhost:5174"],  
  credentials: true
}));

// ---------------- SESSION & PASSPORT ----------------
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    secure: false,
  }
}));
app.use(flash());
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
app.use("/", userRouter);

app.get("/", (req, res) => {
  res.send("Zerodha Clone Backend is Running 🚀");
});


// ---------------- DEFAULT HOLDINGS & POSITIONS ----------------
app.get("/allholdings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/allpositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// ---------------- USER-SPECIFIC ORDERS ----------------
app.post("/neworder", isLoggedIn, async (req, res) => {
  try {
    console.log("REQ BODY 👉", req.body);
    console.log("REQ USER 👉", req.user);

    const order = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      orderType: req.body.orderType,
      user: req.user._id,
    });

    const savedOrder = await order.save();
    console.log("ORDER SAVED ✅", savedOrder);

    res.status(201).json(savedOrder);
  } catch (err) {
    console.error("SAVE ERROR ❌", err);
    res.status(500).json({ error: err.message });
  }
});



app.get("/allorders", isLoggedIn, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ user: req.user._id });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});



// ---------------- DASHBOARD ----------------
const dashboardPath = path.join(__dirname, "../dashboard/dist");
app.use("/dashboard", isLoggedIn, express.static(dashboardPath));
app.get(/^\/dashboard\/.*/, isLoggedIn, (req, res) => {
  res.sendFile(path.join(dashboardPath, "index.html"));
});

// ---------------- START SERVER ----------------
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
