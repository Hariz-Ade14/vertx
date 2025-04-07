// import React from "react";
import { Plus } from "lucide-react";
import image from "../../public/portfolio-pic.jpg";


const menu = [
  { title: "Dashboard" },
  { title: "Analytics" },
  { title: "Connect" },
  { title: "Dealroom" },
  { title: "Profile" },
  { title: "Settings" },
];
const Sidebar = () => {
  return (
    <div className="fixed border-solid border-r border-r-[#1d1d1d] bg-black bottom-0 top-0 left-0 w-[300px] hidden md:flex flex-col">
      <div className="flex gap-5 items-center p-2 border-b border-b-[#1d1d1d] border-solid">
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
          <div className="border-solid w-full border-b border-b-[#1d1d1d]">
            <img
              className="rounded-[50%] m-2 w-[40px] h-[40px] "
              src={image}
              alt="image"
            />
          </div>

          <div className="flex  items-center justify-center p-3 border-solid border-t border-t-[#1d1d1d]">
            <Plus className="" size={25} color={"white"} />
          </div>
        </div>{" "}
        <div className="flex pt-5 flex-col gap-3 w-full border-l border-solid border-l-[#1d1d1d] ">
          {menu.map(({ title }, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#1d1d1d] cursor-pointer"
              >
                <div className="text-white">{title}</div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="p-6">
          <button className="w-8 h-8 rounded-full bg-[#1d1d1d] flex items-center justify-center">
            <Plus className="h-4 w-4" />
          </button>
        </div> */}
    </div>
  );
};

export default Sidebar;
