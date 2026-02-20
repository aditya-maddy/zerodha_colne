const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchema");
module.exports = mongoose.model("Holdings", HoldingsSchema);