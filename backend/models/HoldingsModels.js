const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingSchema");
module.exports = mongoose.model("Holdings", HoldingsSchema);