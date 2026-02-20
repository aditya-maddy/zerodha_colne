require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/user");
const userRouter = require("./routers/users");
const HoldingsModel = require("./models/HoldingsModels");
const PositionsModel = require("./models/PositionsModel");
const OrdersModel = require("./models/OrdersModel");
const auth = require("./middleware/auth");

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
      "https://zerodha-colne-dshboard-w8n4.vercel.app",
    ],
    credentials: true,
  }),
);

// ---------------- DATABASE ----------------
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("✅ DB connected"))
  .catch((err) => console.error(err));

// ---------------- ROUTES ----------------
app.use("/api/users", userRouter);

// ---------------- HOLDINGS ----------------
app.get("/api/allholdings", auth, async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
});

// ---------------- POSITIONS ----------------
app.get("/api/allpositions", auth, async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
});

// ---------------- NEW ORDER ----------------
app.post("/api/neworder", auth, async (req, res) => {
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
app.get("/api/allorders", auth, async (req, res) => {
  try {
    const orders = await OrdersModel.find({ user: req.user._id }).sort({
      _id: -1,
    });
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
