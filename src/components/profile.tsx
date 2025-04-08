import { useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { Menu } from "./Body";
// import { FaLinkedinIn } from "react-icons/fa6";
const Profile = () => {
  const tabs = [
    { name: "Overview" },
    { name: "Portfolio" },
    { name: "Experience" },
    { name: "Media" },
  ];

  const [activeTab, setActiveTab] = useState("Overview");
  const handleActiveTab = (value: string) => {
    setActiveTab(value);
  };
  return (
    <Layout>
      <div className="md:hidden flex fixed top-[80px] pt-5 border-solid border-b-2 border-b-[#1d1d1d] bg-black z-50 left-0 right-0 items-center justify-between px-6">
        {tabs.map(({ name }, index) => {
          return (
            <div
              key={index}
              onClick={() => handleActiveTab(name)}
              className={`text-[80%] text-white px-4 py-2 cursor-pointer ${
                activeTab === name
                  ? "border-solid border-b-2 py-2 border-b-white"
                  : "border-none"
              }`}
            >
              {name}
            </div>
          );
        })}
      </div>
      <div className="md:flex md:left-[300px] top-[97px] absolute left-0 flex bg-black/95 px-6 right-0 md:pt-10 pt-12 pb-20 flex-col gap-3">
        <h1 className="font-semibold text-[30px] text-white">Overview</h1>
        <div className="min-h-screen text-white">
          <div className="bg-[#080808] rounded-xl p-6 mb-8 border border-[#1d1d1d]">
            <div className="flex flex-col md:flex-row md:items-center md:items-center gap-8">
              {/* Profile Image */}
              {/* <div className="w-32 h-32 bg-red-500 rounded-[50%] flex items-center justify-center overflow-hidden"> */}
              <img
                src="/placeholder.svg?height=128&width=128"
                alt="Profile"
                className="w-[100px] h-[100px] opacity-0"
                width={148}
                height={148}
                //   className=""
              />
              <div className="absolute w-24 h-24">
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
                </svg>
              </div>
              {/* </div> */}

              {/* Profile Info */}
              <div className="flex w-full md:flex-col gap-4 md:gap-6 flex-row items-end md:items-start text-center md:text-left">
                <div className="flex flex-col md:gap-0 md:w-full w-[60%] ">
                  <div className="flex items-center justify-between md:justify-between w-[100%] md:w-[35%]">
                    <h2 className="text-3xl md:block hidden font-bold">Mr A</h2>
                    <h2 className="text-2xl whitespace-nowrap md:hidden  font-bold">
                      Mr ABC
                    </h2>
                    <FaCheckCircle className="w-5 h-5 fill-blue-500" />
                  </div>

                  <div className="flex items-start md:items-center justify-start md:justify-start gap-1">
                    <p className="text-gray-300 md:text-base whitespace-nowrap leading-none text-[12px]">
                      Co-Founder & CEO @Vertx
                    </p>
                    <span className="inline-block bg-white w-4 h-4 rounded-sm flex items-center justify-center">
                      <span className="text-black text-xs font-bold">▼</span>
                    </span>
                  </div>

                  <div className="md:px-2 px-1.5 py-1 bg-white md:mt-2 w-[39%] md:w-[11.8%] text-black md:text-xs text-[9px] rounded-[4px]">
                    <span className="">Entrepreneur</span>
                  </div>
                </div>

                <div className="flex md:w-full w-[40%] md:flex-col items-center md:items-start justify-between flex-row">
                  <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4">
                  <img src="/linkedin.png" className="md:w-9 md:h-9 h-7"/>
                    <Link to="#" className="bg-black p-2 rounded">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                          fill="white"
                        />
                      </svg>
                    </Link>
                    <img src="/gmail.png" className="md:w-9 md:h-7 h-5"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-[#080808] rounded-xl p-8 border border-[#1d1d1d]">
              <h3 className="text-2xl font-bold">Founded Companies</h3>

              <div className="mb">
                <span className="text-[60px] font-bold">02</span>
              </div>

              {/* Company 1 */}
              <div className="flex items-stretch gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xl">▼</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 leadinng-none">
                    <h4 className="font-bold">Vertx</h4>
                    <span className="md:px-2 px-1 py-0.5 text-black md:text-[10px] text-[8px] bg-green-600 rounded">
                      CEO
                    </span>
                  </div>
                  <p className="text-[9px] whitespace-nowrap leadinng-none md:text-[11px] text-white">
                    Founded in 2025, in Fintech.
                  </p>
                </div>
                <Link
                  to="#"
                  className="text-xs md:text-[12px] text-white hover:text-white"
                >
                  View Profile
                </Link>
              </div>

              <div className="flex items-start gap-3 pb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xl">▼</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold">Comp 1</h4>
                    <span className="md:px-2 px-1 py-0.5 bg-blue-300 text-black md:text-[10px] text-[8px] rounded">
                      PROPRIETOR
                    </span>
                  </div>
                  <p className="text-[9px] whitespace-nowrap md:text-[11px] text-white">
                    Details/information
                    <br />
                    like acquired /exit/m&a
                  </p>
                </div>
                <Link
                  to="#"
                  className="md:text-[12px] text-xs text-white hover:text-white"
                >
                  View Profile
                </Link>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-[#080808] rounded-xl p-8 border border-[#1d1d1d]">
              <h3 className="text-2xl font-bold">Experience</h3>

              <div className="">
                <span className="text-[60px] font-bold">03</span>
              </div>

              {/* Experience 1 */}
              <div className="flex items-center gap-3 pb-6">
                <div className="w-10 h-10 bg-white rounded"></div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Company 1</h4>
                </div>
                <Link
                  to="#"
                  className="text-xs md:text-[12px] text-white hover:text-white"
                >
                  View Profile
                </Link>
              </div>

              {/* Experience 2 */}
              <div className="flex items-center gap-3 pb-6">
                <div className="w-10 h-10 bg-white rounded"></div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Company 2</h4>
                </div>
                <Link
                  to="#"
                  className="text-xs md:text-[12px] text-white hover:text-white"
                >
                  View Profile
                </Link>
              </div>

              {/* Experience 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded"></div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Company 3</h4>
                </div>
                <Link
                  to="#"
                  className="text-xs md:text-[12px] text-white hover:text-white"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </Layout>
  );
};

export default Profile;
