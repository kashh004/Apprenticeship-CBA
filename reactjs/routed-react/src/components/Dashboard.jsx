import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import DashboardHome from "./DashboardHome";
import DashboardSettings from "./DashboardSettings";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="" style={{ margin: "0 10px" }}>Dashboard Home</Link>
        <Link to="settings" style={{ margin: "0 10px" }}>Settings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="settings" element={<DashboardSettings />} />
      </Routes>
    </div>
  );
};

export default Dashboard;