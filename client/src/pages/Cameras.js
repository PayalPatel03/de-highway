import React from "react";

function Cameras() {
  return (
    <div>

      <h2>Highway Cameras</h2>

      <div className="row mt-4">

        <div className="col-md-6">
          <div className="card p-3 shadow">

            <h5>Camera 1 - Highway Entry</h5>

            <div
              style={{
                height: "250px",
                background: "#ccc",
                marginTop: "10px"
              }}
            ></div>

          </div>
        </div>

        <div className="col-md-6">
          <div className="card p-3 shadow">

            <h5>Camera 2 - Toll Gate</h5>

            <div
              style={{
                height: "250px",
                background: "#ccc",
                marginTop: "10px"
              }}
            ></div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Cameras;