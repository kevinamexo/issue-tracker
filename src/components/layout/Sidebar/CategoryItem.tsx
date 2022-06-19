import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";

interface Props {
  name: string;
  active: boolean;
}
const CategoryItem: React.FC<Props> = ({ name, active }) => {
  return (
    <div
      className={`flex items-center justify-between w-[calc(100%-20px) ml-[15px] p-[5px] text-[12px] rounded-md ${
        active ? "text-blue-700" : "text-neutral-600"
      } hover:bg-neutral-100`}
    >
      <span className="flex items-center">
        <AiOutlineFile />
        <p className="ml-[5px] hover:underline">{name}</p>
      </span>
      <FiMoreHorizontal className="mr-4 hover:bg-neutral-200 rounded-lg" />
    </div>
  );
};

export default CategoryItem;
