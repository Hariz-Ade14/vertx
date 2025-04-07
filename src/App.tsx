import "./App.css";
import Layout from "./components/Layout";
import { IoMdArrowDropdown, IoMdAdd } from "react-icons/io";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";
import { IoIosArrowRoundForward } from "react-icons/io";
import { styled } from "@mui/material/styles";

// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// import GoogleMapReact from "google-map-react";
import Body from "./components/Body";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

// const AnyReactComponent = ({
//   lat,
//   lng,
//   text,
// }: {
//   lat: number;
//   lng: number;
//   text: string;
// }) => <div>{text}</div>;

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

function App() {
  // const geoUrl =
  //   "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627,
  //   },
  //   zoom: 11,
  // };

  return (
    <Layout>
      <div className="left-[300px] hidden top-[113px] absolute md:flex flex-col gap-3 bg-black/95 px-10 right-0 py-5">
        <h1 className="font-semibold text-[30px] text-white">Overview</h1>

        <div className="flex gap-4 items-stretch ">
          <div className="flex items-center gap-1 h-[310px] bg-black px-4 py-5 rounded-[10px] w-[65%] border border-solid border-[#1D1D1D]">
            <div className="w-[100%] flex flex-col gap rounded-[20px]">
              <div className="flex gap-2">
                <div className="rounded-[20px] flex items-center w-[140px] border-solid border-gray-700 justify-between text-white text-[15px] px-3 py-1 border">
                  Visitors
                  <IoMdArrowDropdown />
                </div>
                <div className="rounded-[20px]  flex items-center gap-3 border-solid border-gray-700 justify-between text-white text-[12px] px-3 py-1 border">
                  Last 30 days
                  <IoMdArrowDropdown />
                </div>
                <div className="rounded-[20px] flex items-center gap-1 border-2 border-dashed border-gray-700 justify-between text-white text-[12px] px-3 py-1 border">
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
            
              <Chart width={500} height={200} />
            </div>
          </div>
          <div className="flex flex-col h-[310px] gap-3 w-[40%] px-5 py-3 bg-black rounded-[10px] border border-solid border-[#1D1D1D]">
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
            <div className="text-white flex  flex-col leading-0">
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
            <hr className="bg-gray-700" />
            <div className="flex items-center gap-3 self-end mt-3">
              <span className="text-white text-[12px]">
                View detailed insights
              </span>
              <IoIosArrowRoundForward color="white" size={20} />
            </div>
          </div>
        </div>

        <div className="bg-black w-[100%] items-end justify-between gap-4 p-5 border border-solid border-[#1D1D1D] flex gap-4 rounded-[20px] gap-3">
          <div className="flex flex-col w-[65%]">
            <h1 className="text-[25px] font-light text-white">Demographics</h1>
            <Chart width={600} height={200} />
          </div>
          <div className="flex flex-col w-[30%] gap-3">
            <ProgressBar color="#4834D4" index={0} country="India" value={40} />
            <ProgressBar color="orange" index={1} country="USA" value={25} />
            <ProgressBar
              color="yellow"
              index={2}
              country="CANADAA"
              value={10}
            />
            <ProgressBar color="green" index={3} country="UAE" value={7} />
          </div>
        </div>
      </div>

      <Body />
    </Layout>
  );
}

export default App;
