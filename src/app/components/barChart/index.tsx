"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ChevronDownIcon } from "lucide-react";
import {
  LineSegment,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

const BarChartUi = () => {
  const monthlyData = [
    { y: 1000, x: "Jan" },
    { y: 2000, x: "Feb" },
    { y: 8000, x: "Mar" },
    { y: 4000, x: "Apr" },
    { y: 5000, x: "May" },
    { y: 6000, x: "Jun" },
    { y: 10000, x: "Jul" },
    { y: 8000, x: "Aug" },
    { y: 9000, x: "Sep" },
    { y: 5000, x: "Oct" },
    { y: 1000, x: "Nov" },
    { y: 2000, x: "Dec" },
  ];

  return (
    <div className=" w-full  flex flex-col rounded-xl bg-white p-4 shadow-xl ">
      <div className="w-[98%]    rounded-xl p-2 flex justify-between items-center">
        <h2 className=" w-full font-semibold ">Sales Trends</h2>
        <div className="flex w-full justify-end items-center gap-2">
          <label htmlFor="" className="w-fit">
            Sort by:
          </label>
          <Dropdown>
            <DropdownTrigger className="hidden sm:flex">
              <Button
                endContent={<ChevronDownIcon className="text-sm " />}
                variant="bordered"
                radius="lg"
              >
                Status
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Table Columns"
              closeOnSelect={false}
            >
              <DropdownItem className="capitalize">Weekly</DropdownItem>
              <DropdownItem className="capitalize">Monthly</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <VictoryChart
        width={800}
        theme={VictoryTheme.material}
        domainPadding={4}
        style={{
          parent: {
            margin: "-2rem 0px 0rem 0rem",
          },
        }}
      >
        <VictoryAxis dependentAxis />
        <VictoryBar
          style={{ data: { fill: "#91f796", stroke: "grey" } }}
          data={monthlyData}
          alignment="start"
          cornerRadius={{ top: 6 }}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
          labels={({ datum }) => `$ ${datum.y}`}
          labelComponent={
            <VictoryTooltip
              constrainToVisibleArea
              flyoutStyle={{
                stroke: "#fffff",
                fill: "black",
                accentColor: "#fffff",
              }}
            />
          }
        />
        <VictoryAxis gridComponent={<div></div>} />
      </VictoryChart>
    </div>
  );
};

export default BarChartUi;
