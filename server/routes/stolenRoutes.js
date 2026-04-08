const express = require("express");
const router = express.Router();
const StolenVehicle = require("../models/StolenVehicle");


// Add Stolen Vehicle
router.post("/add", async (req, res) => {

    const { number } = req.body;

    const vehicle = new StolenVehicle({
        number
    });

    await vehicle.save();

    res.json({
        message: "Vehicle added to stolen list",
        vehicle
    });
});


// Get All Stolen Vehicles
router.get("/", async (req, res) => {

    const vehicles = await StolenVehicle.find();

    res.json(vehicles);
});

module.exports = router;