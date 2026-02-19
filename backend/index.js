require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const cors = require("cors");

const User = require("./models/user");
const userRouter = require("./routers/users");
const HoldingsModel = require("./models/HoldingsModels");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.set("trust proxy", 1); // IMPORTANT for Render

// ---------------- MIDDLEWARE ----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---------------- CORS ----------------
app.use(
  cors({
    origin: [
      "https://zerodha-colne-dshboard.vercel.app",
      "https://zerodha-colne-dshboard-w8n4.vercel.app"
    ],
    credentials: true,
  })
);

// ---------------- SESSION ----------------
app.use(
  session({
    name: "sid",                   
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,               
      secure: true,                   
      sameSite: "none",             
    },
  })
);

app.use(flash());

// ---------------- PASSPORT ----------------
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ---------------- DATABASE ----------------
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.error(err));

// ---------------- AUTH MIDDLEWARE ----------------
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  return res.status(401).json({ message: "You must be logged in" });
}

// ---------------- ROUTES ----------------
app.use("/api/users", userRouter);

// ---------------- HOLDINGS ----------------
app.get("/api/allholdings", isLoggedIn, async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
});

// ---------------- POSITIONS ----------------
app.get("/api/allpositions", isLoggedIn, async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
});

// ---------------- NEW ORDER ----------------
app.post("/api/neworder", isLoggedIn, async (req, res) => {
  const { name, qty, price, orderType } = req.body;

  const order = new OrdersModel({
    name,
    qty,
    price,
    orderType,
    user: req.user._id,
  });

  const savedOrder = await order.save();
  res.status(201).json(savedOrder);
});

// ---------------- ALL ORDERS ----------------
app.get("/api/allorders", isLoggedIn, async (req, res) => {
  try {
   
    const orders = await OrdersModel.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});
// ---------------- HEALTH ----------------
app.get("/", (req, res) => {
  res.send("🚀 Backend Running");
});

// ---------------- ERROR ----------------
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on ${PORT}`);
});
