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
import Logo from "../../../../public/log.png";
import {
  Box,
  DiscountShape,
  Element3,
  Icon,
  Profile2User,
  TrendUp,
} from "iconsax-react";
import { Card } from "@nextui-org/react";

interface NavIcon {
  id: number;
  icon: React.ReactElement;
  label: string;
}

const navIcons: NavIcon[] = [
  { id: 2, icon: <Element3 />, label: "Layout" },
  { id: 3, icon: <Box />, label: "Settings" },
  { id: 4, icon: <Profile2User />, label: "Info" },
  { id: 5, icon: <DiscountShape />, label: "Info" },
  { id: 6, icon: <TrendUp />, label: "Info" },

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

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsOpen(screenWidth >= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    // Initial check on mount
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Card
      style={{ transitionDuration: "1s" }}
      className={` top-0 h-screen sdahow-none rounded-0 rounded-none  left-0 transition-all min-w-[3rem]  easein overflow-hidden  md:gap-[1.5rem] gap-[1rem] z-50    border-r  flex flex-col justify-start dark:bg-slate-950 dark:border-gray-500  ${
        isOpen
          ? "w-full md:max-w-[8rem] max-w-[4rem] md:items-start items-center"
          : "items-center w-fit md:max-w-[4.5rem] max-w-[3rem] "
      }`}
    >
      <Image
        src={Logo}
        alt="logo"
        width={100}
        height={150}
        className="rounded-md md:p-4 p-2"
      />
      <div
        className=" md:gap-[1.5rem] gap-[1rem] flex flex-col w-full"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {navIcons.map(({ id, icon, label }) => (
          <div
            style={{ transitionDuration: "2s" }}
            key={id}
            className={` transition-transform  flex items-center     hover:backdrop-brightness-95  lg:p-3 p-2 py-3    h-fit cursor-pointer hover:border-r-2 hover:border-slate-500 md:p-4 p-2  ${
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
              className={`  transition-transform   ${
                isOpen
                  ? "opacity-1  w-full md:block hidden "
                  : "opacity-0 w-0 min-w-[0rem] md:block hidden  scale-[60%] md:scale-100 md:block hidden "
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>
      <button
        style={{ transitionDuration: "2s" }}
        className={` transition-transform  flex items-center  md:justify-start justify-center hover:backdrop-brightness-95  lg:p-3 p-2 py-3    h-fit cursor-pointer hover:border-r hover:border-slate-500 md:p-4 p-2  ${
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
        } w-full rotate-90  `}
      >
        <ThemeToggle />
      </div>
    </Card>
  );
};

export default Nav;
