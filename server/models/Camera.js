const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({

    cameraId: String,
    location: String,
    status: String

}, { timestamps: true });

module.exports = mongoose.model("Camera", cameraSchema);