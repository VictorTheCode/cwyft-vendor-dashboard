"use client";

import { useState } from "react";
import Link from "next/link";
import { Bike, MapPin, Star, Wallet } from "lucide-react";
import { riderDashboardRecent } from "@/constants/rider";
import { naira } from "@/lib/format";

export default function RiderDashboardPage() {
  const [online, setOnline] = useState(true);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Welcome back, David</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          Here&apos;s your delivery overview for today.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Bike className="h-4 w-4 text-amber-500" />
            <span>Total Deliveries</span>
          </div>
          <p className="mt-2.5 text-2xl font-bold text-[#001D39]">24</p>
          <p className="mt-1 text-[11px] text-gray-400">Today</p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Wallet className="h-4 w-4 text-[#001D39]" />
            <span>Total Earnings</span>
          </div>
          <p className="mt-2.5 text-2xl font-bold text-[#001D39]">₦48,500</p>
          <p className="mt-1 text-[11px] text-gray-400">This Week</p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span>Rider Rating</span>
          </div>
          <p className="mt-2.5 text-2xl font-bold text-[#001D39]">4.8/5</p>
          <p className="mt-1 text-[11px] text-gray-400">Based on reviews</p>
        </div>
      </div>

      {/* Current Delivery + Availability */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl border border-border bg-white p-5">
          <h2 className="text-base font-semibold text-[#001D39]">
            Current Delivery
          </h2>
          <p className="text-xs font-semibold text-[#001D39]">Order #CY-1028</p>

          <div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gray-400" />
                <div>
                  <p className="text-[11px] text-gray-500">Pickup Location</p>
                  <p className="font-semibold text-[#001D39]">
                    David&apos;s Kitchen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-pink" />
                <div>
                  <p className="text-[11px] text-gray-500">Drop-off Location</p>
                  <p className="font-semibold text-[#001D39]">
                    Student Hostel, Main Campus
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/rider/deliveries/CY-1028/active"
              className="inline-flex items-center justify-center rounded-lg bg-[#FF5B88] px-6 py-2 text-xs font-semibold text-white transition hover:bg-pink-hover"
            >
              View Details →
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-2xl border border-border bg-white p-5">
          <div>
            <h2 className="text-base font-semibold text-[#001D39]">
              Availability
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <span
                className={`h-2.5 w-2.5 rounded-full ${online ? "bg-emerald-500" : "bg-gray-400"}`}
              />
              <span
                className={`text-xs font-semibold ${online ? "text-emerald-600" : "text-gray-500"}`}
              >
                {online ? "ONLINE" : "OFFLINE"}
              </span>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              {online
                ? "You are currently available for delivery requests"
                : "You are offline and will not receive new requests"}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setOnline(!online)}
            className="mt-4 w-full rounded-lg border border-pink py-2 text-xs font-medium text-pink transition hover:bg-pink/10 cursor-pointer"
          >
            {online ? "Go Offline" : "Go Online"}
          </button>
        </div>
      </div>

      {/* Recent Deliveries */}
      <div className="rounded-2xl border border-border bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#001D39]">
            Recent Deliveries
          </h2>
          <Link
            href="/rider/history"
            className="text-xs font-medium text-pink hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-150 text-center text-xs">
            <thead className="border-b border-border text-gray-500">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Order ID</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Amount</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 text-right font-medium">
                  Date &amp; Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {riderDashboardRecent.map((item) => (
                <tr key={item.id} className="hover:bg-surface/50">
                  <td className="px-4 py-3.5 text-left font-medium text-[#001D39]">
                    <Link
                      href={`/rider/deliveries/${item.id}`}
                      className="hover:underline"
                    >
                      #{item.id}
                    </Link>
                  </td>
                  <td className="px-4 py-3.5 text-[#001D39]">{item.customer}</td>
                  <td className="px-4 py-3.5 text-[#001D39]">
                    {naira(item.amount)}
                  </td>
                  <td
                    className={`px-4 py-3.5 font-medium ${
                      item.status === "Completed"
                        ? "text-emerald-500"
                        : "text-cyan-500"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="px-4 py-3.5 text-right text-[#001D39]">
                    {item.dateTime}
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
