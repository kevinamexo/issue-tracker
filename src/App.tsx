import React, { useState } from "react";
import Navbar from "./components/layout/Navbar/Navbar";
import "./App.css";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import { Variants, motion } from "framer-motion";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const App: React.FC = () => {
  const [sidebarFull, setSidebarFull] = useState<boolean>(true);

  const handleMinimizeMenu = () => {
    setSidebarFull((prev) => !prev);
  };

  const sidebarVariants: Variants = {
    initial: {
      x: -230,
      transition: {
        duration: 0.2,
      },
    },
    closed: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <div className="relative font-inter">
      <Navbar />
      <Sidebar />
      <motion.div
        variants={sidebarVariants}
        initial="inital"
        animate={sidebarFull ? "closed" : "initial"}
        className={`relative flex items-center ml-[250px] ${
          sidebarFull ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-40px)]"
        }   ${
          sidebarFull ? "" : "border-l-[1px]"
        } h-[calc(100vh-50px)] z-30 bg-white`}
      >
        <span
          className="absolute top-[70px] left-[-15px] border-[1px] p-[3px] text-[20px] rounded-2xl z-30 bg-white shadow-lg cursor-pointer"
          onClick={handleMinimizeMenu}
        >
          {sidebarFull ? <BiChevronLeft /> : <BiChevronRight />}
        </span>
      </motion.div>
    </div>
  );
};

export default App;
