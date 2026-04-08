const express = require("express");
const router = express.Router();
const StolenVehicle = require("../models/StolenVehicle");


// Add
router.post("/add", async (req, res) => {

    const vehicle = new StolenVehicle({
        number: req.body.number
    });

    await vehicle.save();

    res.json(vehicle);
});


// Get All
router.get("/", async (req, res) => {

    const vehicles = await StolenVehicle.find();

    res.json(vehicles);
});


// Delete
router.delete("/:id", async (req, res) => {

    await StolenVehicle.findByIdAndDelete(req.params.id);

    res.json({ message: "Vehicle deleted" });
});


// Update
router.put("/:id", async (req, res) => {

    const vehicle = await StolenVehicle.findByIdAndUpdate(
        req.params.id,
        { number: req.body.number },
        { new: true }
    );

    res.json(vehicle);
});

module.exports = router;