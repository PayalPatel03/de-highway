const express = require("express");
const router = express.Router();
const StolenVehicle = require("../models/StolenVehicle");

// ADD
router.post("/add", async (req, res) => {
  const data = new StolenVehicle(req.body);
  await data.save();
  res.json(data);
});

// GET ALL
router.get("/", async (req, res) => {
  const data = await StolenVehicle.find();
  res.json(data);
});

module.exports = router;