
const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, 
  name: String,
  qty: Number,
  price: Number,
  orderType: String, // BUY / SELL
}, { timestamps: true });

module.exports = OrdersSchema;