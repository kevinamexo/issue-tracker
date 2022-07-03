import React, { useState, useCallback } from "react";
import MessageCard from "../../components/MessageCard";
import { AiOutlineSend } from "react-icons/ai";
import TextareaAutosize from "react-textarea-autosize";
import Message from "../../components/Message";

const Messages: React.FC = () => {
  const [messageText, setMessageText] = useState<string>("");

  const handleMessageValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMessageText(e.target.value);
    },
    [messageText]
  );

  return (
    <div className="flex items-center h-[100%] w-[100%]">
      <div className="w-[270px] h-[100%] bg-white border-r-[1px]">
        <p className="  px-[20px] text-slate-600 pt-[25px] pb-[10px] text-[20px] font-semibold text-left ">
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
        <div className=" relative flex h-[80px] border-b-[1px] pb-[10px]">
          <img
            src="man.jpg"
            alt="profile-pic"
            className="h-[70px] w-[70px] rounded-[50%] object-cover"
          />
          <div className="flex flex-col ml-[20px] ">
            <p className="text-[25px] text-slate-600 font-semibold">
              Mark Hoppus
            </p>
            <p className="text-slate-600">Lead Developer</p>
            <span className="absolute left-[50px] bottom-[10px] h-[15px] w-[15px] rounded-[50%] bg-green-600"></span>
          </div>
        </div>
        <div className="h-[calc(100%-150px)] py-[20px] overflow-y-scroll">
          {Array.from({ length: 10 }, (item, index) => (item = index + 1)).map(
            (m, idx) => (
              <Message index={idx} />
            )
          )}
        </div>
        <div className="relative flex items-center  bg-white rounded-lg">
          <TextareaAutosize className="bg-white w-[calc(100%-30px)] px-[10px] py-[2px] pr-[30px] border-[1px]" />
          <div className="absolute top-0 right-0 bg-slate-800">
            <AiOutlineSend className="text-[30px] text-white p-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
