import Image from "next/image";
import DataTable from "./components/table";
import BarChartUi from "./components/barChart";
import KPIs from "./components/KPIs";
import Progress from "./components/progress";
import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex flex-col gap-3 justify-start items-center  relative   overflow-hidden h-screen ">
      <Header />
      <div className=" flex px-[1.5rem]  pt-[5rem]  h-full flex-col gap-6  w-full  overflow-y-auto -">
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
