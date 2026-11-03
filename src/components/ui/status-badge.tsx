import type { OrderStatus } from "@/types";

const styles: Record<OrderStatus, string> = {
  Pending: "bg-amber-50 text-amber-600",
  Preparing: "bg-cyan-50 text-cyan-600",
  "Ready for Pickup": "bg-pink/10 text-pink",
  Delivered: "bg-emerald-50 text-emerald-600",
  Cancelled: "bg-gray-100 text-gray-500",
};

export function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
