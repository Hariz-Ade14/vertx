import { Plus } from "lucide-react";
import image from "../../public/portfolio-pic.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
const menu = [
  { title: "Dashboard" ,url:"/Analytics"},
  { title: "Analytics",url:"/Analytics" },
  { title: "Connect",url: "/Analytics" },
  { title: "Dealroom",url: "/Analytics" },
  { title: "Profile" ,url: "/Profile"},
  { title: "Settings" , url: ""},
];
const Sidebar = () => {
  const [activeTab,setActiveTab] = useState("Dashboard");
  const handleActiveState = (value: string) => {
       setActiveTab(value);
  }
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
          {menu.map(({ title,url }, index) => {
            return (
              <Link to={url}
                key={index}
                onClick={() => handleActiveState(title)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer ${activeTab === title ? "text-white" :"text-gray-600"}`}
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
