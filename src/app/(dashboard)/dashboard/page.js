import Analytics from "@/components/dashboard/Analytics";
import OrdersChart from "@/components/dashboard/OrdersStatusChart";
import { ProductChart } from "@/components/dashboard/ProductChart";
import RetailerPerformance from "@/components/dashboard/RetailerChart";
import { SalesCharts } from "@/components/dashboard/SalesChart";

export default function Home() {
  return (
    <div className="container px-5 pr-10 py-10 mx-auto">
      {/* analytics section */}
      <div>
        <Analytics />
      </div>
      {/* <div className="lg:grid lg:grid-cols-12 gap-12 ">
        <div className="col-span-7">
          <SalesCharts />
        </div>
        <div className="col-span-5">
          <RetailerPerformance />
        </div>
        <div className="col-span-5">
          <OrdersChart />
        </div>
        <div className="col-span-7">
          <ProductChart />
        </div>
      </div> */}
      {/* <div className="md:flex items-center justify-between md:gap-8 lg:gap-12">
        <div className="w-7/12">
          <SalesCharts />
        </div>
        <div className="w-5/12">
          <RetailerPerformance />
        </div>
      </div>
      <div className="md:flex items-center justify-between md:gap-8 lg:gap-12">
        <div className="w-5/12">
          <OrdersChart />
        </div>
        <div className="w-7/12">
          <ProductChart />
        </div>
      </div> */}
      <div className="md:flex items-stretch justify-between gap-2">
        <div className="md:w-7/12">
          <SalesCharts />
        </div>
        <div className="md:w-5/12">
          <RetailerPerformance />
        </div>
      </div>

      <div className="md:flex items-stretch justify-between gap-1">
        <div className="md:w-5/12">
          <OrdersChart />
        </div>
        <div className="md:w-7/12">
          <ProductChart />
        </div>
      </div>

    
    </div>
  );
}
