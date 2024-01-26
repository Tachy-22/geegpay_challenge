// Progress.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import ProgressBar from "./ProgressBar";

export default function Progress() {
  const progressBarData = [
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },

    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },

    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },

    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },

    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },

    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Monthly expenses" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    // Add more data as needed
  ];
  const [visibleItems, setVisibleItems] = useState(10);
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleItems((prev) => prev + 5);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <Card className="py-4 h-full  w-full  border-0 dark:bg-indigo-950">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">Top Platform </h4>
      </CardHeader>
      <CardBody className="py- overflow-y-auto max-h-[27rem]">
        {progressBarData.slice(0, visibleItems).map((item, index) => (
          <div className="" ref={containerRef} key={index}>
            <ProgressBar {...item} />
          </div>
        ))}
      </CardBody>
      <CardFooter>
        <div className="">badge</div>
        <div className="">vs. previous month</div>
      </CardFooter>
    </Card>
  );
}
