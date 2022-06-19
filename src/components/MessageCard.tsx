import React from "react";

const MessageCard: React.FC = () => {
  return (
    <div className=" relative flex items-center py-[20px]  px-[20px] border-b-[1px] cursor-pointer hover:bg-slate-200">
      <img
        src="man.jpg"
        alt=""
        className="h-[40px] w-[40px] rounded-[50%] object-cover"
      />
      <div className="flex flex-col justify-between ml-[10px]">
        <p className="text-slate-600 font-semibold text-[14px] m-0 leading-1 hover:underline">
          John Jones
        </p>
        <p className="text-slate-600  text-[12px]  w-[150px] text-ellipsis overflow-hidden whitespace-nowrap">
          Hello there, here's a message
        </p>
        <p className="absolute right-[20px] text-[12px] text-neutral-600">
          8PM
        </p>
      </div>
    </div>
  );
};

export default MessageCard;
