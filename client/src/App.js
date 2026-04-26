import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Cameras from "./pages/Cameras";
import Vehicles from "./pages/Vehicles";
import Stolen from "./pages/Stolen";
import Memo from "./pages/Memo";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

import MainLayout from "./layout/MainLayout";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />

        <Route
          path="/cameras"
          element={
            <MainLayout>
              <Cameras />
            </MainLayout>
          }
        />

        <Route
          path="/vehicles"
          element={
            <MainLayout>
              <Vehicles />
            </MainLayout>
          }
        />

        <Route
          path="/stolen"
          element={
            <MainLayout>
              <Stolen />
            </MainLayout>
          }
        />

        <Route
          path="/memo"
          element={
            <MainLayout>
              <Memo />
            </MainLayout>
          }
        />

        <Route
          path="/reports"
          element={
            <MainLayout>
              <Reports />
            </MainLayout>
          }
        />

        <Route
          path="/settings"
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;