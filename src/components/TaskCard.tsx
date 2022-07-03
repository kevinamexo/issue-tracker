import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { FaCommentAlt } from "react-icons/fa";
import { truncate } from "../common/helpers";

// interface TaskCardProps {
//   title: string;
//   assigner: string;
//   assignedTo: string[];
//   created: Date;
// }

const TaskCard = () => {
  const desc = `TLorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting`;
  return (
    <div className="mt-10px pt-[20px]">
      <div className="w-[100%] bg-white py-[15px] px-[10px] rounded-md shadow-md border-[1px] hover:bg-neutral-50 cursor-pointer">
        <p className="text-[16px] font-semibold hover:underline">
          This is the task title
        </p>
        <span className=" text-[12px] flex items-center gap-[5px]">
          <p className=" hover:text-sky-700 hover:underline">Assigner name</p>
          <p>6h ago</p>
        </span>
        <p className="text-[12px] py-2">{truncate(desc, 100)}</p>
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-[5px]">
            <FaCommentAlt className="text-neutral-300" />
            <p className="text-[12px]">12</p>
          </span>
          <HiOutlineChevronDoubleUp className="text-red-600" />
        </div>
        <p className="mt-[5px] text-blue-700  text-[14px] font-medium">
          #UIDESIGN
        </p>
      </div>
    </div>
  );
};

export default TaskCard;
