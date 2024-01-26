"use client";
// Nav.tsx
import React, { useState, useEffect } from "react";
import {
  Users,
  LayoutGrid,
  SettingsIcon,
  Info,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
  LucideIcon,
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Logo from "../../../public/Vector.svg";
import {
  Box,
  DiscountShape,
  Element3,
  Profile2User,
  TrendUp,
  InfoCircle,
  ArrowCircleRight2,
  ArrowCircleLeft2,
  Setting2,
} from "iconsax-react";

interface NavIcon {
  id: number;
  icon: React.ReactElement;
  label: string;
}

const navIcons: NavIcon[] = [
  { id: 1, icon: <Element3 />, label: "Layout" },
  { id: 2, icon: <TrendUp />, label: "Info" },
  { id: 3, icon: <Profile2User />, label: "Members" },
  { id: 4, icon: <Box />, label: "Settings" },
  { id: 5, icon: <DiscountShape />, label: "Discount" },
  { id: 6, icon: <InfoCircle />, label: "Info" },

  // Add more icons as needed
];
const navIcons2: NavIcon[] = [
  { id: 7, icon: <ArrowCircleRight2 />, label: "Layout" },
  { id: 8, icon: <Setting2 />, label: "Info" },
  { id: 9, icon: <ArrowCircleLeft2 />, label: "Members" },

  // Add more icons as needed
];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverStates, setHoverStates] = useState(navIcons.map(() => false));

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
  };

  const handleIconHover = (index: number) => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleIconLeave = (index: number) => {
    setHoverStates((prev) => {
      const newStates = [...prev];
      newStates[index] = false;
      return newStates;
    });
  };

  return (
    <div
      className={` top-0 min-h-screen shadow-none shadow-0 rounded-0 rounded-none duration-1000  pt-[1rem] left-0 transition-all    easein overflow-hidden  md:gap-[1.5rem] gap-[1rem] z-50    border-r  flex flex-col justify-start bg-stone-100/80 dark:bg-stone-900 dark:border-stone-600  ${
        isOpen
          ? "w-full md:max-w-[8rem] max-w-[3rem] md:items-start items-center md:min-w-[10rem] min-w-[3.5rem] "
          : "items-center w-fit md:max-w-[4.5rem] max-w-[3rem] min-w-[3.5rem]"
      }`}
    >
      <Image
        src={Logo}
        alt="logo"
        width={100}
        height={150}
        className="rounded-xl overflow-hidden w-[3rem] h-[3rem]   min-h-[2.5rem] min-w-[2.5rem] mx-auto"
      />

      <div className="flex flex-col justify-between h-full  overflow-y-auto overflow-x-hidden">
        
        <div
          className="   flex flex-col w-full"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {navIcons.map(({ id, icon, label }) => (
            <div
              key={id}
              className={` transition-all  duration-1000 flex items-center     hover:backdrop-brightness-95  lg:p-3 p-2 py-3    h-fit cursor-pointer border-r-4 hover:border-slate-500 border-transparent md:p-4   ${
                isOpen
                  ? "gap-3 w-full md:justify-start justify-center"
                  : "gap-0 w-full justify-center"
              }`}
              onMouseEnter={() => handleIconHover(id)}
              onMouseLeave={() => handleIconLeave(id)}
              onClick={() => handleIconHover(id)}
            >
              <div className="w-fit h-full flex transition-all duration-1000 justify-center items-center ">
                {icon &&
                  React.cloneElement(icon, {
                    size: "28",
                    color: hoverStates[id] ? "#514b4b" : "#9f9494",
                    variant: hoverStates[id] ? "Bulk" : "Broken",
                  })}
              </div>
              <span
                className={`  transition-all   ${
                  isOpen
                    ? "opacity-1  w-[5rem] md:block hidden "
                    : "opacity-0 w-0 min-w-[0rem]   scale-[60%] md:scale-100 md:block hidden "
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
        <button
          className={` transition-all  flex items-center duration-1000  md:justify-start justify-center hover:backdrop-brightness-95  lg:p-3  py-3    h-fit cursor-pointer hover:border-r-4 hover:border-slate-500 md:p-4 p-2  ${
            isOpen ? "gap-3 w-full" : "gap-0 w-full "
          }`}
          onClick={handleToggle}
        >
          <div
            className={`" w-fit h-full text-gray-400  flex justify-center items-center text-grey-300 ${
              isOpen ? "" : "mx-auto"
            }`}
          >
            {isOpen ? (
              <ArrowLeftCircle size={24} />
            ) : (
              <ArrowRightCircle size={24} />
            )}
          </div>
          <span
            className={`  transition-all  text-start    ${
              isOpen
                ? "opacity-1 w-fit md:block hidden "
                : "opacity-0 w-0  md:block hidden  "
            }`}
          >
            Close
          </span>
        </button>
        <div
          style={{ transitionDuration: "0.1s" }}
          className={`px-1 ${
            isOpen ? "md:rotate-0" : " rotate-90    "
          } w-full rotate-90  translate-y-[2rem]`}
        >
          <ThemeToggle />
        </div>
        <div className="flex flex-col w-full h-full justify-center gap-2  ">
          {navIcons2.map(({ id, icon, label }) => (
            <div
              key={id}
              className={` transition-all  duration-1000 flex items-center     hover:backdrop-brightness-95  lg:p-3 p-2 py-3    h-fit cursor-pointer border-r-4 hover:border-slate-500 border-transparent md:p-4   ${
                isOpen
                  ? "gap-3 w-full md:justify-start justify-center"
                  : "gap-0 w-full justify-center"
              }`}
              onMouseEnter={() => handleIconHover(id)}
              onMouseLeave={() => handleIconLeave(id)}
            >
              <div className="w-fit h-full flex transition-all duration-1000 justify-center items-center ">
                {icon &&
                  React.cloneElement(icon, {
                    size: "28",
                    color: hoverStates[id] ? "#514b4b" : "#9f9494",
                    variant: hoverStates[id] ? "Bulk" : "Broken",
                  })}
              </div>
              <span
                className={`  transition-all   ${
                  isOpen
                    ? "opacity-1  w-[5rem] md:block hidden "
                    : "opacity-0 w-0 min-w-[0rem]   scale-[60%] md:scale-100 md:block hidden "
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
