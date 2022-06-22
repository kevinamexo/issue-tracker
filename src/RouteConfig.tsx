import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Project from "./pages/Project/Project";
import Messages from "./pages/Messages/Messages";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Variants, motion } from "framer-motion";
import Dashboard from "./pages/Dashboard/Dashboard";

const Main: React.FC = () => {
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
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="project" element={<Project />} />
        <Route path="messages" element={<Messages />} />
      </Routes>
      <span
        className="absolute top-[70px] left-[-15px] border-[1px] p-[3px] text-[20px] rounded-2xl z-30 bg-white shadow-lg cursor-pointer"
        onClick={handleMinimizeMenu}
      >
        {sidebarFull ? <BiChevronLeft /> : <BiChevronRight />}
      </span>
    </motion.div>
  );
};

export default Main;
