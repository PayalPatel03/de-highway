const express = require("express");
const router = express.Router();
const Camera = require("../models/Camera");


// Add Camera
router.post("/add", async (req, res) => {

    const { name, location } = req.body;

    const camera = new Camera({
        name,
        location
    });

    await camera.save();

    res.json({
        message: "Camera added successfully",
        camera
    });
});


// Get All Cameras
router.get("/", async (req, res) => {

    const cameras = await Camera.find();

    res.json(cameras);
});

module.exports = router;