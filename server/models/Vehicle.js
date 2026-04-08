const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    vehicleNo: String,
    owner: String,
    type: String,
    status: String
});

module.exports = mongoose.model("Vehicle", vehicleSchema);