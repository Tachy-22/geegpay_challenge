import Image from "next/image";
import DataTable from "./components/table";
import BarChartUi from "./components/barChart";
import KPIs from "./components/KPIs";
import Progress from "./components/progress";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen ">
      <div className=" grid  h-max grid-cols-3 gap-6  bg-green-50/10 scale-75">
        <section className="flex flex-col   gap-6 col-span-2">
          <BarChartUi />
          <DataTable />
        </section>
        <section className="flex flex-col gap-6 justify-between  h-[100%] col-span-1 ">
          <KPIs />
          <Progress />
        </section>
      </div>
    </main>
  );
}
