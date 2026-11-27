"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import {
  adminAnalyticsRanges,
  topPerformingVendors,
} from "@/constants/admin";
import { niceTop, short } from "@/lib/chart";

type RangeKey = keyof typeof adminAnalyticsRanges;

export default function AdminAnalyticsPage() {
  const [range, setRange] = useState<RangeKey>("Last 7 days");
  const data = adminAnalyticsRanges[range];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h1 className="text-xl font-bold text-[#001D39]">Analytics</h1>
          <p className="mt-0.5 text-xs text-gray-600">
            Track platform performance and gain insight into Cwyft operations.
          </p>
        </div>

        <div className="relative self-start">
          <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#001D39]" />
          <select
            value={range}
            onChange={(e) => setRange(e.target.value as RangeKey)}
            aria-label="Select analytics period"
            className="h-9 rounded-lg border border-border bg-white pl-9 pr-4 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
          >
            {(Object.keys(adminAnalyticsRanges) as RangeKey[]).map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {data.kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-xl border border-border bg-white p-4"
          >
            <p className="text-[11px] text-gray-500">{k.label}</p>
            <p className="mt-1 text-2xl font-bold text-[#001D39]">{k.value}</p>
            <p className="mt-1 text-[10px] font-medium text-emerald-500">
              {k.delta}
            </p>
          </div>
        ))}
      </div>

      {/* Revenue + Orders Trend */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-5">
          <h2 className="text-sm font-semibold text-[#001D39]">Revenue Trend</h2>
          <p className="text-[11px] text-gray-500">
            Revenue generated over the selected period
          </p>
          <p className="mt-2 text-lg font-bold text-[#001D39]">
            {data.kpis[0].value}
          </p>
          <p className="text-xs font-semibold text-[#001D39]">
            <span className="mr-1 inline-block h-2.5 w-0.5 bg-[#001D39]" />
            {data.revenuePeak}
          </p>
          <TrendChart
            labels={[...data.labels]}
            values={[...data.revenue]}
            color="#001D39"
            formatTick={short}
          />
        </div>

        <div className="rounded-2xl border border-border bg-white p-5">
          <h2 className="text-sm font-semibold text-[#001D39]">Orders Trend</h2>
          <p className="text-[11px] text-gray-500">
            Number of orders received over the selected period
          </p>
          <p className="mt-2 text-lg font-bold text-[#001D39]">
            {data.kpis[1].value}
          </p>
          <p className="text-xs font-semibold text-[#001D39]">
            <span className="mr-1 inline-block h-2.5 w-0.5 bg-pink" />
            {data.ordersPeak}
          </p>
          <TrendChart
            labels={[...data.labels]}
            values={[...data.orders]}
            color="#FF5B88"
            formatTick={(v) => String(Math.round(v))}
          />
        </div>
      </div>

      {/* Order Status Breakdown + Top Performing Vendors */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-white p-5">
          <h2 className="text-sm font-semibold text-[#001D39]">
            Order Status Breakdown
          </h2>
          <p className="text-[11px] text-gray-500">
            Overview of orders by their current status
          </p>

          <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row sm:justify-around">
            {/* Pie Chart via conic-gradient */}
            <div
              className="relative h-36 w-36 shrink-0 rounded-full"
              style={{
                background:
                  "conic-gradient(#001D39 0% 65%, #FF5B88 65% 85%, #F59E0B 85% 100%)",
              }}
              role="img"
              aria-label="Order status pie chart: Delivered 65%, Ongoing 20%, Cancelled 15%"
            />

            <div className="w-full max-w-xs space-y-4 text-xs text-[#001D39]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#001D39]" />
                  Delivered
                </span>
                <span className="font-semibold">65%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF5B88]" />
                  Ongoing
                </span>
                <span className="font-semibold">20%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  Cancelled
                </span>
                <span className="font-semibold">15%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5">
          <h2 className="text-sm font-semibold text-[#001D39]">
            Top Performing Vendors
          </h2>
          <p className="text-[11px] text-gray-500">
            Vendors with the highest number of orders
          </p>

          <div className="mt-4 space-y-3">
            {topPerformingVendors.map((v) => (
              <div
                key={v.name}
                className="flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="h-6 w-6 rounded-md bg-gray-200" />
                  <span className="font-medium text-[#001D39]">{v.name}</span>
                </div>
                <span className="text-gray-500">{v.orders} orders</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TrendChart({
  labels,
  values,
  color,
  formatTick,
}: {
  labels: string[];
  values: number[];
  color: string;
  formatTick: (n: number) => string;
}) {
  const W = 500;
  const H = 190;
  const left = 52;
  const right = 14;
  const top = 12;
  const bottom = 26;
  const plotW = W - left - right;
  const plotH = H - top - bottom;
  const max = niceTop(Math.max(...values));

  const x = (i: number) => left + (i / (values.length - 1)) * plotW;
  const y = (v: number) => top + plotH - (v / max) * plotH;
  const ticks = [0, 1, 2, 3, 4].map((i) => (max / 4) * i);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 w-full">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={left} x2={W - right} y1={y(t)} y2={y(t)} stroke="#e5e7eb" />
          <text
            x={left - 8}
            y={y(t) + 3}
            textAnchor="end"
            fontSize="10"
            fill="#6b7280"
          >
            {formatTick(t)}
          </text>
        </g>
      ))}
      <polyline
        points={values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      {labels.map((l, i) => (
        <text
          key={l}
          x={x(i)}
          y={H - 6}
          textAnchor="middle"
          fontSize="10"
          fill="#6b7280"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}
