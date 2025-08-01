import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import DashboardHome from "./components/DashboardHome";
import DashboardSettings from "./components/DashboardSettings";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<DashboardHome />} />
          <Route path="settings" element={<DashboardSettings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;