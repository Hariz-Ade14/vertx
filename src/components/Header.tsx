import image from "../../public/portfolio-pic.jpg";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

const Header = () => {
  // const path = useLocation();
  const path = window.location.pathname;
  const pathName = path.slice(1);
  return (
    // <Router>
    <div>
      <div className="md:flex hidden flex-col fixed top-0 right-0 h-[113px] z-50 left-[300px] bg-black">
        <div className="flex items-center text-white justify-between border-solid border-b border-b-[#1d1d1d]">
          <p className="p-4 border-solid">{pathName}</p>
          <div className="flex">
            <p className="py-4 px-7 border-solid">Activity</p>
            <p className="py-4 px-7 border-solid border-l border-l-[#1d1d1d]">
              Logout
            </p>
          </div>
        </div>
        <div className="flex items-center text-white justify-between border-solid border-b border-b-[#1d1d1d]">
            {pathName === "Analytics" && (
              <div className="flex">
                <p className="p-4 border-solid">Overview</p>
                <p className="p-4 border-solid border-l border-l-[#1d1d1d]">
                  Demographics
                </p>
              </div>
            )}
            {pathName === "Profile" && (
              <div  className="flex">
                <p className="p-4 border-solid">Overview</p>
                <p className="p-4 border-solid border-l border-l-[#1d1d1d]">
                  Portfolio
                </p>
                <p className="p-4 border-solid border-l border-l-[#1d1d1d]">Experience</p>
                <p className="p-4 border-solid border-l border-l-[#1d1d1d]">
                  Media
                </p>
              </div>
            )}
          
          <p className="py-4 flex items-center justify-center w-[106px] border-solid border-l border-l-[#1d1d1d]">
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
    // </Router>
  );
};

export default Header;
