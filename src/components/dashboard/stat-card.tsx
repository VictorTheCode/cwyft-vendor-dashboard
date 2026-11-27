import type { Stat } from "@/types";

export function StatCard({ label, value }: Stat) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5">
      <p className="text-xs text-gray-500">{label}</p>
      <p className="mt-3 text-2xl font-semibold text-navy">{value}</p>
    </div>
  );
}
