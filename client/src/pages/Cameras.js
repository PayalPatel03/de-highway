import React from "react";

function Cameras() {
  return (
    <div>

      <h2>Highway Cameras</h2>

      <div className="row mt-4">

        {/* Camera 1 */}
        <div className="col-md-6">
          <div className="card p-3 shadow">

            <h5>Camera 1 - Highway Entry</h5>

            <img
              src="https://www.shutterstock.com/image-photo/traffic-gurgaon-faridabad-toll-plaza-600w-2356494459.jpg"
              alt="Highway Entry"
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px",
                marginTop: "10px"
              }}
            />

           

          </div>
        </div>

        {/* Camera 2 */}
        <div className="col-md-6">
          <div className="card p-3 shadow">

            <h5>Camera 2 - Toll Gate</h5>

            <iframe
              width="100%"
              height="250"
              src=""
              title="Live Camera"
              style={{
                borderRadius: "10px",
                marginTop: "10px"
              }}
              allowFullScreen
            ></iframe>

           

          </div>
        </div>

      </div>

    </div>
  );
}

export default Cameras;