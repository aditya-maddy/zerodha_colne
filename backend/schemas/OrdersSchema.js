const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // <-- add this
  name: String,
  qty: Number,
  price: Number,
  orderType: String, // BUY / SELL
}, { timestamps: true }); // optional: track createdAt/updatedAt

module.exports = OrdersSchema;
