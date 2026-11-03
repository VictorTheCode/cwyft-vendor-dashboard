"use client";

import { Range } from "@/types";
import { useState } from "react";
import {
  niceTop,
  naira,
  short,
  ranges,
  stats,
  statusBreakdown,
  topItems,
} from "@/constants/analytics";

export default function AnalyticsPage() {
  const [range, setRange] = useState<Range>("Week");
  const { labels, values, delta } = ranges[range];
  const total = values.reduce((a, b) => a + b, 0);
  const statusTotal = statusBreakdown.reduce((a, s) => a + s.value, 0);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h1 className="text-lg font-semibold text-navy">Analytics</h1>
          <p className="mt-0.5 text-xs text-navy">
            Track your performance, understand your customers and grow your
            business
          </p>
        </div>
        <select className="h-10 rounded-lg border border-border bg-white px-3 text-xs text-navy outline-none focus:border-pink">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Year</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-white p-4"
          >
            <p className="text-[11px] text-gray-600">{s.label}</p>
            <p className="mt-1 text-lg font-semibold text-navy">{s.value}</p>
            <p className="mt-1 text-[10px] text-gray-500">
              <span className="font-medium text-emerald-500">↑ {s.delta}</span>{" "}
              vs. previous week
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="space-y-6">
          <section>
            <h2 className="text-sm font-semibold text-navy">Sales Overview</h2>
            <p className="mb-2 text-[11px] text-gray-500">
              Your revenue performance over time
            </p>
            <div className="rounded-2xl border border-border bg-white p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[11px] text-gray-600">Total Revenue</p>
                  <p className="text-lg font-semibold text-navy">
                    {naira(total)}
                  </p>
                  <p className="text-[11px] font-medium text-emerald-500">
                    ↑ {delta}%
                  </p>
                </div>
                <div className="flex gap-1 text-[11px]">
                  {(Object.keys(ranges) as Range[]).map((r) => (
                    <button
                      key={r}
                      onClick={() => setRange(r)}
                      className={`rounded px-2 py-0.5 ${range === r ? "bg-pink text-white" : "text-gray-500 hover:text-navy"}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
              <LineChart labels={labels} values={values} />
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold text-navy">
              Order Status Breakdown
            </h2>
            <p className="mb-2 text-[11px] text-gray-500">
              See how your orders are progressing
            </p>
            <div className="space-y-5 rounded-2xl border border-border bg-white p-5">
              {statusBreakdown.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 text-xs text-navy"
                >
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${s.dot}`}
                  />
                  <span className="w-28 shrink-0">{s.label}</span>
                  <div className="h-1 flex-1 rounded-full bg-gray-200">
                    <div
                      className={`h-1 rounded-full ${s.bar}`}
                      style={{ width: `${(s.value / statusTotal) * 100}%` }}
                    />
                  </div>
                  <span className="w-8 text-right">{s.value}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-sm font-semibold text-navy">Top-Selling Items</h2>
          <p className="mb-2 text-[11px] text-gray-500">
            Your most popular menu items this period
          </p>
          <div className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-105 text-center text-xs">
                <thead>
                  <tr className="border-b border-border text-gray-700">
                    <th className="px-4 py-4 font-medium">Rank</th>
                    <th className="px-4 py-4 font-medium">Item</th>
                    <th className="px-4 py-4 font-medium">Orders</th>
                    <th className="px-4 py-4 font-medium">Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {topItems.map((t, i) => (
                    <tr key={t.item}>
                      <td className="px-4 py-5 text-gray-700">{i + 1}.</td>
                      <td className="px-4 py-5 font-medium text-navy">
                        {t.item}
                      </td>
                      <td className="px-4 py-5 text-gray-700">{t.orders}</td>
                      <td className="px-4 py-5 font-medium text-navy">
                        {naira(t.revenue)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function LineChart({ labels, values }: { labels: string[]; values: number[] }) {
  // One coordinate system for everything: the viewBox. The SVG then scales to its container.
  const W = 560;
  const H = 230;
  const left = 48;
  const right = 12;
  const top = 12;
  const bottom = 26;
  const plotW = W - left - right;
  const plotH = H - top - bottom;
  const max = niceTop(Math.max(...values));

  const x = (i: number) => left + (i / (values.length - 1)) * plotW;
  const y = (v: number) => top + plotH - (v / max) * plotH;
  const ticks = [0, 1, 2, 3, 4].map((i) => (max / 4) * i);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="mt-3 w-full"
      role="img"
      aria-label="Revenue chart"
    >
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
            {short(t)}
          </text>
        </g>
      ))}
      <polyline
        points={values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
        fill="none"
        stroke="#0a1929"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {values.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r="3" fill="#0a1929" />
      ))}
      {labels.map((l, i) => (
        <text
          key={l}
          x={x(i)}
          y={H - 8}
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
