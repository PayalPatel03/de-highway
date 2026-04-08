import React, { useState, useEffect } from "react";

function Settings() {

  const [cameraName, setCameraName] = useState("");
  const [location, setLocation] = useState("");
  const [cameras, setCameras] = useState([]);

  const [vehicleNumber, setVehicleNumber] = useState("");
  const [stolenVehicles, setStolenVehicles] = useState([]);

  // Load cameras from backend
  const fetchCameras = async () => {

    const res = await fetch("http://localhost:5000/api/cameras");
    const data = await res.json();

    setCameras(data);
  };

  // Load stolen vehicles
  const fetchStolenVehicles = async () => {

    const res = await fetch("http://localhost:5000/api/stolen");
    const data = await res.json();

    setStolenVehicles(data);
  };

  // Add Camera
  const addCamera = async () => {

    await fetch("http://localhost:5000/api/cameras/add", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name: cameraName,
        location: location
      })
    });

    setCameraName("");
    setLocation("");

    fetchCameras(); // reload data
  };

  // Add Stolen Vehicle
  const addStolenVehicle = async () => {

    await fetch("http://localhost:5000/api/stolen/add", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        number: vehicleNumber
      })
    });

    setVehicleNumber("");

    fetchStolenVehicles(); // reload
  };

  // Load data when page opens
  useEffect(() => {

    fetchCameras();
    fetchStolenVehicles();

  }, []);

  return (
    <div>

      <h2>System Settings</h2>

      <div className="card mt-4 p-4 shadow">

        <h5>Add Camera</h5>

        <input
          type="text"
          placeholder="Camera Name"
          className="form-control mb-3"
          value={cameraName}
          onChange={(e) => setCameraName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          className="form-control mb-3"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={addCamera}
        >
          Add Camera
        </button>

        <hr />

        <h5>Add Stolen Vehicle</h5>

        <input
          type="text"
          placeholder="Vehicle Number"
          className="form-control mb-3"
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
        />

        <button
          className="btn btn-danger"
          onClick={addStolenVehicle}
        >
          Add to Stolen List
        </button>

      </div>

      {/* Added Cameras */}

      <h3 className="mt-4">Added Cameras</h3>

      {cameras.map((cam) => (
        <div key={cam._id} className="card p-2 mb-2">
          {cam.name} - {cam.location}
        </div>
      ))}

      {/* Stolen Vehicles */}

      <h3 className="mt-4">Stolen Vehicles</h3>

      {stolenVehicles.map((veh) => (
        <div key={veh._id} className="card p-2 mb-2 text-danger">
          {veh.number}
        </div>
      ))}

    </div>
  );
}

export default Settings;