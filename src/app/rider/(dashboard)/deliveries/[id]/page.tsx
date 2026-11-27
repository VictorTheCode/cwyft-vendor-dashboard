"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { riderDeliveriesById } from "@/constants/rider";
import { naira } from "@/lib/format";

function RiderDeliveryDetailsContent() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const delivery = riderDeliveriesById[id];
  const [rejected, setRejected] = useState(false);

  if (!delivery) {
    return (
      <div className="space-y-3">
        <Link
          href="/rider/deliveries"
          className="text-xs font-medium text-[#001D39] hover:underline"
        >
          &lt; Back to Deliveries
        </Link>
        <h1 className="text-lg font-semibold text-[#001D39]">
          Delivery not found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl space-y-5">
      <div>
        <Link
          href="/rider/deliveries"
          className="text-xs font-medium text-[#001D39] hover:underline"
        >
          &lt; Back to Deliveries
        </Link>
        <h1 className="mt-3 text-xl font-bold text-[#001D39]">
          Delivery Details
        </h1>
        <p className="text-xs text-gray-600">Order #{delivery.id}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 space-y-4">
          <h2 className="text-sm font-semibold text-[#001D39]">
            Delivery Information
          </h2>

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
            <p className="text-[11px] text-gray-500">Distance</p>
            <p className="text-xs font-semibold text-[#001D39]">
              {delivery.distance}
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 space-y-4">
          <h2 className="text-sm font-semibold text-[#001D39]">
            Order Summary
          </h2>

          <div>
            <p className="text-[11px] text-gray-500">Customer</p>
            <p className="text-xs font-semibold text-[#001D39]">
              {delivery.customer}
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500">Items</p>
            <p className="text-xs font-semibold text-[#001D39]">
              {delivery.itemsCount} items
            </p>
          </div>
          <div>
            <p className="text-[11px] text-gray-500">Delivery Fee</p>
            <p className="text-xs font-semibold text-[#001D39]">
              {naira(delivery.amount)}
            </p>
          </div>
        </section>
      </div>

      <section className="flex flex-col items-end justify-end gap-3 rounded-2xl border border-border bg-white p-5 sm:flex-row">
        {rejected ? (
          <p className="text-xs font-medium text-red-500">
            Delivery request rejected.
          </p>
        ) : (
          <>
            <button
              type="button"
              onClick={() =>
                router.push(`/rider/deliveries/${delivery.id}/active`)
              }
              className="rounded-lg bg-[#001D39] px-7 py-2.5 text-xs font-semibold text-white transition hover:bg-[#001D39]/90 cursor-pointer"
            >
              Accept request
            </button>
            <button
              type="button"
              onClick={() => setRejected(true)}
              className="rounded-lg border border-pink px-7 py-2.5 text-xs font-semibold text-pink transition hover:bg-pink/10 cursor-pointer"
            >
              Reject request
            </button>
          </>
        )}
      </section>
    </div>
  );
}

export default function RiderDeliveryDetailsPage() {
  return (
    <Suspense
      fallback={<p className="text-sm text-gray-500">Loading delivery...</p>}
    >
      <RiderDeliveryDetailsContent />
    </Suspense>
  );
}
