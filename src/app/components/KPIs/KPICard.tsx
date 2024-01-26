"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  CardFooter,
  Chip,
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
  return (
    <Card className="h-full w-full max-w-[20rem] min-w-[20rem] lg:min-w-full mx-auto border-0 shadow-md flex  ">
      <CardHeader className="flex  justify-between w-full py-0">
        <div className="border rounded-full p-1">
          {icon &&
            React.cloneElement(icon, {
              size: "28",
              color: "#34caa5",
              variant: "Bulk",
            })}
        </div>
        <div className="w-[40%] flex justify-end">
          <AreaChartUi iconColor={iconColor as string} index={0} />
        </div>
      </CardHeader>
      <CardBody className="flex-col justify-center py-2">
        <div className="text-gray-400 text-semibold text-lg">{title}</div>
        <div className="text-extrabold tracking-wide text-2xl">{value}</div>
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
