import React, { useState } from "react";
import axios from "axios";

function Settings() {

  // Stolen vehicle
  const [vehicleNo, setVehicleNo] = useState("");

  // Memo fields
  const [memoVehicle, setMemoVehicle] = useState("");
  const [violation, setViolation] = useState("");
  const [fine, setFine] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  // Add stolen
  const addStolenVehicle = async () => {

    await axios.post(
      "http://localhost:5000/api/stolen/add",
      { number: vehicleNo }
    );

    alert("Stolen Vehicle Added");
    setVehicleNo("");
  };

  // Add memo
  const addMemo = async () => {

    await axios.post(
      "http://localhost:5000/api/memos/add",
      {
        vehicleNo: memoVehicle,
        violation,
        fine,
        date,
        location
      }
    );

    alert("Memo Generated");

    setMemoVehicle("");
    setViolation("");
    setFine("");
    setDate("");
    setLocation("");
  };

  return (
    <div>

      <h2>System Settings</h2>

      <div className="card mt-4 p-4 shadow">

        {/* Stolen Vehicle */}
        <h5>Add Stolen Vehicle</h5>

        <input
          type="text"
          placeholder="Vehicle Number"
          className="form-control mb-3"
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
        />

        <button className="btn btn-danger mb-4" onClick={addStolenVehicle}>
          Add to Stolen List
        </button>

        <hr />

        {/* Memo Section */}
        <h5>Generate Memo</h5>

        <input
          type="text"
          placeholder="Vehicle Number"
          className="form-control mb-2"
          value={memoVehicle}
          onChange={(e) => setMemoVehicle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Violation (e.g. No Seatbelt)"
          className="form-control mb-2"
          value={violation}
          onChange={(e) => setViolation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Fine Amount"
          className="form-control mb-2"
          value={fine}
          onChange={(e) => setFine(e.target.value)}
        />

        <input
          type="date"
          className="form-control mb-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="form-control mb-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className="btn btn-success" onClick={addMemo}>
          Generate Memo
        </button>

      </div>

    </div>
  );
}

export default Settings;