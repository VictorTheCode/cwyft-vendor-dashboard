"use client";

import { useState } from "react";
import Link from "next/link";
import {
  naira,
  orderList,
  shortStatusLabel,
  statusText,
} from "@/constants/orders";
import type { OrderStatus } from "@/types";

type OrderTab = "All" | "Pending" | "Preparing" | "Ready" | "Completed";

const PAGE_SIZE = 11;

const tabStatusMap: Record<Exclude<OrderTab, "All">, OrderStatus> = {
  Pending: "Pending",
  Preparing: "Preparing",
  Ready: "Ready for Pickup",
  Completed: "Delivered",
};

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderTab>("All");
  const [page, setPage] = useState(1);

  const counts: Record<OrderTab, number> = {
    All: orderList.length,
    Pending: orderList.filter((o) => o.status === "Pending").length,
    Preparing: orderList.filter((o) => o.status === "Preparing").length,
    Ready: orderList.filter((o) => o.status === "Ready for Pickup").length,
    Completed: orderList.filter((o) => o.status === "Delivered").length,
  };

  const filtered =
    activeTab === "All"
      ? orderList
      : orderList.filter((o) => o.status === tabStatusMap[activeTab]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  const tabs: OrderTab[] = ["All", "Pending", "Preparing", "Ready", "Completed"];

  function selectTab(tab: OrderTab) {
    setActiveTab(tab);
    setPage(1);
  }

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <div>
        <h1 className="text-lg font-semibold text-navy">Orders</h1>
        <p className="mt-0.5 text-xs text-navy">
          Manage and track all your customer orders.
        </p>
        <p className="text-xs text-navy">
          You have {orderList.length} orders today.
        </p>
      </div>

      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2.5">
        {tabs.map((tab) => {
          const active = activeTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => selectTab(tab)}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition cursor-pointer ${
                active
                  ? "bg-[#001D39] text-white"
                  : "border border-gray-300 bg-white text-navy hover:border-gray-400"
              }`}
            >
              {tab}({counts[tab]})
            </button>
          );
        })}
      </div>

      {/* Orders Table Card */}
      <div className="rounded-2xl border border-border bg-white p-4 sm:p-5">
        <div className="overflow-x-auto">
          <table className="w-full min-w-180 text-center text-xs">
            <thead>
              <tr className="text-navy">
                <th className="rounded-l-xl bg-[#DCDCDC]/85 px-4 py-3 font-medium">
                  Order ID
                </th>
                <th className="bg-[#DCDCDC]/85 px-4 py-3 font-medium">
                  Customer
                </th>
                <th className="bg-[#DCDCDC]/85 px-4 py-3 font-medium">Items</th>
                <th className="bg-[#DCDCDC]/85 px-4 py-3 font-medium">Total</th>
                <th className="bg-[#DCDCDC]/85 px-4 py-3 font-medium">
                  Status
                </th>
                <th className="bg-[#DCDCDC]/85 px-4 py-3 font-medium">Time</th>
                <th className="rounded-r-xl bg-[#DCDCDC]/85 px-4 py-3 font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {visible.map((order) => {
                const total =
                  order.items.reduce((sum, i) => sum + i.price * i.qty, 0) +
                  order.deliveryFee;

                return (
                  <tr
                    key={order.id}
                    className="transition hover:bg-surface/60"
                  >
                    <td className="whitespace-nowrap px-4 py-3.5 font-medium text-navy">
                      #{order.id}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-navy">
                      {order.customer.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-navy">
                      {order.itemsSummary}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 font-medium text-navy">
                      {naira(total)}
                    </td>
                    <td
                      className={`whitespace-nowrap px-4 py-3.5 font-medium ${statusText[order.status]}`}
                    >
                      {shortStatusLabel[order.status]}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5 text-navy">
                      {order.time}
                    </td>
                    <td className="whitespace-nowrap px-4 py-3.5">
                      <Link
                        href={`/orders/${order.id}`}
                        className="inline-block rounded-lg border border-gray-300 px-4 py-1 text-xs font-medium text-navy transition hover:border-pink hover:text-pink"
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

      {/* Pagination Footer */}
      <div className="flex flex-col justify-between gap-3 text-[11px] text-gray-500 sm:flex-row sm:items-center">
        <span>
          Showing {filtered.length === 0 ? 0 : start + 1}-
          {start + visible.length} of {filtered.length} orders
        </span>

        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className="px-2 py-1 transition hover:text-navy disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            &lt; Previous
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition cursor-pointer ${
                p === safePage
                  ? "bg-[#001D39] font-semibold text-white"
                  : "text-gray-500 hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            className="px-2 py-1 transition hover:text-navy disabled:opacity-40 cursor-pointer disabled:cursor-default"
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
