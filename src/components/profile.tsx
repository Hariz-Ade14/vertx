import {useState} from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { CheckCircle} from "lucide-react";
import { Menu } from "./Body";
import { FaLinkedinIn } from "react-icons/fa6";
const Profile = () => {
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
    <Layout>
      <div className="md:hidden flex fixed top-[80px] pt-5 border-solid border-b-2 border-b-[#1d1d1d] bg-black z-50 left-0 right-0 items-center justify-between px-6">
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
      <div className="md:flex md:left-[300px] top-[113px] absolute left-0 flex bg-black/95 px-10 right-0 pt-10 pb-20 flex-col gap-3">
        <h1 className="font-semibold text-[30px] text-white">Overview</h1>
        <div className="min-h-screen text-white">
          <div className="bg-[#080808] rounded-xl p-6 mb-8 border border-[#1d1d1d]">
            <div className="flex flex-col md:flex-row md:items-center md:items-center gap-8">
              {/* Profile Image */}
              <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=128&width=128"
                  alt="Profile"
                  width={128}
                  height={128}
                  className="opacity-0"
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
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-centerjustify-start md:justify-start gap-2 mb-1">
                  <h2 className="text-3xl  font-bold">Mr A</h2>
                  <CheckCircle className="w-5 h-5 text-[#579560] fill-[#579560]" />
                </div>

                <div className="flex items-start md:items-center justify-start md:justify-start gap-1 mb-4">
                  <p className="text-gray-300">Co-Founder & CEO @Vertx</p>
                  <span className="inline-block bg-white w-4 h-4 rounded-sm flex items-center justify-center">
                    <span className="text-black text-xs font-bold">▼</span>
                  </span>
                </div>

                <div className="flex md:flex-col items-center md:items-start justify-between flex-row">
                  <div className="md:mb-6">
                    <span className="px-1 py-1 bg-white text-black text-xs rounded-[4px]">
                      Entrepreneur
                    </span>
                  </div>

                  <div className="flex items-center justify-center md:justify-start gap-4">
                    {/* <Link to="#" className="rounded"> */}
                    <FaLinkedinIn size={30} className="bg-[#0077b5] p-1 rounded-[5px]"/>
                    {/* </Link> */}
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
                      <img src="/gmail.png" className="w-9 h-8"/>
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
              <div className="flex items-start gap-3 pb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xl">▼</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold">Vertx</h4>
                    <span className="px-2 py-0.5 bg-green-400 text-black text-xs rounded">
                      CEO
                    </span>
                  </div>
                  <p className="text-sm text-white">
                    Founded in 2025, in{" "}
                    <span className="font-medium">Fintech</span>.
                  </p>
                </div>
                <Link to="#" className="text-sm text-white hover:text-white">
                  View Profile
                </Link>
              </div>

              {/* Company 2 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xl">▼</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold">Company</h4>
                    <span className="px-2 py-0.5 bg-blue-300 text-black text-xs rounded">
                      PROPRIETOR
                    </span>
                  </div>
                  <p className="text-sm text-white">
                    Details/information
                    <br />
                    like acquired /exit/m&a
                  </p>
                </div>
                <Link to="#" className="text-sm text-white hover:text-white">
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
                  className="text-[10px] text-white hover:text-white"
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
                  className="text-[10px] text-white hover:text-white"
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
                  className="text-[10px] text-white hover:text-white"
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
