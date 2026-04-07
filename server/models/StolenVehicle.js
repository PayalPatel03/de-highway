const mongoose = require("mongoose");

const stolenSchema = new mongoose.Schema({

    vehicleNumber: String,
    ownerName: String,
    theftDate: String,
    location: String,
    status: String

}, { timestamps: true });

module.exports = mongoose.model("StolenVehicle", stolenSchema);