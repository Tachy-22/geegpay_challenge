"use client";
import {
  Button,
  Card,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Skeleton,
} from "@nextui-org/react";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  EventPropTypeInterface,
  VictoryBarTTargetType,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

// Import statements...

const BarChartUi = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    console.log("has loaded");
    setHasLoaded(true);
  }, []);

  const generateRandomData = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const allData = [];

    for (let year = currentYear - 1; year <= currentYear; year++) {
      for (let month = 0; month < 12; month++) {
        const timestamp = new Date(year, month, 1).toISOString();
        const sales = Math.floor(Math.random() * 50000) + 1000; // Random sales between 1000 and 10000

        allData.push({ timestamp, y: sales });
      }
    }

    return allData;
  };

  const allData = generateRandomData();

  const [barGradient, setBarGradient] = useState("#08fd9f3b");
  const [selectedRange, setSelectedRange] = useState("monthly");
  const [filteredData, setFilteredData] = useState(allData);

  const handleRangeChange = (range: string) => {
    setSelectedRange(range);
    // Filter data based on the selected range
    const startDate = new Date();
    switch (range) {
      case "weekly":
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "monthly":
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case "yearly":
        startDate.setFullYear(startDate.getFullYear() - 1);
        break;
      default:
        break;
    }
    const newData = allData.filter(
      (data) => new Date(data.timestamp) >= startDate
    );
    setFilteredData(newData);
    // Update gradient color based on the selected range
  };

  const events = [
    {
      target: "data",
      eventHandlers: {
        onMouseOver: () => [
          {
            target: "data",
            mutation: () => ({ style: { fill: `url(#myGradient2)` } }),
          },
          {
            target: "labels",
            mutation: () => ({ active: true }),
          },
        ],
        onMouseOut: () => [
          {
            target: "data",
            mutation: () => ({ style: { fill: barGradient } }),
          },
          {
            target: "labels",
            mutation: () => ({ active: false }),
          },
        ],
      },
    },
  ] as EventPropTypeInterface<
    VictoryBarTTargetType,
    string | number | string[] | number[]
  >[];

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getTickValues = () => {
    const tickValues = [];

    switch (selectedRange) {
      case "daily":
        // Assuming that day information is available in your data
        for (let i = 1; i <= 7; i++) {
          tickValues.push(`Day ${i}`);
        }
        break;
      case "weekly":
        // Assuming that week information is available in your data
        for (let i = 1; i <= 4; i++) {
          tickValues.push(`Week ${i}`);
        }
        break;
      case "monthly":
        // Assuming that month information is available in your data
        for (let i = 1; i <= 12; i++) {
          tickValues.push(monthNames[i]);
        }
        break;
      default:
        break;
    }

    return tickValues;
  };

  return (
    <Card className="border-0 shadow-md md:max-h-[50rem] min-h-fit  h-full   ">
      <div className="w-full  max-h-full h-full  flex flex-col rounded-xl  p-4 border-0 shadow-md ">
        <div className=" md:w-[98%]  w-full rounded-xl p-2 flex justify-between items-center  ">
          <Skeleton className="rounded-md" isLoaded={hasLoaded}>
            {" "}
            <h2 className="w-fit min-w-[7rem] font-semibold ">Sales Trends</h2>
          </Skeleton>

          <div className="flex w-full justify-end items-center gap-2">
            <Skeleton className="rounded-md" isLoaded={hasLoaded}>
              <label htmlFor="" className="w-fit">
                Sort by:
              </label>
            </Skeleton>

            <Dropdown
              classNames={{
                base: " relative", // change arrow background
                content: "p-0  bg-background",
              }}
            >
              <DropdownTrigger className="flex  z-30 ">
                <Button
                  endContent={<ChevronDownIcon className="text-sm" />}
                  variant="bordered"
                  radius="lg"
                >
                  {selectedRange.charAt(0).toUpperCase() +
                    selectedRange.slice(1)}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                className="  rounded-xl  "
              >
                <DropdownItem onClick={() => handleRangeChange("daily")}>
                  Daily
                </DropdownItem>
                <DropdownItem onClick={() => handleRangeChange("weekly")}>
                  Weekly
                </DropdownItem>
                <DropdownItem onClick={() => handleRangeChange("monthly")}>
                  Monthly
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="myGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#05c967c5" />

              <stop offset="95%" stopColor="#34eea733" />
              <stop offset="100%" stopColor="#08fd9f3b" />
            </linearGradient>
          </defs>
        </svg>

        <Skeleton
          isLoaded={hasLoaded}
          className={` ${
            hasLoaded ? "hidden" : ""
          } rounded-xl md:max-h-[38rem] max-h-[30rem] h-full w-full "`}
        />

        <div
          className={` ${
            hasLoaded ? "" : "hidden"
          } overflow-x-auto md:overflow-hidden  w-full max-h-[30rem]  lg:-mt-[3rem]    h-full  -mt-[4rem] `}
        >
          {" "}
          <VictoryChart
            width={1060}
            theme={VictoryTheme.material}
            domainPadding={20}
            style={{
              parent: {
                margin: "0rem 0px 0rem 1.5rem",
                minWidth: "40rem",
                minHeight: "20rem",
                height: "100%",
              },
            }}
          >
            <VictoryAxis
              dependentAxis
              animate={{
                duration: 2000,
                easing: "bounce",
              }}
              axisComponent={<></>}
            />
            <VictoryBar
              barWidth={32}
              name="bar"
              style={{
                data: { fill: `${barGradient}` },
              }}
              data={filteredData}
              cornerRadius={{ top: 12 }}
              animate={{
                duration: 2000,
                easing: "bounce",

                onLoad: { duration: 1000 },
              }}
              labels={({ datum }) => `$ ${datum.y}`}
              labelComponent={
                <VictoryTooltip
                  constrainToVisibleArea
                  flyoutStyle={{
                    stroke: "white",
                    fill: "black",
                    accentColor: "white",
                  }}
                  style={{
                    fill: "white",
                  }}
                />
              }
              events={events}
            />
            <VictoryAxis
              gridComponent={<div></div>}
              animate={{
                duration: 2000,
                easing: "bounce",
              }}
              tickValues={getTickValues()}
            />
          </VictoryChart>
        </div>
      </div>
    </Card>
  );
};

export default BarChartUi;
