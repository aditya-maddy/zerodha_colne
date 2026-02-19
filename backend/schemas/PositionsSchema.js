const mongoose = require("mongoose");

// --------- PositionsSchema ---------
const PositionsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ user reference
  product: String,
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
  isLoss: Boolean,
});

module.exports = mongoose.model("Positions", PositionsSchema);
