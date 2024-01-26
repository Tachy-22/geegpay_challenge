import React, { useMemo } from "react";
import { VictoryArea, VictoryAxis, VictoryGroup, VictoryLine } from "victory";

const AreaChartUi = ({
  iconColor,
  index,
}: {
  iconColor: string;
  index: number;
}) => {
  const generateDataPoints = (count: number) => {
    const data = [];
    for (let i = 1; i <= count; i++) {
      data.push({ x: i, y: Math.random() * 40 + 60 });
    }
    return data;
  };
  const dataPoints = useMemo(() => generateDataPoints(50), []);

  const linearGradientColor = useMemo(
    () => (iconColor === "success" ? "#29903a" : "#f31212"),
    [iconColor]
  );

  return (
    <div className=" object-fit -mt-[1rem]">
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#94e1a1" />
            <stop offset="10%" stopColor="#06f54e56" />

            <stop offset="30%" stopColor="#06f58525" />
            <stop offset="50%" stopColor="#06f58511" />

            <stop offset="100%" stopColor="#06f59900" />
          </linearGradient>
        </defs>
      </svg>
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id="myGradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff6060" />
            <stop offset="5%" stopColor="#f5060627" />

            <stop offset="30%" stopColor="#f506064f" />
            <stop offset="50%" stopColor="#f5060611" />

            <stop offset="100%" stopColor="#f5060600" />
          </linearGradient>
        </defs>
      </svg>
      <VictoryGroup colorScale={["tomato", "orange"]}>
        <VictoryArea
          width={800}
          animate={{
            duration: 2000,
            onLoad: { duration: 1500 },
            easing: "bounceInOut",
          }}
          style={{
            data: {
              fill:
                iconColor === "success"
                  ? "url(#myGradient)"
                  : "url(#myGradient4)",
            },
          }}
          data={dataPoints}
        />
        <VictoryLine
          style={{
            data: { stroke: linearGradientColor, strokeWidth: 3 },
          }}
          data={dataPoints}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
            easing: "bounceInOut",
          }}
        />
      </VictoryGroup>
    </div>
  );
};

export default AreaChartUi;
