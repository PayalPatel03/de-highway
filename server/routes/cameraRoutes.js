const express = require("express");
const router = express.Router();
const Camera = require("../models/Camera");


// Add Camera
router.post("/add", async (req, res) => {

    const { name, location } = req.body;

    const camera = new Camera({ name, location });

    await camera.save();

    res.json(camera);
});


// Get All Cameras
router.get("/", async (req, res) => {

    const cameras = await Camera.find();

    res.json(cameras);
});


// Delete Camera
router.delete("/:id", async (req, res) => {

    await Camera.findByIdAndDelete(req.params.id);

    res.json({ message: "Camera deleted" });
});


// Update Camera
router.put("/:id", async (req, res) => {

    const { name, location } = req.body;

    const camera = await Camera.findByIdAndUpdate(
        req.params.id,
        { name, location },
        { new: true }
    );

    res.json(camera);
});

module.exports = router;