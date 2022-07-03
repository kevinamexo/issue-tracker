import React from "react";

const Message: React.FC<{ index: number }> = ({ index }) => {
  const left = index > 1 && index % 2 == 0;
  return (
    <div
      className={`w-[100%] flex items-center ${
        left ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`min-w-[40%] mt-[10px] px-[10px] py-[20px] rounded-md ${
          left
            ? "bg-slate-900 rounded-bl-none text-slate-200"
            : "bg-slate-400 rounded-br-none text-color-900"
        } text-slate-50`}
      >
        This is a message
      </div>
    </div>
  );
};

export default Message;
