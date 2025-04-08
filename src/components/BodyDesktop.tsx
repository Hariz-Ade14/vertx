import Layout from "./Layout";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";
import { IoIosArrowRoundForward } from "react-icons/io";
import { styled } from "@mui/material/styles";
import Body from "./Body";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import map from "/map.png";
export const Chart = ({ width, height }: { width: number; height: number }) => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9000, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Mar 1",
    "Mar 5",
    "Mar 10",
    "Mar 15",
    "Mar 20",
    "Mar 25",
    "Mar 30",
  ];
  return (
    <div className="md:w-[100%] w-[60%] bg-red">
      <LineChart
        width={width}
        height={height}
        series={[
          { data: pData, label: "pv", id: "pvId" },
          { data: uData, label: "uv", id: "uvId" },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: xLabels,
            tickLabelStyle: {
              fill: "white",
            },
            // axisLine: { stroke: "white" },
            // gridLine: { stroke: "white" },
          },
        ]}
        yAxis={[
          {
            data: xLabels,
            tickLabelStyle: {
              fill: "white",
              stroke: "white",

              // This changes the vertical axis text color
            },
          },
        ]}
        sx={{
          // Existing styles
          [`.${lineElementClasses.root}, .${markElementClasses.root}`]: {
            strokeWidth: 1,
            // stroke: "white",
          },
          ".MuiLineElement-series-pvId": {
            strokeDasharray: "5 5",
          },
          ".MuiLineElement-series-uvId": {
            strokeDasharray: "3 4 5 2",
          },
          [`.${markElementClasses.root}:not(.${markElementClasses.highlighted})`]:
            {
              fill: "white",
            },
          [`& .${markElementClasses.highlighted}`]: {
            // stroke: "none",
            stroke: "white",
          },

          // New styles for text colors
          "& .MuiChartsAxis-tickLabel": {
            fill: "white",
          },
          "& .MuiChartsLegend-label": {
            fill: "white",
          },
          "& .MuiChartsLegend-series-pvId .MuiChartsLegend-label": {
            fill: "white",
          },
          "& .MuiChartsLegend-series-uvId .MuiChartsLegend-label": {
            fill: "white",
          },
        }}
      />
    </div>
  );
};

export const ProgressBar = ({
  color,
  index,
  country,
  value,
}: {
  color: string;
  index: number;
  country: string;
  value: number;
}) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[900],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[900],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: color,
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));

  const flags = ["/indian.png", "/usa.png", "/canada.png", "/usa.png"];
  return (
    <div className="flex gap-2 items-stretch">
      <img src={flags[index]} className="w-[60px] h-[40px]" />
      <div className="flex w-full p-0 flex-col gap-1">
        <div className="flex m-0 items-center text-white justify-between">
          <span className="m-0 leading-none">{country}</span>
          <span>{value}%</span>
        </div>
        <BorderLinearProgress variant="determinate" value={value} />
      </div>
    </div>
  );
};

