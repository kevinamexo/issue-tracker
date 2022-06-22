import React from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.css";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import RouteConfig from "./RouteConfig";
import Modals from "./components/modals/Modals";
import { useAppSelector } from "./redux/app/hooks";

const App: React.FC = () => {
  const { modalActive } = useAppSelector((state) => state.modals);
  return (
    <div
      className={`pt-[50px] ${
        modalActive ? "max-h-[100vh] max-w-[100%]  overflow-hidden" : ""
      } relative font-inter w-[100vw] z-[50]`}
    >
      <Navbar />
      <Sidebar />
      <RouteConfig />
      {modalActive && <Modals />}
    </div>
  );
};

export default App;
