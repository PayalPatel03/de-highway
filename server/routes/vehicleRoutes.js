const express = require("express");
const router = express.Router();

const Vehicle = require("../models/Vehicle");


// ADD VEHICLE
router.post("/add", async (req, res) => {
    try {
        const vehicle = new Vehicle(req.body);
        await vehicle.save();
        res.json(vehicle);
    } catch (error) {
        res.status(500).json(error);
    }
});


// GET ALL VEHICLES
router.get("/", async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.json(vehicles);
    } catch (error) {
        res.status(500).json(error);
    }
});


// UPDATE VEHICLE
router.put("/update/:id", async (req, res) => {
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(vehicle);
    } catch (error) {
        res.status(500).json(error);
    }
});


// DELETE VEHICLE
router.delete("/delete/:id", async (req, res) => {
    try {
        await Vehicle.findByIdAndDelete(req.params.id);
        res.json("Vehicle Deleted");
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;