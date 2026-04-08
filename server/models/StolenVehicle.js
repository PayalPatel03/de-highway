const mongoose = require("mongoose");

const stolenVehicleSchema = new mongoose.Schema({
    number: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("StolenVehicle", stolenVehicleSchema);