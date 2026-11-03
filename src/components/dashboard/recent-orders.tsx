import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { StatusBadge } from "@/components/ui/status-badge";
import { recentOrders } from "@/constants/dashboard";
import { naira } from "@/lib/format";

const headers = ["Order ID", "Customer", "Items", "Amount", "Status"];

export function RecentOrders() {
  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-white">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="font-semibold text-navy">Recent Orders</h2>
        <Link
          href="/orders"
          className="flex items-center gap-1 text-xs font-medium text-pink hover:underline"
        >
          View all <ArrowRightIcon />
        </Link>
      </div>

      {recentOrders.length === 0 ? (
        <p className="border-t border-border px-5 py-10 text-center text-sm text-gray-500">
          No orders yet today.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-140 text-left text-sm">
            <thead className="bg-surface text-xs text-gray-500">
              <tr>
                {headers.map((h) => (
                  <th key={h} className="px-5 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {recentOrders.map((o) => (
                <tr key={o.id} className="transition hover:bg-surface/50">
                  <td className="px-5 py-3.5">
                    <Link
                      href={`/orders/${o.id}`}
                      className="font-semibold text-navy hover:underline"
                    >
                      #{o.id}
                    </Link>
                  </td>
                  <td className="px-5 py-3.5 text-gray-700">{o.customer}</td>
                  <td className="px-5 py-3.5 text-gray-600">{o.item}</td>
                  <td className="px-5 py-3.5 font-medium text-navy">
                    {naira(o.amount)}
                  </td>
                  <td className="px-5 py-3.5">
                    <StatusBadge status={o.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
