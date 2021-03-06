import React, { useState } from "react";
import { RiDashboardLine } from "react-icons/ri";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { BsListOl } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { MdMessage } from "react-icons/md";
import CategoryItem from "./CategoryItem";

type SidebarTabs = "dashboard" | "projects" | "my-tasks" | "messages";
const Sidebar: React.FC = () => {
  //   const [projectsAmount, setProjectsAmount] = useState<number>(0);
  //   const [TaskAmount, setTaskAmount] = useState<number>(0);
  const [activeSidebarTab, setActiveSidebarTab] =
    useState<SidebarTabs>("my-tasks");
  const [openSidebarTabs, setOpenSidebarTabs] = useState<SidebarTabs[]>([]);

  const openSidebarTab = (tab: SidebarTabs) => {
    if (openSidebarTabs.some((t) => t === tab)) {
      setOpenSidebarTabs((prev) => prev.filter((t) => t !== tab));
    } else {
      setOpenSidebarTabs((prev) => [...prev, tab]);
    }
  };
  const isTabActive = (tab: SidebarTabs) => {
    if (openSidebarTabs.some((t) => t === tab)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="fixed flex flex-col justify-between left-0 w-[250px] border-r-[1px] h-[calc(100vh-20px)] px-[10px]  pt-[30px]">
      <div className="relative">
        <p className="ml-[20px]">ORGANIZATION NAME</p>
        <ul className="list-none mt-[30px] border-t-[1px] border-b-[1px] py-[20px]">
          <li
            className="pl-[15px] pr-[10px] rounded-md py-[10px] cursor-pointer"
            onClick={() => setActiveSidebarTab("dashboard")}
          >
            <div
              className={`flex items-center justify-between ${
                activeSidebarTab === "dashboard"
                  ? "text-blue-800 bg-neutral-100"
                  : ""
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
          </li>
          <li
            className="pl-[15px] pr-[10px]  py-[10px] cursor-pointer"
            onClick={() => setActiveSidebarTab("projects")}
          >
            <div
              className={`flex items-center justify-between ${
                activeSidebarTab === "projects" ? "bg-neutral-100" : ""
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
              <div className="flex ">
                <span className="bg-orange-100 px-3  text-[14px] rounded-lg font-semibold text-neutral-500 mr-[5px]">
                  2
                </span>
                <span
                  className="text-[20px] text-neutral-600"
                  onClick={() => openSidebarTab("projects")}
                >
                  {isTabActive("projects") ? (
                    <BiChevronDown />
                  ) : (
                    <BiChevronRight />
                  )}
                </span>
              </div>
            </div>
            {isTabActive("projects") && (
              <div className="border-l-2 ml-[12px] pt-[8px]">
                {["12", "4324", "wef234"].map((i) => (
                  <CategoryItem name={i} active={false} />
                ))}
              </div>
            )}
          </li>
          <li
            className="pl-[15px] pr-[10px] rounded-md py-[10px] cursor-pointer"
            onClick={() => setActiveSidebarTab("my-tasks")}
          >
            <div
              className={`flex items-center ${
                activeSidebarTab === "my-tasks"
                  ? " bg-neutral-100 text-blue-800"
                  : ""
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
              <div className="flex ">
                <span className="bg-orange-100 px-3  text-[14px] rounded-lg font-semibold text-neutral-500 mr-[5px]">
                  2
                </span>
                <span
                  className="text-[20px] text-neutral-600"
                  onClick={() => openSidebarTab("my-tasks")}
                >
                  {isTabActive("my-tasks") ? (
                    <BiChevronDown />
                  ) : (
                    <BiChevronRight />
                  )}
                </span>
              </div>
            </div>
            {isTabActive("my-tasks") && (
              <div className="border-l-2 ml-[12px] pt-[8px]">
                {["12", "4324", "wef234"].map((i) => (
                  <CategoryItem name={i} active={false} />
                ))}
              </div>
            )}
          </li>
          <li
            className="pl-[15px] pr-[10px] rounded-md py-[10px] cursor-pointer"
            onClick={() => setActiveSidebarTab("messages")}
          >
            <div
              className={`flex items-center ${
                activeSidebarTab === "messages"
                  ? " bg-neutral-100 text-blue-800"
                  : ""
              } justify-between hover:bg-neutral-100 p-[5px] rounded-md`}
            >
              <span className="flex items-center justify-between ">
                <MdMessage
                  className={`${
                    activeSidebarTab === "messages" ? "text-blue-800" : ""
                  }`}
                />
                <p className="ml-[10px] text-[13px]">Messages </p>
              </span>
              <div className="flex ">
                <span className="bg-orange-100 px-3  text-[14px] rounded-lg font-semibold text-neutral-500 mr-[25px]">
                  2
                </span>
              </div>
            </div>
            {isTabActive("messages") && (
              <div className="border-l-2 ml-[12px] pt-[8px]">
                {["12", "4324", "wef234"].map((i) => (
                  <CategoryItem name={i} active={false} />
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
      <FiLogOut />
    </div>
  );
};

export default Sidebar;
