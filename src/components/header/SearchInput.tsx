import React from "react";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  return (
    <Input
      isClearable
      radius="full"
      size="sm"
      variant="faded"
      classNames={{
        base: ["max-w-[40rem]"],
        inputWrapper: ["bg-white", "dark:bg-stone-700"],
      }}
      placeholder="Type to search..."
      startContent={
        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
}
