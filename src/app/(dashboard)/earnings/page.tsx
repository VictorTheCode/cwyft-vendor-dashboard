"use client";

import { useState } from "react";
import { inputClass } from "@/components/ui/form-input";
import { payouts, TOTAL_EARNINGS } from "@/constants/earnings";
import { SearchIcon } from "@/components/icons";
import { naira } from "@/lib/format";

export default function EarningsPage() {
  const [query, setQuery] = useState("");

  const pending = payouts
    .filter((p) => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);
  const visible = payouts.filter((p) =>
    p.id.toLowerCase().includes(query.trim().toLowerCase()),
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-navy">
          Earnings &amp; Payouts
        </h1>
        <p className="mt-0.5 text-xs text-navy">
          Track your earnings and manage your payouts
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <div className="w-44 rounded-xl border border-border bg-white p-4">
          <p className="text-[11px] text-gray-600">Total Earnings</p>
          <p className="mt-1 text-lg font-semibold text-navy">
            {naira(TOTAL_EARNINGS)}
          </p>
          <p className="mt-1 text-[10px] text-gray-500">All-time earnings</p>
        </div>
        <div className="w-44 rounded-xl border border-border bg-white p-4">
          <p className="text-[11px] text-gray-600">Pending Payout</p>
          <p className="mt-1 text-lg font-semibold text-navy">
            {naira(pending)}
          </p>
          <p className="mt-1 text-[10px] text-gray-500">Awaiting Payment</p>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-navy">Payout History</h2>
        <p className="text-[11px] text-gray-500">
          View your previous payouts and payment status
        </p>
      </div>

      <div className="relative max-w-xs">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Payout ID..."
          className={`${inputClass} pl-9`}
        />
      </div>

      <div className="max-w-3xl overflow-hidden rounded-2xl border border-border bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-140 text-center text-xs">
            <thead>
              <tr className="border-b border-border text-gray-700">
                <th className="px-4 py-4 font-medium">Payout ID</th>
                <th className="px-4 py-4 font-medium">Date</th>
                <th className="px-4 py-4 font-medium">Amount</th>
                <th className="px-4 py-4 font-medium">Payment Method</th>
                <th className="px-4 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((p) => (
                <tr key={p.id}>
                  <td className="px-4 py-4 text-navy">{p.id}</td>
                  <td className="px-4 py-4 text-gray-700">{p.date}</td>
                  <td className="px-4 py-4 text-gray-700">{naira(p.amount)}</td>
                  <td className="px-4 py-4 text-gray-700">{p.method}</td>
                  <td
                    className={`px-4 py-4 font-medium ${p.status === "Completed" ? "text-emerald-500" : "text-amber-400"}`}
                  >
                    {p.status}
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-sm text-gray-500">
                    No payout matches that ID.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[11px] text-gray-500">
        Showing {visible.length} of {payouts.length} payouts
      </p>
    </div>
  );
}
