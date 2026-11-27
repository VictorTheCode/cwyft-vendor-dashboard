"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { riderDeliveriesById } from "@/constants/rider";
import { naira } from "@/lib/format";

function RiderDeliveryConfirmationContent() {
  const { id } = useParams<{ id: string }>();
  const delivery = riderDeliveriesById[id] ?? {
    id,
    customer: "Judith Oluchi",
    pickup: "Store A",
    dropoff: "Student Hostel, Main Campus",
    amount: 1500,
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">
          Delivery Confirmation
        </h1>
        <p className="text-xs text-gray-600">
          Confirm that the order has been successfully delivered
        </p>
        <p className="text-xs font-semibold text-[#001D39]">#{delivery.id}</p>
        <p className="mt-2 text-xs font-semibold text-emerald-500">DELIVERED</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        <section className="rounded-2xl border border-border bg-white p-5 space-y-4">
          <h2 className="text-base font-semibold text-[#001D39]">
            Delivery Summary
          </h2>

          <div>
            <p className="text-[11px] text-gray-500">Customer</p>
            <p className="text-xs font-semibold text-[#001D39]">
              {delivery.customer}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500">Pickup Location</p>
            <p className="text-xs font-semibold text-[#001D39]">
              {delivery.pickup}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500">Drop-off Location</p>
            <p className="text-xs font-semibold text-[#001D39]">
              {delivery.dropoff}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500">Completed At</p>
            <p className="text-xs font-semibold text-[#001D39]">
              Today, 10:45 AM
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5">
          <h2 className="text-base font-semibold text-[#001D39]">
            Earnings Summary
          </h2>

          <div className="mt-5 space-y-3 border-b border-border pb-4 text-xs">
            <div className="flex justify-between">
              <span className="font-medium text-[#001D39]">Delivery Fee</span>
              <span className="font-semibold text-[#001D39]">
                {naira(delivery.amount)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-[#001D39]">Tip / Bonus</span>
              <span className="font-semibold text-[#001D39]">₦0</span>
            </div>
          </div>

          <div className="mt-4 flex justify-between text-xs font-bold text-[#001D39]">
            <span>Total Earned</span>
            <span>{naira(delivery.amount)}</span>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap justify-end gap-3">
        <Link
          href="/rider/deliveries"
          className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-xs font-semibold text-[#001D39] transition hover:bg-gray-50"
        >
          Back to Deliveries
        </Link>
        <Link
          href="/rider/history"
          className="rounded-lg bg-[#FF5B88] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-hover"
        >
          View Delivery History
        </Link>
      </div>
    </div>
  );
}

export default function RiderDeliveryConfirmationPage() {
  return (
    <Suspense
      fallback={<p className="text-sm text-gray-500">Loading confirmation...</p>}
    >
      <RiderDeliveryConfirmationContent />
    </Suspense>
  );
}
