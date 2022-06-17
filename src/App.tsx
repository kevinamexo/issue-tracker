import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.css";
import Sidebar from "./components/layout/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="relative font-inter">
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default App;
