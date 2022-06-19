import React from "react";
import MessageCard from "../../components/MessageCard";

const Messages: React.FC = () => {
  return (
    <div className="flex items-center h-[100%] w-[100%]">
      <div className="w-[270px] h-[100%] bg-white border-r-[1px]">
        <p className="  px-[20px] text-slate-600 pt-[25px] pb-[10px] text-[20px] font-semibold text-left border-b-[1px]">
          Messages
        </p>
        <div className="pt-6">
          <MessageCard />
          <MessageCard />
          <MessageCard />
          <MessageCard />
        </div>
      </div>
      <div className="h-[100%] px-[25px] py-[30px] w-[calc(100%-271px)] bg-slate-50">
        <div className=" relative flex  border-b-[1px] pb-[10px]">
          <img
            src="man.jpg"
            alt="profile-pic"
            className="h-[70px] w-[70px] rounded-[50%] object-cover"
          />
          <div className="flex flex-col ml-[20px] ">
            <p className="text-[25px] text-slate-600 font-semibold">
              Mark Hoppus
            </p>
            <p>Lead Developer</p>
            <span className="absolute left-[50px] bottom-[10px] h-[15px] w-[15px] rounded-[50%] bg-green-600"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
