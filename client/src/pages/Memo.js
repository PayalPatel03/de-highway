import React from "react";

function Memo() {
  return (
    <div>

      <h2>Memo / Challan System</h2>

      <div className="card mt-4 p-3 shadow">

        <table className="table table-bordered">

          <thead className="table-dark">
            <tr>
              <th>Vehicle No</th>
              <th>Violation</th>
              <th>Fine</th>
              <th>Date</th>
              <th>Location</th>
              <th>Download</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>GJ05AB1234</td>
              <td>No Seatbelt</td>
              <td>₹500</td>
              <td>10-04-2026</td>
              <td>NH48</td>
              <td>
                <button className="btn btn-success btn-sm">
                  Download PDF
                </button>
              </td>
            </tr>

            <tr>
              <td>GJ01XY5678</td>
              <td>Overspeed</td>
              <td>₹1000</td>
              <td>10-04-2026</td>
              <td>Toll Gate</td>
              <td>
                <button className="btn btn-success btn-sm">
                  Download PDF
                </button>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Memo;