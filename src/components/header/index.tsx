"use client";
import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import { Card, Skeleton } from "@nextui-org/react";
import UserDropDown from "./UserDropDown";
import { HambergerMenu, Notification } from "iconsax-react";
import DateUi from "./DateUi";

const Header = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  useEffect(() => {
    console.log("has loaded");
    setHasLoaded(true);
  }, []);
  return (
    <header className="absolute top-0 w-full backdrop-blur-3xl z-40">
      <Card className=" py-[0.5rem] px-[1rem] w-full  shadow-none rounded-none rounded-0 bg-stone-100/90 dark:bg-stone-900 dark:border-stone-500   border-b  ">
        <div className=" sm:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4 w-full">
          <div className="lg:col-span-2 col-span-1 w-full flex justify-between items-center gap-3">
            <Skeleton isLoaded={hasLoaded} className="rounded-md">
              <h1 className="text-xl text-gray-600 dark:text-gray-300">
                Dashboard
              </h1>
            </Skeleton>
            <div className="xl:max-w-[30rem] lg:max-w-[20rem] max-w-[15rem]  w-full flex gap-2 items-center justify-between">
              <SearchInput />
              <HambergerMenu className="flex sm:hidden" size="32" />
            </div>
          </div>
          <div className="col-span-1  justify-between items-center hidden sm:flex">
            <DateUi />
            <div className="w-full flex items-center justify-center   ">
              <div className="dark: p-2 border-stone-500 mx-auto rounded-full border ">
                <Notification size="24" color="#697689" variant="Outline" />
              </div>
            </div>
            <UserDropDown />
          </div>
        </div>
      </Card>
    </header>
  );
};

export default Header;
