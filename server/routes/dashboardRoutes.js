const express = require("express");
const router = express.Router();

const Vehicle = require("../models/Vehicle");
const StolenVehicle = require("../models/StolenVehicle");
const Memo = require("../models/Memo");

router.get("/", async (req, res) => {

  const totalVehicles = await Vehicle.countDocuments();

  const stolenVehicles = await StolenVehicle.countDocuments();

  const seatbeltViolations = await Memo.countDocuments({
    violation: "No Seatbelt"
  });

  const generatedMemos = await Memo.countDocuments();

  res.json({
    totalVehicles,
    stolenVehicles,
    seatbeltViolations,
    generatedMemos
  });

});

module.exports = router;