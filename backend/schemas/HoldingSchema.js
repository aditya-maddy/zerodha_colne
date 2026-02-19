const mongoose = require("mongoose");

// --------- HoldingsSchema ---------
const HoldingsSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ user reference
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  net: String,
  day: String,
});

module.exports = mongoose.model("Holdings", HoldingsSchema);
