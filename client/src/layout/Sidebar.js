import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        position: "fixed",
        padding: "20px"
      }}
    >
      <h4 className="mb-4">Highway AI</h4>

      <ul className="list-unstyled">

        <li className="mb-3">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <i className="fa fa-home me-2"></i>
            Dashboard
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/cameras" className="text-white text-decoration-none">
            <i className="fa fa-video me-2"></i>
            Cameras
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/vehicles" className="text-white text-decoration-none">
            <i className="fa fa-car me-2"></i>
              Vehicles
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/stolen" className="text-white text-decoration-none">
            <i className="fa fa-exclamation-triangle me-2"></i>
             Stolen Vehicles
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/memo" className="text-white text-decoration-none">
            <i className="fa fa-file me-2"></i>
            Memo
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/reports" className="text-white text-decoration-none">
            <i className="fa fa-chart-bar me-2"></i>
            Reports
          </Link>
        </li>

        <li className="mb-3">
          <Link to="/settings" className="text-white text-decoration-none">
            <i className="fa fa-cog me-2"></i>
            Settings
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;