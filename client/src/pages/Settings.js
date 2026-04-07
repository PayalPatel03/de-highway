import React from "react";

function Settings() {
  return (
    <div>

      <h2>System Settings</h2>

      <div className="card mt-4 p-4 shadow">

        <h5>Add Camera</h5>

        <input
          type="text"
          placeholder="Camera Name"
          className="form-control mb-3"
        />

        <input
          type="text"
          placeholder="Location"
          className="form-control mb-3"
        />

        <button className="btn btn-primary">
          Add Camera
        </button>

        <hr />

        <h5>Add Stolen Vehicle</h5>

        <input
          type="text"
          placeholder="Vehicle Number"
          className="form-control mb-3"
        />

        <button className="btn btn-danger">
          Add to Stolen List
        </button>

      </div>

    </div>
  );
}

export default Settings;