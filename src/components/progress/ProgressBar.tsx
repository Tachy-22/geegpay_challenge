"use client";
// ProgressBar.tsx
import React from "react";
import { Progress } from "@nextui-org/react";

interface ProgressBarProps {
  color: string;
  value: number;
  label: string;
}

type color =
  | "danger"
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | undefined;

const ProgressBar: React.FC<ProgressBarProps> = ({ color, value, label }) => (
  <div className="flex flex-col">
    <Progress
      label={<h2 className="py-2 font-semibold">{label}</h2>}
      aria-label="Downloading..."
      size="md"
      value={value}
      valueLabel={<p className="py-2"></p>}
      color={color as color}
      showValueLabel={true}
      className="w-full"
    />
    <div className="w-full flex justify-between py-4">
      <span className="">${value * 7},000,000</span>
      <span className="">+ {value}%</span>
    </div>
  </div>
);

export default ProgressBar;
