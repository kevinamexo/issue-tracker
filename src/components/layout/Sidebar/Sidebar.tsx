import React, { useState } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { GoProject } from "react-icons/go";
import { BsListOl } from "react-icons/bs";
import CategoryItem from "./CategoryItem";

const Sidebar: React.FC = () => {
  //   const [projectsAmount, setProjectsAmount] = useState<number>(0);
  //   const [TaskAmount, setTaskAmount] = useState<number>(0);
  const [activeSidebarTab, setActiveSidebarTab] = useState<
    "dashboard" | "projects" | "my-tasks"
  >("my-tasks");

  return (
    <div className="fixed left-0 w-[250px] border-r-[1px] h-[calc(100vh-20px)] px-[10px]  pt-[30px]">
      <div className="relative">
        <p className="ml-[20px]">ORGANIZATION NAME</p>
        <ul className="list-none mt-[30px] border-t-[1px] border-b-[1px] py-[20px]">
          <li
            className="pl-[15px] pr-[10px] rounded-md py-[10px] cursor-pointer"
            onClick={() => setActiveSidebarTab("dashboard")}
          >
            <div
              className={`flex items-center justify-between ${
                activeSidebarTab === "dashboard" ? "text-blue-800" : ""
              } hover:bg-neutral-100 p-[5px] rounded-md`}
            >
              <span className="flex items-center justify-between ">
                <RiDashboardLine
                  className={`text-[20px] ${
                    activeSidebarTab === "dashboard" ? "text-blue-800" : ""
                  }`}
                />
                <p className="ml-[10px] text-[13px]">Dashboard </p>
              </span>
            </div>
            {/* <BsChevronCompactDown className="text-[20px]" /> */}
          </li>
          <li
            className="pl-[15px] pr-[10px]  py-[10px] cursor-pointer"
            onClick={() => setActiveSidebarTab("projects")}
          >
            <div
              className={`flex items-center justify-between ${
                activeSidebarTab === "projects"
              } hover:bg-neutral-100 p-[5px] rounded-md`}
            >
              <span
                className={`flex items-center justify-between ${
                  activeSidebarTab === "projects" ? "text-blue-800" : ""
                }`}
              >
                <GoProject />
                <p className="ml-[10px] text-[13px] py-[5px] ">Projects </p>
              </span>
              <span className="bg-orange-100 px-3  text-[14px] rounded-lg font-semibold text-neutral-500">
                2
              </span>
            </div>
            <div className="border-l-2 ml-[12px] pt-[8px]">
              {["12", "4324", "wef234"].map((i) => (
                <CategoryItem name={i} active={i === "12"} />
              ))}
            </div>
          </li>
          <li
            className="pl-[15px] pr-[10px] rounded-md py-[10px] cursor-pointer"
            onClick={() => setActiveSidebarTab("my-tasks")}
          >
            <div
              className={`flex items-center ${
                activeSidebarTab === "my-tasks" ? "text-blue-800" : ""
              } justify-between hover:bg-neutral-100 p-[5px] rounded-md`}
            >
              <span className="flex items-center justify-between ">
                <BsListOl
                  className={`${
                    activeSidebarTab === "my-tasks" ? "text-blue-800" : ""
                  }`}
                />
                <p className="ml-[10px] text-[13px]">My Tasks </p>
              </span>
              <span className="bg-orange-100 px-3  text-[14px] rounded-lg font-semibold text-neutral-500">
                2
              </span>
            </div>
            <div className="border-l-2 ml-[12px] pt-[8px]">
              {["12", "4324", "wef234"].map((i) => (
                <CategoryItem name={i} active={false} />
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
