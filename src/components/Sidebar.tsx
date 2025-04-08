import { Plus } from "lucide-react";
import image from "/logo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
const menu = [
  { title: "Dashboard", url: "" },
  { title: "Analytics", url: "/analytics" },
  { title: "Connect", url: "" },
  { title: "Dealroom", url: "" },
  { title: "Profile", url: "/profile" },
  { title: "Settings", url: "" },
];
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const handleActiveState = (value: string) => {
    setActiveTab(value);
  };
  const path = window.location.pathname;
  const pathName = path.slice(1);
  return (
    <div className="fixed border-solid border-r border-r-[#1d1d1d] bg-black bottom-0 top-0 left-0 w-[300px] hidden md:flex flex-col">
      <div className="flex gap-6 items-center px-2 py-1 border-b border-b-[#1d1d1d] border-solid">
        <div className="flex items-center justify-center">
          <img
            className="rounded-[50%] w-[40px] h-[40px]"
            src={image}
            alt="image"
          />
        </div>
        <span className="text-[20px] font-semibold text-white">
          Vertxlabs, Inc
        </span>
      </div>

      <div className="flex h-full gap">
        <div className=" flex flex-col w-[70px] items justify-between">
          <div className="flex flex-col">
            <div className="border-solid relative w-full border-b border-b-[#1d1d1d]">
              <div className="bg-white rounded-[50%] h-10 w-10 flex mx-auto my-2"></div>
              {pathName === "profile" && (
                <div className="bg-green-500 h-[10px] w-[10px] absolute right-2.5 bottom-2 rounded-[50%]"></div>
              )}
            </div>
            {pathName === "profile" && (
              <div className="flex flex-col gap">
                <div className="border-solid relative w-full border-b border-b-[#1d1d1d]">
                  <div className="bg-white rounded-[50%] h-10 w-10 flex mx-auto my-2"></div>
                  <div className="bg-orange-500 h-[10px] w-[10px] absolute right-2.5 bottom-2 rounded-[50%]"></div>
                </div>
                <div className="border-solid relative w-full border-b border-b-[#1d1d1d]">
                  <div className="bg-white rounded-[50%] h-10 w-10 flex mx-auto my-2"></div>
                  <div className="bg-green-500 h-[10px] w-[10px] absolute right-2.5 bottom-2 rounded-[50%]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-center h-[50px] border-solid border-t border-t-[#1d1d1d]">
               {pathName === "analytics" && (<Plus className="" size={25} color={"white"} />)} 
          </div>
        </div>{" "}
        <div className="flex pt-2 flex-col gap-3 w-full border-l border-solid border-l-[#1d1d1d] ">
          {menu.map(({ title, url }, index) => {
            return (
              <Link
                to={url}
                key={index}
                onClick={() => handleActiveState(title)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${
                  activeTab === title ? "text-white" : "text-[#555555]"
                }`}
              >
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