function BodyDesktop() {
  return (
    <Layout>
      <div className="md:flex flex-col gap-3 left-[300px] top-[97px] absolute bottom-0 hidden bg-black/95 px-10 right-0 h-[800px] overflow-y-roll pt-5">
        <h1 className="font-semibold text-[30px] text-white">Overview</h1>

        <div className="flex gap-4 items-stretch ">
          <div className="flex items-center gap-1 h-[310px] bg-black px-4 py-5 rounded-[10px] w-[66%] border border-solid border-[#1D1D1D]">
            <div className="w-[100%] flex flex-col gap rounded-[20px]">
              <div className="flex gap-2 mt-3">
                <div className="rounded-[20px] flex items-center w-[140px] border-solid border-[#1D1D1D] justify-between text-white text-[15px] px-3 py-1 border">
                  Visitors
                  <IoMdArrowDropdown />
                </div>
                <div className="rounded-[20px]  flex items-center gap-3 border-solid border-[#1D1D1D] justify-between text-white text-[12px] px-3 py-1 border">
                  Last 30 days
                  <IoMdArrowDropdown />
                </div>
                <div className="rounded-[20px] flex items-center gap-1 border-2 border-dashed border-[#1D1D1D] justify-between text-white text-[12px] px-3 py-1 border">
                  <IoMdAdd />
                  Add
                </div>
              </div>
              <div className="flex items-stretch gap-2">
                <h1 className="text-white font-bold text-[40px]">13.49k</h1>
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-green-700 text-[13px]">+469%</span>
                  <span className="text-white text-[13px] text-gray-500">
                    (897)
                  </span>
                </div>
              </div>
              <Chart width={550} height={200} />
            </div>
          </div>
          <div className="flex flex-col h-[310px] gap-3 w-[34%] px-5 py-3 bg-black rounded-[10px] border border-solid border-[#1D1D1D]">
            <h1 className="font-semibold text-[20px] text-white">Insights</h1>
            <div className="text-white flex flex-col leading-0">
              <h1 className="text-[18px]">Founder</h1>
              <div className="flex items-stretch gap-3">
                <h1 className="text-white font-bold text-[40px]">7.4k</h1>
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-green-700 text-[13px]">+000%</span>
                  <span className="text-white text-[13px] text-gray-500">
                    (000)
                  </span>
                </div>
              </div>
            </div>
            <div className="text-white flex border-b-2 pb-2 border-solid border-b-[#1D1D1D] flex-col leading-0">
              <h1 className="text-[18px]">Investors</h1>
              <div className="flex items-stretch gap-3">
                <h1 className="text-white font-bold text-[40px]">6.09k</h1>
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-green-700 text-[13px]">+000%</span>
                  <span className="text-white text-[13px] text-gray-500">
                    (000)
                  </span>
                </div>
              </div>
            </div>
            {/* <hr className="h-px w-full bg-gray-400 border-1" /> */}
            <div className="flex items-center gap-3 self-end mt-3">
              <span className="text-white text-[12px]">
                View detailed insights
              </span>
              <IoIosArrowRoundForward color="white" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-black w-[100%] items-start justify-between gap-4 p-5 border border-solid border-[#1D1D1D] flex gap-4 rounded-[20px] gap-3">
          <div className="flex flex-col w-[65%]">
            <h1 className="text-[25px] font-light text-white m-0">
              Demographics
            </h1>
            <div className="relative">
              <div className="rounded-[20px] absolute top-2 left-2 flex items-center w-[140px] border-solid border-gray-700 justify-between text-white text-[13px] px-3 py-1 border">
                Visitors
                <IoMdArrowDropdown />
              </div>
              <div className="flex absolute py-1 px-3 bottom-4 left-2 items-center justify-between gap-7 border border-solid border-gray-700 rounded-[20px]">
                <div className="flex gap-1 items-center">
                  <div className="bg-[#4834D4] h-2.5 w-2.5 rounded-[50%]"></div>
                  <span className="text-white text-[10px] ">India</span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="bg-orange-500 h-[10px] w-[10px] rounded-[50%]"></div>
                  <span className="text-white text-[10px] ">USA</span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="bg-yellow-500 h-2.5 w-2.5 rounded-[50%]"></div>
                  <span className="text-white text-[10px] ">CANADA</span>
                </div>
                <div className="flex gap-1 items-center">
                  <div className="bg-green-500 h-2.5 w-2.5 rounded-[50%]"></div>
                  <span className="text-white text-[10px] ">UAE</span>
                </div>
              </div>
              <img src={map} alt="map" className="h-[250px] w-full" />
            </div>
          </div>
          <div className="flex flex-col w-[30%] gap-3 pt-5">
            <div className="flex flex-col w-full border-b-2 pb-5 border-solid border-b-[#1D1D1D] gap-3">
              <ProgressBar
                color="#4834D4"
                index={0}
                country="India"
                value={40}
              />
              <ProgressBar color="orange" index={1} country="USA" value={25} />
              <ProgressBar
                color="yellow"
                index={2}
                country="CANADAA"
                value={10}
              />
              <ProgressBar color="green" index={3} country="UAE" value={7} />
            </div>
            {/* <hr className="h-px w-full mx-auto my-3 bg-gray-400 border-0"/> */}
            <div className="flex items-center gap-3 mt-4 self-end ">
              <span className="text-white text-[12px]">
                View detailed insights
              </span>
              <IoIosArrowRoundForward color="white" size={20} />
            </div>
          </div>
        </div>
      </div>

      <Body />
    </Layout>
  );
}

export default BodyDesktop;
