const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");
module.exports = mongoose.model("Positions", PositionsSchema);