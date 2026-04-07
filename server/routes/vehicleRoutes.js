const router = require("express").Router();

const {
    addVehicle,
    getVehicles,
    deleteVehicle
} = require("../controllers/vehicleController");

router.post("/add", addVehicle);
router.get("/all", getVehicles);
router.delete("/delete/:id", deleteVehicle);

module.exports = router;