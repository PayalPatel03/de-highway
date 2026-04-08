import React, { useEffect, useState } from "react";
import axios from "axios";

function Vehicles() {

  const [vehicles, setVehicles] = useState([]);

  const getVehicles = async () => {
    const res = await axios.get("http://localhost:5000/api/vehicles");
    setVehicles(res.data);
  };

  const deleteVehicle = async (id) => {
    await axios.delete(`http://localhost:5000/api/vehicles/delete/${id}`);
    getVehicles();
  };
  const updateVehicle = async (id) => {

  await axios.put(
    `http://localhost:5000/api/vehicles/update/${id}`,
    { status: "Active" }
  );

  getVehicles();
};

  useEffect(() => {
    getVehicles();
  }, []);

  return (
    <div>

      <h2>Vehicle Database</h2>

      <div className="card mt-4 p-4 shadow">

        <table className="table">

          <thead className="table-dark">
            <tr>
              <th>Vehicle No</th>
              <th>Owner</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {vehicles.map((v) => (
              <tr key={v._id}>
                <td>{v.vehicleNo}</td>
                <td>{v.owner}</td>
                <td>{v.type}</td>
                <td>{v.status}</td>

                <td>
                  <button className="btn btn-danger"
                    onClick={() => deleteVehicle(v._id)}
                  >
                    Delete
                  </button>
                  <button
  className="btn btn-warning me-2"
  onClick={() => updateVehicle(v._id)}
>
  Update
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

export default Vehicles;