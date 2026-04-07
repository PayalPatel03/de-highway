import React from "react";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

function Reports() {

  const vehicleData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Vehicles Detected",
        data: [120, 150, 180, 200, 170, 220, 250],
        backgroundColor: "blue"
      }
    ]
  };

  const violationData = {
    labels: ["Seatbelt", "Overspeed", "Stolen", "Signal Jump"],
    datasets: [
      {
        label: "Violations",
        data: [40, 30, 10, 20],
        backgroundColor: "red"
      }
    ]
  };

  return (
    <div>

      <h2>Reports & Analytics</h2>

      <div className="row mt-4">

        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h5>Vehicle Detection Report</h5>
            <Bar data={vehicleData} />
          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3 shadow">
            <h5>Violation Report</h5>
            <Line data={violationData} />
          </div>
        </div>

      </div>

    </div>
  );
}

export default Reports;