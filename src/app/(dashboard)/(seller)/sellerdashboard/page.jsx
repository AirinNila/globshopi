import SallerOrdersChart from "@/components/seller/SallerOrdersChart";
import SellerAnalytics from "@/components/seller/SellerAnalytics";
import { SellerSalesChart } from "@/components/seller/SellerSalesChart";
import React from "react";

const SellerDashboard = () => {
  return (
    <div className="container px-5 pr-10 py-10 mx-auto">
      <div>
        <SellerAnalytics />
      </div>
      <div className="md:flex  items-center justify-between gap-2">
        <div className="md:w-7/12">
          <SellerSalesChart />
        </div>
        <div className="md:w-5/12">
          <SallerOrdersChart />
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
