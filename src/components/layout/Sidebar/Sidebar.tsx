import React, { useState } from "react";
import { GrProjects } from "react-icons/gr";
import { GoProject } from "react-icons/go";
import { BsListOl, BsChevronCompactDown } from "react-icons/bs";

const Sidebar: React.FC = () => {
  const [projectsAmount, setProjectsAmount] = useState<number>(0);
  const [TaskAmount, setTaskAmount] = useState<number>(0);
  return (
    <div className="fixed left-0 w-[250px] border-r-[1px] h-[calc(100vh-20px)] px-[10px]  pt-[30px]">
      <p className="ml-[20px]">ORGANIZATION NAME</p>
      <ul className="list-none mt-[30px] border-t-[1px] border-b-[1px] py-[20px]">
        <li className="flex items-center justify-between pl-[20px] pr-[10px] rounded-md py-[10px] hover:bg-neutral-200 cursor-pointer">
          <span className="flex items-center justify-between ">
            <GrProjects className="" />
            <p className="ml-[20px] text-[13px]">Dashboard </p>
          </span>
          {/* <BsChevronCompactDown className="text-[20px]" /> */}
        </li>
        <li className="flex items-center justify-between pl-[20px] pr-[10px] rounded-md py-[10px] hover:bg-neutral-200 cursor-pointer">
          <span className="flex items-center justify-between ">
            <GoProject className="" />
            <p className="ml-[20px] text-[13px]">Projects </p>
          </span>
          <span className="bg-orange-100 px-3  text-[14px] rounded-lg font-semibold text-neutral-500">
            2
          </span>
        </li>
        <li className="flex items-center justify-between pl-[20px] pr-[10px] rounded-md py-[10px] hover:bg-neutral-200 cursor-pointer">
          <span className="flex items-center justify-between ">
            <BsListOl className="" />
            <p className="ml-[20px] text-[13px]">My Tasks </p>
          </span>
          <span className="bg-orange-100 px-3  text-[14px] rounded-lg font-semibold text-neutral-500">
            2
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
