"use client";

import { BackLink } from "@/components/dashboard/back-link";
import { MapPinIcon, PhoneIcon, UserIcon } from "@/components/icons";
import { Thumb } from "@/components/ui/thumb";
import { naira, nextStep, orders, statusText } from "@/constants/orders";
import { OrderStatus } from "@/types";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function OrderDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const order = orders[id];

  // Hooks must run before any early return, so this sits above the "not found" check
  const [status, setStatus] = useState<OrderStatus>(order?.status ?? "Pending");

  if (!order) {
    return (
      <div className="space-y-3">
        <BackLink />
        <h1 className="text-lg font-semibold text-navy">Order not found</h1>
        <p className="text-sm text-gray-500">
          We couldn&apos;t find an order with ID #{id}.
        </p>
      </div>
    );
  }

  const subtotal = order.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotal + order.deliveryFee;
  const step = nextStep[status];

  return (
    <div className="max-w-3xl space-y-5">
      {/* Header */}
      <div>
        <BackLink />
        <h1 className="mt-4 text-lg font-semibold text-navy">Order Details</h1>
        <p className="text-xs text-navy">
          #{order.id} . Placed {order.placedAt}
        </p>
        <p className={`mt-2 text-xs font-medium ${statusText[status]}`}>
          {status}
        </p>
      </div>

      {/* Customer + Items */}
      <div className="grid gap-5 md:grid-cols-2">
        <section className="rounded-xl border border-border bg-white p-5">
          <h2 className="text-sm font-semibold text-navy">Customer Details</h2>

          <div className="mt-4 space-y-3 text-xs text-gray-700">
            <p className="flex items-center gap-2">
              <UserIcon /> {order.customer.name}
            </p>
            <p className="flex items-center gap-2">
              <PhoneIcon /> {order.customer.phone}
            </p>
            <p className="flex items-center gap-2">
              <MapPinIcon /> {order.customer.address}
            </p>
          </div>
        </section>

        <section className="rounded-xl border border-border bg-white p-5">
          <h2 className="text-sm font-semibold text-navy">Order Items</h2>

          <div className="mt-4 space-y-3">
            {order.items.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-3 text-xs text-gray-700"
              >
                <Thumb src={item.image} alt={item.name} />
                <span className="flex-1">
                  {item.name} × {item.qty}
                </span>
                <span>{naira(item.price * item.qty)}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-1.5 border-t border-border pt-3 text-[11px] text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{naira(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>{naira(order.deliveryFee)}</span>
            </div>
          </div>

          <div className="mt-3 flex justify-between border-t border-border pt-3 text-xs font-semibold text-navy">
            <span>Total</span>
            <span>{naira(total)}</span>
          </div>
        </section>
      </div>

      {/* Actions */}
      <section className="flex flex-col gap-4 rounded-xl border border-border bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-sm font-semibold text-navy">Order Actions</h2>
          <p className="mt-0.5 text-[11px] text-gray-500">
            Update the order status based on your current process
          </p>
        </div>

        {status === "Pending" && (
          <div className="flex gap-3">
            <button
              onClick={() => setStatus("Preparing")}
              className="rounded-md bg-navy px-6 py-2 text-xs font-medium text-white transition hover:bg-navy/90"
            >
              Accept Offer
            </button>
            <button
              onClick={() => setStatus("Cancelled")}
              className="rounded-md border border-pink px-6 py-2 text-xs font-medium text-pink transition hover:bg-pink/10"
            >
              Reject Offer
            </button>
          </div>
        )}

        {step && (
          <button
            onClick={() => setStatus(step.next)}
            className="rounded-md bg-navy px-6 py-2 text-xs font-medium text-white transition hover:bg-navy/90"
          >
            {step.label}
          </button>
        )}

        {status === "Ready for Pickup" && (
          <p className="text-xs text-gray-500">Waiting for rider pickup.</p>
        )}
        {(status === "Delivered" || status === "Cancelled") && (
          <p className="text-xs text-gray-500">No further actions available.</p>
        )}
      </section>
    </div>
  );
}
