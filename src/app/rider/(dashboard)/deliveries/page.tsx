"use client";

import { useState } from "react";
import Link from "next/link";
import { Filter, Search } from "lucide-react";
import { Pagination } from "@/components/portal/pagination";
import { riderDeliveries, type RiderDeliveryStatus } from "@/constants/rider";
import { naira } from "@/lib/format";

type Tab = "All" | "New Requests" | "Active" | "Completed";

const PAGE_SIZE = 8;

const statusColors: Record<RiderDeliveryStatus, string> = {
  New: "text-pink",
  Active: "text-cyan-500",
  Completed: "text-emerald-500",
  Cancelled: "text-red-500",
};

export default function RiderDeliveriesPage() {
  const [tab, setTab] = useState<Tab>("All");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = riderDeliveries.filter((d) => {
    const tabMatch =
      tab === "All" ||
      (tab === "New Requests" && d.status === "New") ||
      (tab === "Active" && d.status === "Active") ||
      (tab === "Completed" && d.status === "Completed");

    const filterMatch = statusFilter === "All" || d.status === statusFilter;
    const q = query.trim().toLowerCase();
    const searchMatch =
      !q ||
      d.id.toLowerCase().includes(q) ||
      d.pickup.toLowerCase().includes(q) ||
      d.dropoff.toLowerCase().includes(q);

    return tabMatch && filterMatch && searchMatch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const tabs: Tab[] = ["All", "New Requests", "Active", "Completed"];

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Deliveries</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          Manage your delivery request and orders.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => {
              setTab(t);
              setPage(1);
            }}
            className={`rounded-full px-3.5 py-1 text-xs font-medium transition cursor-pointer ${
              tab === t
                ? "bg-[#001D39] text-white"
                : "border border-gray-300 bg-white text-[#001D39] hover:border-gray-400"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Search + Filter */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1 max-w-xl">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search deliveries..."
            className="h-9 w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 text-xs outline-none placeholder:text-gray-400 focus:border-pink"
          />
        </div>

        <div className="relative self-start">
          <Filter className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#001D39]" />
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setPage(1);
            }}
            aria-label="Filter deliveries"
            className="h-9 rounded-lg border border-gray-300 bg-white pl-8 pr-4 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
          >
            <option value="All">Filter</option>
            <option value="New">New</option>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Delivery Requests Table */}
      <div className="rounded-2xl border border-border bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-[#001D39]">
            Delivery Requests
          </h2>
          <Link
            href="/rider/history"
            className="text-xs font-medium text-pink hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-170 text-center text-xs">
            <thead className="border-b border-border text-gray-500">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Order ID</th>
                <th className="px-4 py-3 font-medium">Pickup Location</th>
                <th className="px-4 py-3 font-medium">Drop-off Location</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((d) => {
                const target =
                  d.status === "Active"
                    ? `/rider/deliveries/${d.id}/active`
                    : d.status === "Completed"
                      ? `/rider/deliveries/${d.id}/confirmation`
                      : `/rider/deliveries/${d.id}`;

                return (
                  <tr key={d.id} className="hover:bg-surface/50">
                    <td className="px-4 py-3.5 text-left font-medium text-[#001D39]">
                      #{d.id}
                    </td>
                    <td className="px-4 py-3.5 text-[#001D39]">{d.pickup}</td>
                    <td className="px-4 py-3.5 text-[#001D39]">{d.dropoff}</td>
                    <td className="px-4 py-3.5 text-[#001D39]">
                      {naira(d.amount)}
                    </td>
                    <td
                      className={`px-4 py-3.5 font-medium ${statusColors[d.status]}`}
                    >
                      {d.status}
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <Link
                        href={target}
                        className="font-medium text-pink hover:underline"
                      >
                        View →
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
