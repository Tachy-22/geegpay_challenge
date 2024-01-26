// Progress.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import ProgressBar from "./ProgressBar";

export default function Progress() {
  const progressBarData = [
    { color: "secondary", value: 30, label: "Book Bazaar" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Book Bazaar" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Book Bazaar" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Book Bazaar" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Book Bazaar" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Book Bazaar" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },

    { color: "success", value: 30, label: "Book Bazaar" },
    { color: "primary", value: 50, label: "Yearly savings" },
    { color: "warning", value: 75, label: "Weekly budget" },
    { color: "success", value: 30, label: "Book Bazaar" },
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

  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    console.log("has loaded");
    setHasLoaded(true);
  }, []);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef]);

  return (
    <Card className="py-4 h-full  w-full  border-0 ">
      <CardHeader className="pb-0 pt-2 px-4  items-start w-full flex justify-between ">
        <Skeleton className="rounded-md" isLoaded={hasLoaded}>
          <h4 className="font-bold text-large">Top Platform </h4>
        </Skeleton>
        <p className="text-green-500 ">See more</p>
      </CardHeader>
      <CardBody className="py- overflow-y-auto max-h-[27rem]">
        {progressBarData.slice(0, visibleItems).map((item, index) => (
          <div className="" ref={containerRef} key={index}>
            <ProgressBar {...item} />
          </div>
        ))}
      </CardBody>
    </Card>
  );
}
