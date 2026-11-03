"use client";

import { useState } from "react";
import { LineChart } from "@/components/ui/line-chart";
import { salesRanges } from "@/constants/dashboard";
import { naira } from "@/lib/format";
import type { SalesRange } from "@/types";

export function SalesOverview() {
  const [range, setRange] = useState<SalesRange>("Last 7 Days");
  const { label, labels, values } = salesRanges[range];
  const total = values.reduce((sum, v) => sum + v, 0);

  return (
    <section className="rounded-2xl border border-border bg-white p-5">
      <h2 className="font-semibold text-navy">Sales Overview</h2>
      <p className="mt-0.5 text-xs text-gray-500">
        Track your store&apos;s revenue over time.
      </p>

      <div className="mt-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs text-gray-500">{label}</p>
          <p className="mt-0.5 text-2xl font-semibold text-navy">
            {naira(total)}
          </p>
        </div>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value as SalesRange)}
          className="h-9 cursor-pointer rounded-lg border border-border bg-white px-3 text-xs text-navy outline-none focus:border-pink"
        >
          {(Object.keys(salesRanges) as SalesRange[]).map((r) => (
            <option key={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <LineChart labels={labels} values={values} />
      </div>
    </section>
  );
}
