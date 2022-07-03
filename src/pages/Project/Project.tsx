import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Column from "./Column";

const Dashboard: React.FC = () => {
  return (
    <div className="w-[100%] h-[100%] p-[40px] ">
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="text-[30px] font-semibold">Project Name</p>
          <span className="text-neutral-600 ml-[8px] mt-[8px] text-[14px]">
            Created on March, 21 2021
          </span>
        </div>
        <div className="relative flex items-end border-b-[1px] mb-[8px]">
          <AiOutlineSearch className=" absolute left-0 text-[20px] text-neutral-600 mb-[5px]" />
          <input
            placeholder="Task, data, error etc..."
            className=" pl-[25px] py-1 text-[12px]"
          />
        </div>
      </div>
      <div className="flex justify-between min-w-[100%] gap-[20px] overflow-scroll px-[5px] mt-[70px] bg-white h-[calc] max-h-[calc(100%-100px)]">
        {[1, 2, 3, 4, 5, 6].map((c) => (
          <Column />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
