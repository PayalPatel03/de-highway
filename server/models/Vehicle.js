const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({

    vehicleNumber: String,
    ownerName: String,
    vehicleType: String,
    location: String,
    cameraId: String,
    date: String

}, { timestamps: true });

module.exports = mongoose.model("Vehicle", vehicleSchema);