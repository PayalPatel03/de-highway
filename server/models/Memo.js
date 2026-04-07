const mongoose = require("mongoose");

const memoSchema = new mongoose.Schema({

    vehicleNumber: String,
    reason: String,
    officer: String,
    date: String

}, { timestamps: true });

module.exports = mongoose.model("Memo", memoSchema);