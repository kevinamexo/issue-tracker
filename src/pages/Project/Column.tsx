import React from "react";

import TaskCard from "../../components/TaskCard";

const Column: React.FC = () => {
  return (
    <div className=" min-w-[300px] w-[330px]  bg-slate-100 p-[10px] rounded-md ">
      <div className="pb-[30px] border-b-2">
        <p className="text-[20px] font-semibold">In Progress</p>
        <p className="text-[16px]">4 tasks</p>
      </div>

      {[1, 2, 3, 4].map((i) => (
        <TaskCard />
      ))}
    </div>
  );
};

export default Column;
