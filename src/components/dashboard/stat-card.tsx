import { BagIcon, ClockIcon, CoinIcon } from "@/components/icons";
import type { Stat } from "@/types";

const icons = { orders: BagIcon, revenue: CoinIcon, pending: ClockIcon };

export function StatCard({ label, value, icon }: Stat) {
  const Icon = icons[icon];

  return (
    <div className="flex items-start justify-between rounded-2xl border border-border bg-white p-5">
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="mt-2 text-2xl font-semibold text-navy">{value}</p>
      </div>
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-pink/10 text-pink">
        <Icon />
      </span>
    </div>
  );
}
