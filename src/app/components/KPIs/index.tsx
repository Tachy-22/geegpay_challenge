"use client";

import React from "react";
import KPICard from "./KPICard";
import { BoxAdd, Coin1, I3DRotate, ShoppingCart } from "iconsax-react";
export default function KPIs() {
  const kpiData = [
    {
      icon: <BoxAdd />,
      iconColor: "success",
      title: "Card Title 1",
      value: 350,
      trendPercentage: "23.5%",
    },
    {
      icon: <I3DRotate />,
      iconColor: "danger",
      title: "Card Title 2",
      value: 500,
      trendPercentage: "15.2%",
    },
    {
      icon: <ShoppingCart />,
      iconColor: "danger",
      title: "Card Title 1",
      value: "$120,000",
      trendPercentage: "23.5%",
    },
    {
      icon: <Coin1 />,
      iconColor: "success",
      title: "Card Title 2",
      value: "$100,000",
      trendPercentage: "15.2%",
    },
    // Add more objects as needed
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="xl:grid hidden xl:grid-cols-2  grid-cols-4 xl:grid-rows-2 w-full gap-6 h-full pb-3 xl:pb-0 ">
        {kpiData.map((kpi, index) => (
          <div className="" key={index}>
            <KPICard
              icon={kpi.icon}
              iconColor={
                kpi.iconColor as
                  | "success"
                  | "danger"
                  | "warning"
                  | "default"
                  | "primary"
                  | "secondary"
                  | undefined
              }
              title={kpi.title}
              value={kpi.value}
              trendPercentage={kpi.trendPercentage}
            />
          </div>
        ))}
      </div>
      <div className="w-full overflow-x-auto">
        <ul
          style={{ transitionDuration: "3000ms" }}
          className=" xl:hidden flex 2 w-full gap-6 carousel-primary   transition-transform duration-[300ms] flex w-fit py-[1.5rem]  group gap-2 lg;gap-4 "
        >
          {kpiData.map((kpi, index) => (
            <div className="" key={index}>
              <KPICard
                icon={kpi.icon}
                iconColor={
                  kpi.iconColor as
                    | "success"
                    | "danger"
                    | "warning"
                    | "default"
                    | "primary"
                    | "secondary"
                    | undefined
                }
                title={kpi.title}
                value={kpi.value}
                trendPercentage={kpi.trendPercentage}
              />
            </div>
          ))}
          {kpiData.map((kpi, index) => (
            <div className="" key={index}>
              <KPICard
                icon={kpi.icon}
                iconColor={
                  kpi.iconColor as
                    | "success"
                    | "danger"
                    | "warning"
                    | "default"
                    | "primary"
                    | "secondary"
                    | undefined
                }
                title={kpi.title}
                value={kpi.value}
                trendPercentage={kpi.trendPercentage}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
