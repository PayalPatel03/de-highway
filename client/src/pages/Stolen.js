import React from "react";

function Stolen() {
  return (
    <div>

      <h2>Stolen Vehicles</h2>

      <div className="card mt-4 p-3 shadow">

        <table className="table table-bordered">

          <thead className="table-danger">
            <tr>
              <th>Vehicle No</th>
              <th>Owner</th>
              <th>Location</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>GJ05AB1234</td>
              <td>Rahul Patel</td>
              <td>NH48</td>
              <td>10:45 AM</td>
              <td className="text-danger">Detected</td>
            </tr>

            <tr>
              <td>GJ01XY5678</td>
              <td>Amit Shah</td>
              <td>Toll Gate</td>
              <td>11:20 AM</td>
              <td className="text-danger">Detected</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Stolen;