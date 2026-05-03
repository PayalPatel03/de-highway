const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");
const cameraRoutes = require("./routes/cameraRoutes");
const stolenRoutes = require("./routes/stolenRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const memoRoutes = require("./routes/memoRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/vehicles", vehicleRoutes);
app.use("/api/cameras", cameraRoutes);
app.use("/api/stolen", stolenRoutes);

app.use("/api/memos", memoRoutes);

app.get("/", (req, res) => {
    res.send("Highway AI Server Running");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});