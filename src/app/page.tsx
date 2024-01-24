import Image from "next/image";
import DataTable from "./components/table";
import BarChartUi from "./components/barChart";
import KPIs from "./components/KPIs";
import Progress from "./components/progress";

export default function Home() {
  return (
    <main className="flex justify-center items-start xl:py-[4rem] px-[1rem] bg-gray-50/50 ">
      <div className=" flex  h-max flex-col gap-4  w-full  scale-">
        <section className="grid xl:grid-cols-3 grid-cols-1    gap-4 ">
          <div className="xl:col-span-2 col-span-1 order-last xl:order-first">
            <BarChartUi />
          </div>
          <div className="col-span-1">
            <KPIs />
          </div>
        </section>
        <section className="grid xl:grid-cols-3 grid-cols-1   gap-4 ">
          <div className="xl:col-span-2 col-span-1  order-last xl:order-first">
            <DataTable />
          </div>
          <div className="col-span-1">
            <Progress />
          </div>
        </section>
      </div>
    </main>
  );
}
