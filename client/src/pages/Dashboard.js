import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import monitoringImage from "../assets/High-tech traffic control room.png";

function Dashboard() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalVehicles: 0,
    stolenVehicles: 0,
    seatbeltViolations: 0,
    generatedMemos: 0
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  // Fetch data from backend
  const fetchStats = async () => {
    const res = await axios.get("http://localhost:5000/api/dashboard");
    setStats(res.data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>

      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Dashboard</h2>

        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="row">

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-car fa-2x text-primary"></i>
            <h5>Total Vehicles</h5>
            <h3>{stats.totalVehicles}</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-exclamation-triangle fa-2x text-danger"></i>
            <h5>Stolen Vehicles</h5>
            <h3>{stats.stolenVehicles}</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-user fa-2x text-warning"></i>
            <h5>Seatbelt Violations</h5>
            <h3>{stats.seatbeltViolations}</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card text-center shadow p-3">
            <i className="fa fa-file fa-2x text-success"></i>
            <h5>Generated Memos</h5>
            <h3>{stats.generatedMemos}</h3>
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