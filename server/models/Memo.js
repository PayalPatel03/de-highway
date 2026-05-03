const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema({
  vehicleNo: String,
  violation: String,
  fine: Number,
  date: String,
  location: String
});

module.exports = mongoose.model("Memo", memoSchema);