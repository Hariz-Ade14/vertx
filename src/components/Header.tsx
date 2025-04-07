import image from "../../public/portfolio-pic.jpg";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
// import React,{useState} from "react";

const Header = () => {

  return (
    <div>
      <div className="md:flex hidden flex-col fixed top-0 right-0 h-[113px] z-50 left-[300px] bg-black">
        <div className="flex items-center text-white justify-between border-solid border-b border-b-[#1d1d1d]">
          <p className="p-4 border-solid border-l border-l-[#1d1d1d]">
            Analytics
          </p>
          <div className="flex">
            <p className="py-4 px-7 border-solid border-l border-l-[#1d1d1d]">
              Activity
            </p>
            <p className="py-4 px-7 border-solid border-l border-l-[#1d1d1d]">
              Logout
            </p>
          </div>
        </div>
        <div className="flex items-center text-white justify-between border-solid border-b border-b-[#1d1d1d]">
          <div className="flex">
            <p className="p-4 border-solid border-l border-l-[#1d1d1d]">
              Overview
            </p>
            <p className="p-4 border-solid border-l border-l-[#1d1d1d]">
              Demographics
            </p>
          </div>
          <p className="py-4 px-8 border-solid border-l border-l-[#1d1d1d]">
            More
          </p>
        </div>
      </div>
      <div className="md:hidden fixed z-50 top-0 right-0 left-0 h-[100px] flex bg-black items-center justify-between p-3">
          <img
            className="rounded-[50%] w-[40px] h-[40px]"
            src={image}
            alt="image"
          />
          <img
            className="rounded-[50%] w-[40px] h-[40px]"
            src={image}
            alt="image"
          />
          <PiDotsThreeOutlineVerticalFill color="white" size={30} />
      </div>
       
    </div>
  );
};

export default Header;
