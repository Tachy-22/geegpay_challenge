import { Calendar1 } from "iconsax-react";

const DateUi = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="flex w-full gap-4 justify-start items-center text-sm lg:text-base">
      <Calendar1 size="24" color="#697689" variant="Outline" />
      {formattedDate}
    </div>
  );
};

export default DateUi;
