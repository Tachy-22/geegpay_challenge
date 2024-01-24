"use clientg";
import React, { useMemo } from "react";
import { VictoryArea, VictoryAxis, VictoryGroup, VictoryLine } from "victory";

const AreaChartUi = () => {
  const generateDataPoints = (count: number) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({ x: i, y: Math.random() * 50 + 60 }); // y values between 100 and 150
    }
    return data;
  };
  const dataPoints = useMemo(() => generateDataPoints(40), []);
  return (
    <div className="w-full h-full">
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff9494" />
            <stop offset="10%" stopColor="#ff9494" />

            <stop offset="30%" stopColor="#ffc0c0" />
            <stop offset="100%" stopColor="rgba(255, 240, 240, 0)" />
          </linearGradient>
        </defs>
      </svg>
      <VictoryGroup>
        <VictoryArea
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          style={{
            data: { fill: "url(#myGradient)" },
          }}
          data={dataPoints}
        />
        <VictoryLine
          style={{
            data: { stroke: "red", strokeWidth: 2 },
          }}
          data={dataPoints}
        />
      </VictoryGroup>
    </div>
  );
};

export default AreaChartUi;

// import {
//   ResponsiveContainer,
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
// } from "recharts";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const AreaChartUi = () => {
//   return (
//     <div className="border w-[4rem] h-[2rem]">
//       <ResponsiveContainer width="100%" height="100%">
//         <AreaChart width={100} height={60} data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis dataKey="uv" />
//           <Tooltip />
//           <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default AreaChartUi;
