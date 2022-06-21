import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.css";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import RouteConfig from "./RouteConfig";

const App: React.FC = () => {
  return (
    <div className="relative font-inter overflow-hidden">
      <Navbar />
      <Sidebar />
      <RouteConfig />
    </div>
  );
};

export default App;
