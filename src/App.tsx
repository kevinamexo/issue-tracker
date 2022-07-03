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
      className={`pt-[50px] overflow-x-hidden ${
        modalActive ? " max-w-[100vw] min-h-[100vh] min-w-[100%]" : ""
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
