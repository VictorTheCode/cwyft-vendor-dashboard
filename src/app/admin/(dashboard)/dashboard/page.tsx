"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bike,
  Calendar,
  CheckCircle2,
  ShoppingBag,
  Store,
  UserPlus,
} from "lucide-react";
import {
  adminKpis,
  adminPerformanceRanges,
  adminRecentActivity,
  adminRecentOrders,
} from "@/constants/admin";
import { naira } from "@/lib/format";

type RangeKey = keyof typeof adminPerformanceRanges;

const activityIcons = {
  consumer: UserPlus,
  vendor: Store,
  rider: Bike,
  order: ShoppingBag,
  done: CheckCircle2,
} as const;

const orderStatusColor: Record<string, string> = {
  Delivered: "text-emerald-500",
  Preparing: "text-amber-400",
  "On the way": "text-cyan-500",
  Cancelled: "text-red-500",
};

export default function AdminDashboardPage() {
  const [range, setRange] = useState<RangeKey>("Last 7 days");
  const perf = adminPerformanceRanges[range];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-xl font-bold text-[#001D39]">
            Welcome Back, Admin!
          </h1>
          <p className="mt-0.5 text-xs text-gray-600">
            Here&apos;s an overview of what&apos;s happening across Cwyft today.
          </p>
        </div>

        <div className="relative self-start">
          <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#001D39]" />
          <select
            value={range}
            onChange={(e) => setRange(e.target.value as RangeKey)}
            aria-label="Select date range"
            className="h-9 rounded-lg border border-border bg-white pl-9 pr-4 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
          >
            {(Object.keys(adminPerformanceRanges) as RangeKey[]).map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {adminKpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-border bg-white p-4"
          >
            <p className="text-[11px] text-gray-500">{kpi.label}</p>
            <p className="mt-1.5 text-2xl font-bold text-[#001D39]">
              {kpi.value}
            </p>
            <p className="mt-1 text-[11px] font-medium text-emerald-500">
              {kpi.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Platform Performance + Recent Activity */}
      <div>
        <h2 className="text-base font-semibold text-[#001D39]">
          Platform Performance
        </h2>
        <p className="mb-3 text-xs text-gray-500">
          Monitor order activity and revenue across Cwyft.
        </p>

        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[1fr_340px]">
          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-4 flex items-center gap-6 text-xs text-[#001D39]">
              <span className="flex items-center gap-2 font-medium">
                <span className="h-0.5 w-5 bg-[#001D39]" /> Order
              </span>
              <span className="flex items-center gap-2 font-medium">
                <span className="h-0.5 w-5 bg-[#FF5B88]" /> Revenue
              </span>
            </div>

            <DualLineChart
              labels={[...perf.labels]}
              orders={[...perf.orders]}
              revenue={[...perf.revenue]}
            />
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[#001D39]">
                Recent Activity
              </h3>
              <Link
                href="/admin/orders"
                className="text-xs font-medium text-pink hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="space-y-4">
              {adminRecentActivity.map((item) => {
                const Icon = activityIcons[item.type];
                return (
                  <div
                    key={item.title + item.time}
                    className="flex items-start justify-between gap-3"
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#001D39]" />
                      <div>
                        <p className="text-xs font-semibold text-[#001D39]">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                    <span className="whitespace-nowrap text-[10px] text-gray-400">
                      {item.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="rounded-2xl border border-border bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#001D39]">
            Recent Orders
          </h2>
          <Link
            href="/admin/orders"
            className="text-xs font-medium text-pink hover:underline"
          >
            View All
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-center text-xs">
            <thead className="border-b border-border text-gray-500">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Order ID</th>
                <th className="px-4 py-3 font-medium">Consumers</th>
                <th className="px-4 py-3 font-medium">Vendor</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 text-right font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {adminRecentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-surface/50">
                  <td className="px-4 py-3.5 text-left font-medium text-[#001D39]">
                    {order.id}
                  </td>
                  <td className="px-4 py-3.5 text-[#001D39]">
                    {order.consumer}
                  </td>
                  <td className="px-4 py-3.5 text-[#001D39]">{order.vendor}</td>
                  <td className="px-4 py-3.5 text-[#001D39]">
                    {naira(order.amount)}
                  </td>
                  <td
                    className={`px-4 py-3.5 text-right font-medium ${orderStatusColor[order.status] ?? "text-gray-600"}`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function DualLineChart({
  labels,
  orders,
  revenue,
}: {
  labels: string[];
  orders: number[];
  revenue: number[];
}) {
  const W = 560;
  const H = 220;
  const left = 20;
  const right = 20;
  const top = 14;
  const bottom = 28;
  const plotW = W - left - right;
  const plotH = H - top - bottom;
  const max = Math.max(...orders, ...revenue, 100);

  const x = (i: number) => left + (i / (labels.length - 1)) * plotW;
  const y = (v: number) => top + plotH - (v / max) * plotH;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Platform performance chart">
      {[0, 0.25, 0.5, 0.75, 1].map((r) => (
        <line
          key={r}
          x1={left}
          x2={W - right}
          y1={top + plotH * r}
          y2={top + plotH * r}
          stroke="#e5e7eb"
        />
      ))}

      <polyline
        points={orders.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
        fill="none"
        stroke="#001D39"
        strokeWidth="2"
      />
      <polyline
        points={revenue.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
        fill="none"
        stroke="#FF5B88"
        strokeWidth="2"
      />

      {orders.map((v, i) => (
        <circle key={`o-${i}`} cx={x(i)} cy={y(v)} r="3" fill="#001D39" />
      ))}
      {revenue.map((v, i) => (
        <circle key={`r-${i}`} cx={x(i)} cy={y(v)} r="3" fill="#FF5B88" />
      ))}

      {labels.map((l, i) => (
        <text
          key={l}
          x={x(i)}
          y={H - 6}
          textAnchor="middle"
          fontSize="11"
          fill="#4b5563"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}
