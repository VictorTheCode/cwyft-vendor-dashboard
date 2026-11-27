"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Filter, Search } from "lucide-react";
import { Pagination } from "@/components/portal/pagination";
import { riderDeliveries } from "@/constants/rider";
import { naira } from "@/lib/format";

type HistoryTab = "All" | "Completed" | "Cancelled";

const PAGE_SIZE = 11;

export default function RiderHistoryPage() {
  const [tab, setTab] = useState<HistoryTab>("All");
  const [query, setQuery] = useState("");
  const [dateRange, setDateRange] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const historyRows = riderDeliveries.filter(
    (d) => d.status === "Completed" || d.status === "Cancelled" || d.id <= "CY-1028",
  );

  const filtered = historyRows.filter((d) => {
    const displayStatus = d.status === "Cancelled" ? "Cancelled" : "Completed";
    const tabMatch = tab === "All" || displayStatus === tab;
    const filterMatch = statusFilter === "All" || displayStatus === statusFilter;
    const dateMatch = dateRange === "All" || d.date === dateRange;
    const q = query.trim().toLowerCase();
    const searchMatch =
      !q ||
      d.id.toLowerCase().includes(q) ||
      d.customer.toLowerCase().includes(q);
    return tabMatch && filterMatch && dateMatch && searchMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Delivery History</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          View and manage your completed and cancelled deliveries
        </p>
      </div>

      {/* Underline Tabs */}
      <div className="flex gap-5 border-b border-border text-xs">
        {(["All", "Completed", "Cancelled"] as HistoryTab[]).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setTab(t);
              setPage(1);
            }}
            className={`pb-2 transition cursor-pointer ${
              tab === t
                ? "border-b-2 border-pink font-semibold text-pink"
                : "text-gray-500 hover:text-[#001D39]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Search + Date + Filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-md">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search by order ID or customer name"
            className="h-9 w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 text-xs outline-none placeholder:text-gray-400 focus:border-pink"
          />
        </div>

        <div className="flex gap-2">
          <div className="relative">
            <Calendar className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#001D39]" />
            <select
              value={dateRange}
              onChange={(e) => {
                setDateRange(e.target.value);
                setPage(1);
              }}
              aria-label="Date range"
              className="h-9 rounded-lg border border-gray-300 bg-white pl-8 pr-3 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
            >
              <option value="All">Date range</option>
              <option value="Nov 4">Nov 4</option>
              <option value="Nov 3">Nov 3</option>
              <option value="Nov 2">Nov 2</option>
              <option value="Nov 1">Nov 1</option>
            </select>
          </div>

          <div className="relative">
            <Filter className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#001D39]" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setPage(1);
              }}
              aria-label="Filter delivery history"
              className="h-9 rounded-lg border border-gray-300 bg-white pl-8 pr-3 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
            >
              <option value="All">Filter</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table Card */}
      <div className="rounded-2xl border border-border bg-white p-5">
        <h2 className="text-sm font-semibold text-[#001D39]">All Deliveries</h2>
        <p className="mb-4 text-[11px] text-gray-500">
          A record of your previous deliveries
        </p>

        <div className="overflow-x-auto">
          <table className="w-full min-w-190 text-center text-xs">
            <thead>
              <tr className="text-[#001D39]">
                <th className="rounded-l-xl bg-[#DCDCDC]/85 px-3 py-3 font-medium">
                  Order ID
                </th>
                <th className="bg-[#DCDCDC]/85 px-3 py-3 font-medium">
                  Customer
                </th>
                <th className="bg-[#DCDCDC]/85 px-3 py-3 font-medium">
                  Pickup Location
                </th>
                <th className="bg-[#DCDCDC]/85 px-3 py-3 font-medium">
                  Drop-off
                </th>
                <th className="bg-[#DCDCDC]/85 px-3 py-3 font-medium">Date</th>
                <th className="bg-[#DCDCDC]/85 px-3 py-3 font-medium">Amount</th>
                <th className="bg-[#DCDCDC]/85 px-3 py-3 font-medium">Status</th>
                <th className="rounded-r-xl bg-[#DCDCDC]/85 px-3 py-3 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((d) => {
                const displayStatus =
                  d.status === "Cancelled" ? "Cancelled" : "Completed";
                return (
                  <tr key={d.id} className="hover:bg-surface/50">
                    <td className="px-3 py-3 font-medium text-[#001D39]">
                      #{d.id}
                    </td>
                    <td className="px-3 py-3 text-[#001D39]">{d.customer}</td>
                    <td className="px-3 py-3 text-[#001D39]">{d.pickup}</td>
                    <td className="px-3 py-3 text-[#001D39]">{d.dropoff}</td>
                    <td className="px-3 py-3 text-[#001D39]">{d.date}</td>
                    <td className="px-3 py-3 text-[#001D39]">
                      {naira(d.amount)}
                    </td>
                    <td
                      className={`px-3 py-3 font-medium ${
                        displayStatus === "Completed"
                          ? "text-emerald-500"
                          : "text-red-500"
                      }`}
                    >
                      {displayStatus}
                    </td>
                    <td className="px-3 py-3">
                      <Link
                        href={`/rider/deliveries/${d.id}/confirmation`}
                        className="inline-block rounded-lg border border-gray-300 px-3.5 py-1 text-xs font-medium text-[#001D39] transition hover:border-pink hover:text-pink"
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        page={safePage}
        totalPages={totalPages}
        totalLabel={`Showing ${filtered.length === 0 ? 0 : start + 1}-${start + visible.length} of ${filtered.length} deliveries`}
        onPageChange={setPage}
        activeTone="pink"
      />
    </div>
  );
}
