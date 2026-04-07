import React from "react";

function Vehicles() {
  return (
    <div>

      <h2>Vehicle Database</h2>

      <table className="table table-bordered mt-4">

        <thead className="table-dark">
          <tr>
            <th>Vehicle No</th>
            <th>Owner</th>
            <th>Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>GJ05AB1234</td>
            <td>Rahul Patel</td>
            <td>Car</td>
            <td>Active</td>
          </tr>

          <tr>
            <td>GJ01XY5678</td>
            <td>Amit Shah</td>
            <td>Bike</td>
            <td>Stolen</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Vehicles;