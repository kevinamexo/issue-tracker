import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { AiOutlineEye } from "react-icons/ai";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "red"];
const CARDS = ["Open Issues", "Projects", "Due today", "Due within a week"];
const tableCols = [
  "Title",
  "Project",
  "Due Date",
  "Assigned to",
  "Assigned by",
  "Priority",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) * 0.75;
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className=" mt-[150px] flex w-[100%] min-h-[100%] pb-[20px] bg-neutral-100 pl-[20px] px-[20px] gap-[20px]">
      <main className="dashboard-sidebar:w-[calc(100%-300px)] pt-[40px] w-[100%]">
        <p className="text-[22px] font-semibold">
          {new Date().toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
        <div className="mt-[30px] flex justify-between max-w-[100%]">
          <p className="font-semibold text-[20px]">Summary</p>
        </div>
        <div className=" flex py-2 gap-[20px]">
          {[0, 1, 2, 3].map((i, idx: number) => (
            <div
              className={` relative h-[250px] w-[250px] px-[20px] py-[20px] rounded-md shadow-md bg-violet-600 text-white`}
            >
              <p className="font-semibold text-[55px]">{i}</p>
              <p className=" mt-[20px] text-[20px] uppercase font-semibold">
                {CARDS[i]}
              </p>
              <div className=" absolute bottom-0 right-0 left-0 flex items-center justify-center gap-[10px] border-t-[2px] border-white py-[5px] cursor-pointer hover:bg-violet-500 transition-all rounded-b-md">
                View all
                <AiOutlineEye className="text-white text-[30px]" />
              </div>
            </div>
          ))}
          <div className="flex items-center ">
            <p className="text-blue-600 cursor-pointer hover:underline">
              View all projects
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] mt-[30px]">
          <div className="bg-white shadow-lg w-[450px] h-[350px] flex-col p-[25px] rounded-md">
            <p className="text-[24px] font-bold">Issues by priority</p>
            <ResponsiveContainer width={400} height={300}>
              <PieChart>
                <Legend layout="centric" verticalAlign="middle" align="right" />
                <Pie
                  data={data}
                  cx={135}
                  cy={130}
                  innerRadius={80}
                  outerRadius={120}
                  labelLine={false}
                  fill="#8884d8"
                  // paddingAngle={5}
                  label={renderCustomizedLabel}
                  legendType="circle"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow-lg w-[450px] h-[350px] flex-col p-[25px] rounded-md">
            <p className="text-[24px] font-bold">Issues by priority</p>
            <ResponsiveContainer width={400} height={300}>
              <PieChart>
                <Legend layout="centric" verticalAlign="middle" align="right" />
                <Pie
                  data={data}
                  cx={135}
                  cy={130}
                  innerRadius={80}
                  outerRadius={120}
                  labelLine={false}
                  fill="#8884d8"
                  // paddingAngle={5}
                  label={renderCustomizedLabel}
                  legendType="circle"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="text-[20px] font-semibold mt-[40px]">Tasks due Soon</p>
        <div className="relative mt-[30px] overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {tableCols.map((col) => (
                  <th scope="col" className="px-6 py-4">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Sliver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
                <td className="px-6 py-4">$1999</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
                <td className="px-6 py-4">$99</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Google Pixel Phone
                </th>
                <td className="px-6 py-4">Gray</td>
                <td className="px-6 py-4">Phone</td>
                <td className="px-6 py-4">$799</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  Apple Watch 5
                </th>
                <td className="px-6 py-4">Red</td>
                <td className="px-6 py-4">Wearables</td>
                <td className="px-6 py-4">$999</td>
                <td className="px-6 py-4 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
      <div className="hidden dashboard-sidebar:flex bg-white min-h-[100%] shadow-lg  pt-[40px] w-[310px] rounded-l-md">
        hello
      </div>
    </div>
  );
};

export default Dashboard;
