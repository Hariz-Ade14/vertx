import { useState } from "react";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Chart } from "./BodyDesktop";
import { SiSimpleanalytics } from "react-icons/si";
import { FaGlobeAfrica } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { ProgressBar } from "./BodyDesktop";
import { GiBoomerangCross } from "react-icons/gi";
export const Menu = () => {
  const menuList = [
    { icon: <MdOutlineDashboard size={20} color="white" />, name: "Dashboard" },
    { icon: <SiSimpleanalytics size={20} color="white" />, name: "Analytics" },
    { icon: <FaGlobeAfrica size={20} color="white" />, name: "Connect" },
    { icon: <FaRegBell size={20} color="white" />, name: "Activity" },
    { icon: <GiBoomerangCross size={20} color="white" />, name: "Dealroom" },
  ];

  return (
    <div className="md:hidden flex fixed p-3 border-solid border-t border-t-[#1d1d1d] bg-black z-50 bottom-0 left-0 right-0 items-center justify-between">
      {menuList.map(({ icon, name }) => {
        return (
          <div className="flex flex-col text-white gap-1 items-center">
            {icon}
            <span className="text-[9px]">{name}</span>
          </div>
        );
      })}
    </div>
  );
};

// const Tabs = () => {}
const Body = () => {
  const tabs = [
    { name: "Overview" },
    { name: "Reports" },
    { name: "Demographics" },
  ];

  const [activeTab, setActiveTab] = useState("Overview");
  const handleActiveTab = (value: string) => {
    setActiveTab(value);
  };
  return (
    <>
      <div className="bg-black mt-[100px] pb-20 flex flex-col md:hidden pt-7">
        <div className="flex fixed top-[80px] pt-5 border-solid border-b-2 border-b-[#1d1d1d] bg-black z-50 left-0 right-0 items-center justify-between px-6">
          {tabs.map(({ name }, index) => {
            return (
              <div
                key={index}
                onClick={() => handleActiveTab(name)}
                className={`text-[80%] text-white px-4 py-2 ${
                  activeTab === name
                    ? "border-solid border-b-2 border-b-white"
                    : "border-none"
                }`}
              >
                {name}
              </div>
            );
          })}
        </div>
        <div className="bg-black pt-5">
          {activeTab === "Overview" && (
            <div className="flex flex-col gap-4 p-6">
              <div className="flex items-center gap-3 bg-black p-4 rounded-[10px] w-[100%] border border-solid border-[#1D1D1D]">
                <div className="bg-black  w-[100%] flex flex-col gap-4 rounded-[20px] gap-3">
                  <div className="flex gap-2">
                    <div className="rounded-[20px] flex items-center w-[140px] border-solid border-gray-700 justify-between text-white text-[80%] whitespace-nowrap px-3 py-1 border">
                      Visitors
                      <IoMdArrowDropdown />
                    </div>
                    <div className="rounded-[20px] flex items-center gap-3 border-solid border-gray-700 justify-between text-white text-[80%] whitespace-nowrap px-3 py-1 border">
                      Last 30 days
                      <IoMdArrowDropdown />
                    </div>
                    <div className="rounded-[20px] flex items-center gap-1 border-2 border-dashed border-gray-700 justify-between text-white text-[80%] whitespace-nowrap px-3 py-1 border">
                      <IoMdAdd />
                      Add
                    </div>
                  </div>
                  <div className="flex items-stretch gap-2">
                    <h1 className="text-white font-bold text-[40px]">13.49k</h1>
                    <div className="flex flex-col justify-center gap-1">
                      <span className="text-green-700 text-[11px]">+469%</span>
                      <span className="text-white text-[11px] text-gray-500">
                        (897)
                      </span>
                    </div>
                  </div>
                  <Chart width={300} height={200} />
                </div>
              </div>
              <div className="flex flex-col gap-4 w-[100%] p-5 bg-black rounded-[10px] border border-solid border-[#1D1D1D]">
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-[20px] text-white">
                    Insights
                  </h1>
                  <div className="rounded-[20px] flex items-center w-[140px] border-solid border-gray-700 justify-between text-white text-[80%] px-3 py-1 border">
                    Visitors
                    <IoMdArrowDropdown />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-white flex flex-col leading-0">
                    <h1 className="text-[18px]">Founders</h1>
                    <div className="flex items-stretch gap-3">
                      <h1 className="text-white font-bold text-[30px]">7.4k</h1>
                      <div className="flex flex-col justify-center gap-1">
                        <span className="text-green-700 text-[11px]">
                          +000%
                        </span>
                        <span className="text-white text-[11px] text-gray-500">
                          (000)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-white flex flex-col leading-0">
                    <h1 className="text-[18px]">Investors</h1>
                    <div className="flex items-stretch gap-3">
                      <h1 className="text-white font-bold text-[30px]">
                        6.09k
                      </h1>
                      <div className="flex flex-col justify-center gap-1">
                        <span className="text-green-700 text-[11px]">
                          +000%
                        </span>
                        <span className="text-white text-[11px] text-gray-500">
                          (000)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-gray-700" />
                <div className="flex items-center gap-3 self-end">
                  <span className="text-white text-[12px]">
                    View detailed insights
                  </span>
                  <IoIosArrowRoundForward color="white" size={20} />
                </div>
              </div>
              <div className="bg-black w-[100%] items-end justify-between gap-4 p-5 border border-solid border-[#1D1D1D] flex flex-col gap-4 rounded-[20px] gap-3">
                <div className="flex flex-col w-[100%]">
                  <h1 className="text-[25px] font-light text-white">
                    Demographics
                  </h1>
                  <Chart width={300} height={200} />
                </div>
                <div className="flex flex-col w-[100%] gap-3">
                  <ProgressBar
                    color="#4834D4"
                    index={0}
                    country="India"
                    value={40}
                  />
                  <ProgressBar
                    color="orange"
                    index={1}
                    country="USA"
                    value={25}
                  />
                  <ProgressBar
                    color="yellow"
                    index={2}
                    country="CANADAA"
                    value={10}
                  />
                  <ProgressBar
                    color="green"
                    index={3}
                    country="UAE"
                    value={7}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      
      <Menu />
    </>
  );
};

export default Body;
