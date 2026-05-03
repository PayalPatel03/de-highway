import React, { useEffect, useState } from "react";
import axios from "axios";

function Stolen() {

  const [stolen, setStolen] = useState([]);

  const fetchStolen = async () => {
    const res = await axios.get("http://localhost:5000/api/stolen");
    setStolen(res.data);
  };

  useEffect(() => {
    fetchStolen();
  }, []);

  return (
    <div>

      <h2>Stolen Vehicles</h2>

      <div className="card mt-4 p-3 shadow">

        <table className="table table-bordered">

          <thead className="table-dark">
            <tr>
              <th>Vehicle Number</th>
            </tr>
          </thead>

          <tbody>

            {stolen.map((s) => (
              <tr key={s._id}>
                <td>{s.number}</td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Stolen;