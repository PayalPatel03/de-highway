const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
    name: String,
    location: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Camera", cameraSchema);