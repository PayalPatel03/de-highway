import React from "react";
import { useNavigate } from "react-router-dom";
import monitoringImage from "../assets/High-tech traffic control room.png";

function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {

    // Remove user data
    localStorage.removeItem("user");

    // Redirect to login
    navigate("/");
  };
  

  return (
    <div>

      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>

        <button
          className="btn btn-danger"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      <div className="row">

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-car fa-2x text-primary"></i>
            <h5 className="mt-2">Total Vehicles</h5>
            <h3>1200</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-exclamation-triangle fa-2x text-danger"></i>
            <h5 className="mt-2">Stolen Vehicles</h5>
            <h3>12</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-user fa-2x text-warning"></i>
            <h5 className="mt-2">Seatbelt Violations</h5>
            <h3>45</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-file fa-2x text-success"></i>
            <h5 className="mt-2">Generated Memos</h5>
            <h3>78</h3>
          </div>
        </div>

      </div>

      <div className="card mt-4 p-4 shadow">
        <h5>Live Highway Monitoring</h5>

        <img 
          src={monitoringImage}
          alt="Highway Monitoring"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "10px"
          }}
        />
      </div>

    </div>
  );
}

export default Dashboard;