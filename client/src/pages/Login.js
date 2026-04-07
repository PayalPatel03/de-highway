import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">
        <div className="col-md-4">

          <div className="card p-4 shadow">

            <h3 className="text-center mb-4">
              Highway AI System Login
            </h3>

            <input
              type="text"
              placeholder="Username"
              className="form-control mb-3"
            />

            <input
              type="password"
              placeholder="Password"
              className="form-control mb-3"
            />

            <button
              className="btn btn-primary w-100"
              onClick={handleLogin}
            >
              Login
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}

export default Login;