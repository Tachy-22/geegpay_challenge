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

interface NavIcon {
  id: number;
  icon: LucideIcon;
  label: string;
}

const navIcons: NavIcon[] = [
  { id: 1, icon: Users, label: "Users" },
  { id: 2, icon: LayoutGrid, label: "Layout" },
  { id: 3, icon: SettingsIcon, label: "Settings" },
  { id: 4, icon: Info, label: "Info" },
  // Add more icons as needed
];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleHover = () => {
    setIsOpen(true);
  };

  const handleLeave = () => {
    setIsOpen(false);
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
    <div
      className={` top-0 h-screen max-w-[15rem] left-0 transition-transform duration-1000 overflow-hidden  gap-5 z-50 p-4 bg-gray-100  border-r border-gray-200 flex flex-col ${
        isOpen ? "w-full" : "w-fit"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {navIcons.map((Icon) => (
        <div
          key={Icon.id}
          className={` flex items-center justify-start hover:bg-gray-300/40 rounded-xl lg:p-3 p-2 py-3    h-fit cursor-pointer border ${
            isOpen ? "gap-3 w-full" : "gap-0 w-fit"
          }`}
        >
          <div className="w-fit h-full   flex justify-center items-center">
            <Icon.icon size={24} />
          </div>
          <span
            className={` duration-1000 transition-all   ${
              isOpen
                ? "opacity-1 min-w-[5rem] w-full"
                : "opacity-0 w-0 min-w-[0rem] "
            }`}
          >
            {Icon.label}
          </span>
        </div>
      ))}
      <button
        className={` flex items-center justify-start  duration-1000 transition-all hover:bg-gray-300/40 rounded-xl lg:p-3 p-2 py-3  gap-3   h-fit cursor-pointer border w-full`}
        onClick={handleToggle}
      >
        <div className="w-fit h-full  flex justify-center items-center">
          {isOpen ? (
            <ArrowLeftCircle size={24} />
          ) : (
            <ArrowRightCircle size={24} />
          )}
          <span
            className={` duration-1000 transition-all   ${
              isOpen
                ? "opacity-1 min-w-[5rem] w-full"
                : "opacity-0 w-0 min-w-[0rem] "
            }`}
          >
            {isOpen ? "close" : "open "}{" "}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Nav;
