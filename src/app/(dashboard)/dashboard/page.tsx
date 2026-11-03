import { Greeting } from "@/components/dashboard/greeting";
import { PopularItems } from "@/components/dashboard/popular-items";
import { RecentOrders } from "@/components/dashboard/recent-orders";
import { SalesOverview } from "@/components/dashboard/sales-overview";
import { StatCard } from "@/components/dashboard/stat-card";
import { stats } from "@/constants/dashboard";

export default function DashboardPage() {
  return (
    <div className="max-w-300 space-y-6">
      <Greeting name="David" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_320px]">
        <div className="space-y-6">
          <RecentOrders />
          <SalesOverview />
        </div>
        <PopularItems />
      </div>
    </div>
  );
}
