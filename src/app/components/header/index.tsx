import React from "react";
import SearchInput from "./SearchInput";
import { Card } from "@nextui-org/react";

const Header = () => {
  return (
    <header className="absolute top-0 w-full backdrop-blur-3xl">
      <Card className=" py-[0.5rem] px-[1rem] w-full  shadow-none rounded-none rounded-0   border-b  z-40 ">
        <div className=" grid grid-cols-3 gap-4 w-full">
          <div className="col-span-2 w-full flex justify-between items-center">
            <h1 className="text-xl text-gray-500 dark:text-gray-300">
              Dashboard
            </h1>
            <div className="lg:max-w-[30rem] max-w-[20rem] w-full">
              <SearchInput />
            </div>
          </div>
          <div className="col-span-1 flex justify-between items-center">
            Dashboard
          </div>
        </div>
      </Card>
    </header>
  );
};

export default Header;
