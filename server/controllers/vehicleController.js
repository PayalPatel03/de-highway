const Vehicle = require("../models/Vehicle");

exports.addVehicle = async (req, res) => {

    const vehicle = await Vehicle.create(req.body);

    res.json(vehicle);
};

exports.getVehicles = async (req, res) => {

    const vehicles = await Vehicle.find();

    res.json(vehicles);
};

exports.deleteVehicle = async (req, res) => {

    await Vehicle.findByIdAndDelete(req.params.id);

    res.json("Vehicle Deleted");
};