import image from "/logo.svg";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

const Header = () => {
  // const path = useLocation();
  const path = window.location.pathname;
  const pathName = path.slice(1).charAt(0).toUpperCase() + path.slice(2);
  return (
    // <Router>
    <div>
      <div className="md:flex hidden flex-col fixed top-0 right-0 h-[97px] z-50 left-[300px] bg-black">
        <div className="flex items-center text-white justify-between border-solid border-b border-b-[#1d1d1d]">
          <p className="px-4 py-3 border-solid">{pathName}</p>
          <div className="flex">
            <p className="py-3 px-7 border-solid border-solid border-l border-l-[#1d1d1d]">Activity</p>
            <p className="py-3 px-7 border-solid border-l border-l-[#1d1d1d]">
              Logout
            </p>
          </div>
        </div>
        <div className="flex items-center text-white p-0 justify-between border-solid border-b border-b-[#1d1d1d]">
            {pathName === "Analytics" && (
              <div className="flex">
                <p className="px-4 py-3 border-solid">Overview</p>
                <p className="px-4 py-3 text-[#555555] border-solid border-l border-l-[#1d1d1d]">
                  Demographics
                </p>
              </div>
            )} 
            {pathName === "Profile" && (
              <div  className="flex">
                <p className="px-4 py-3 border-solid">Overview</p>
                <p className="px-4 py-3 border-solid text-[#555555] border-l border-l-[#1d1d1d]">
                  Portfolio
                </p>
                <p className="px-4 py-3 border-solid text-[#555555] border-l border-l-[#1d1d1d]">Experience</p>
                <p className="px-4 py-3 border-solid text-[#555555] border-l border-l-[#1d1d1d]">
                  Media
                </p>
              </div>
            )}
          
          <p className="py-3 flex items-center justify-center w-[105.5px] border-solid border-l border-l-[#1d1d1d]">
            More
          </p>
        </div>
      </div>
      <div className="md:hidden fixed z-50 top-0 right-0 left-0 h-[100px] flex bg-black items-center justify-between px-3 py-2">
        <img
          className="rounded-[50%] w-[30px] h-[30px]"
          src={image}
          alt="image"
        />
        <img
          className="rounded-[50%] w-[30px] h-[30px]"
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
