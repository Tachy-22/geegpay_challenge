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

export default function KPICard() {
  return (
    <Card className=" h-full w-full max-w-[20rem] mx-auto  border-0 shadow-md flex">
      <CardHeader className="flex justify-between w-full ">
        <div className=" border rounded-full p-1">
          <Box />
        </div>
        <div className="w-[70%] flex justify-end">
          <AreaChartUi />
        </div>
      </CardHeader>
      <CardBody className=" flex-col justify-center py-2">
        {" "}
        <div className="text-gray-400 text-semibold">Card Title</div>
        <div className="text-extrabold tracking-wide text-xl">350</div>
      </CardBody>
      <CardFooter className="flex  justify-between gap-1">
        <Chip
          startContent={<TrendingDown size={18} />}
          variant="flat"
          color="danger"
          className="text-white"
        >
          23.5%
        </Chip>
        <p className="text-sm">vs. previous month</p>
      </CardFooter>
    </Card>
  );
}
