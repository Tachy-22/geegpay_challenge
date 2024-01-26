import KPIs from "@/components/KPIs";
import BarChartUi from "@/components/barChart";
import Header from "@/components/header";
import Progress from "@/components/progress";
import DataTable from "@/components/table";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col gap-3 justify-start items-center  relative   overflow-hidden h-screen bg-gray-100 dark:bg-stone-950">
      <Header />
      <div className=" flex md:px-[1rem] lg:px-[2rem] px-[0.5rem]  md:pt-[6rem] sm:pt-[10rem] pt-[6rem]  h-full flex-col gap-6  w-full  overflow-y-auto -">
        <section className="grid xl:grid-cols-3  grid-cols-1  gap-6  ">
          <div className="xl:col-span-2  col-span-1 order-last xl:order-first h-full ">
            <BarChartUi />
          </div>
          <div className="col-span-1">
            <KPIs />
          </div>
        </section>
        <section className="grid xl:grid-cols-3 grid-cols-1   gap-6 ">
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
