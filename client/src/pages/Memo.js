import React, { useEffect, useState } from "react";
import axios from "axios";

function Memo() {

  const [memos, setMemos] = useState([]);

  const fetchMemos = async () => {
    const res = await axios.get("http://localhost:5000/api/memos");
    setMemos(res.data);
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  // DELETE FUNCTION
  const deleteMemo = async (id) => {

    await axios.delete(`http://localhost:5000/api/memos/${id}`);

    alert("Memo Deleted");

    fetchMemos(); // refresh data
  };

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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {memos.map((m) => (
              <tr key={m._id}>
                <td>{m.vehicleNo}</td>
                <td>{m.violation}</td>
                <td>₹{m.fine}</td>
                <td>{m.date}</td>
                <td>{m.location}</td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteMemo(m._id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Memo;