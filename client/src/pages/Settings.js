import React, { useState } from "react";
import axios from "axios";

function Settings() {

  const [vehicleNo, setVehicleNo] = useState("");

  const addStolenVehicle = async () => {

    await axios.post(
      "http://localhost:5000/api/vehicles/add",
      {
        vehicleNo: vehicleNo,
        owner: "Unknown",
        type: "Unknown",
        status: "Stolen"
      }
    );

    alert("Stolen Vehicle Added");
    setVehicleNo("");
  };

  return (
    <div>

      <h2>System Settings</h2>

      <div className="card mt-4 p-4 shadow">

        <h5>Add Stolen Vehicle</h5>

        <input
          type="text"
          placeholder="Vehicle Number"
          className="form-control mb-3"
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
        />

        <button
          className="btn btn-danger"
          onClick={addStolenVehicle}
        >
          Add to Stolen List
        </button>

      </div>

    </div>
  );
}

export default Settings;