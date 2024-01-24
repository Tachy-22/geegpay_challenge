"use client";

import React from "react";

import KPICard from "./KPICard";

export default function KPIs() {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4  xl:grid-rows-2 w-full   gap-4 h-full">
      {Array.from({ length: 4 }).map((_, i) => {
        return (
          <div className="" key={i}>
            <KPICard />
          </div>
        );
      })}
    </div>
  );
}
