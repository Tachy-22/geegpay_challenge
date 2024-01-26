"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Chip,
  Skeleton,
} from "@nextui-org/react";
import { ArrowDownAz, Box, TrendingDown } from "lucide-react";
import AreaChartUi from "../areaChart";
import { ShoppingCart } from "iconsax-react";

// Import statements...

// Import statements...

interface KPICardProps {
  icon: React.ReactElement;
  iconColor:
    | "success"
    | "danger"
    | "warning"
    | "default"
    | "primary"
    | "secondary"
    | undefined;
  title: string;
  value: string | number;
  trendPercentage: string;
}

const KPICard: React.FC<KPICardProps> = ({
  icon,
  iconColor,
  title,
  value,
  trendPercentage,
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    console.log("has loaded");
    setHasLoaded(true);
  }, []);
  return (
    <Card className="h-full w-full max-w-[20rem] min-w-[20rem] lg:min-w-full mx-auto border-0 shadow-md flex  ">
      <CardHeader className="flex  justify-between items-center  w-full py-2">
        <div className=" border-gray-400 rounded-full p-1 border ">
          {icon &&
            React.cloneElement(icon, {
              size: "28",
              color: "#34caa5",
              variant: "Bulk",
            })}
        </div>

        <div className="w-[60%] flex justify-end  h-[3.4rem] overflow-hidden rounded-md">
          <Skeleton isLoaded={hasLoaded} className="rounded-md  justify-end  w-full  p-0">
            <AreaChartUi iconColor={iconColor as string} index={0} />
          </Skeleton>
        </div>
      </CardHeader>
      <CardBody className="flex-col justify-center py-2 gap-2">
        <Skeleton isLoaded={hasLoaded} className="rounded-md  ">
          <div className="text-gray-400 text-semibold text-lg w-fit">
            {title}
          </div>
        </Skeleton>
        <Skeleton isLoaded={hasLoaded} className="rounded-md ">
          <div className="text-extrabold tracking-wide text-2xl w-fit">
            {value}
          </div>
        </Skeleton>
      </CardBody>
      <CardFooter className="flex justify-between gap-1">
        <Chip
          startContent={<TrendingDown size={18} />}
          variant="flat"
          color={iconColor}
          className={`${
            iconColor === "success" ? "text-[#34caa5]" : "text-red-400"
          } xl:text-sm text-base`}
        >
          {trendPercentage}
        </Chip>
        <p className="xl:text-sm text-[0.7rem]">vs. previous month</p>
      </CardFooter>
    </Card>
  );
};

export default KPICard;
