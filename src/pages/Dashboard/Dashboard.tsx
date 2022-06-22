import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="w-[100%] h-[100%] bg-red-200 pt-[50px] px-[20px]">
      Dashboard
      <div className="bg-blue-200 w-[170px] h-[120px] p-[10px] rounded-md text-blue-800 font-semibold text-center">
        <p className="text-[30px]">3</p>
        Total bugs
      </div>
    </div>
  );
};

export default Dashboard;
