import React from "react";
import KpiCards from "../pages/components/KpiCards";
import RevenueKpiCard from "../pages/components/RevenueKpiCard";
import TopProductsCard from "../pages/components/TopProductsCard";
import SalesByRegionCard from "../pages/components/SalesByRegionCard";
import OrdersFunnelCard from "../pages/components/OrdersFunnelCard";

function Home() {
  return (
    <div className="w-full min-h-screen p-6 bg-light-background dark:bg-dark-background transition-colors duration-250">
      {/* Header */}
      <div className="mb-6">
  <h1 className="text-3xl font-semibold text-light-textPrimary dark:text-dark-textPrimary">
    Welcome Back, Asif!
  </h1>
  <p className="mt-2 text-light-textSecondary dark:text-dark-textSecondary">
    Here’s a quick overview of your store’s performance and latest insights.
  </p>
</div>


      {/* KPI Cards */}
      <div className="mb-6">
        <KpiCards />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <RevenueKpiCard />
        <TopProductsCard />
        <SalesByRegionCard />
        <OrdersFunnelCard />
      </div>
    </div>
  );
}

export default Home;
