"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { riderDeliveriesById } from "@/constants/rider";

function RiderActiveDeliveryContent() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const delivery = riderDeliveriesById[id] ?? {
    id,
    customer: "Judith Oluchi",
    phone: "0801 234 5678",
    pickup: "Store A",
    dropoff: "Student Hostel, Main Campus",
    distance: "2.5 km",
    eta: "15 mins",
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Active Delivery</h1>
        <p className="text-xs text-gray-600">Manage your ongoing delivery</p>
        <p className="text-xs font-semibold text-[#001D39]">#{delivery.id}</p>
        <p className="mt-2 text-xs font-semibold text-emerald-500">
          IN PROGRESS
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr]">
        <section className="rounded-2xl border border-border bg-white p-5">
          <h2 className="text-sm font-semibold text-[#001D39]">
            Delivery Route
          </h2>

          <div className="mt-3 flex flex-wrap justify-between gap-4 text-xs">
            <div>
              <p className="text-[11px] text-gray-500">Pickup Location</p>
              <p className="font-semibold text-[#001D39]">{delivery.pickup}</p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Drop-off Location</p>
              <p className="font-semibold text-[#001D39]">{delivery.dropoff}</p>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-border bg-[#EFEAE2]">
            <svg
              viewBox="0 0 520 210"
              className="w-full"
              role="img"
              aria-label="Delivery route map"
            >
              <rect width="520" height="210" fill="#F2EDE4" />
              <path
                d="M0 150 Q120 110 210 130 T440 70 L520 0 L520 210 L0 210 Z"
                fill="#E5DFD3"
              />
              <path
                d="M360 210 Q420 110 520 40 L520 210 Z"
                fill="#06B6D4"
              />
              <path
                d="M-10 40 L210 120 L480 20 M140 -10 L195 220 M60 210 L260 40"
                stroke="#FFFFFF"
                strokeWidth="12"
                fill="none"
              />
              <path
                d="M150 55 L175 112 L345 148"
                stroke="#FF4B7D"
                strokeWidth="3"
                strokeDasharray="6 4"
                fill="none"
              />
              <circle cx="150" cy="55" r="14" fill="#E11D48" />
              <circle cx="150" cy="55" r="5" fill="#FFFFFF" />
              <circle cx="175" cy="112" r="14" fill="#E11D48" />
              <polygon
                points="175,104 178,113 186,113 179,118 182,126 175,121 168,126 171,118 164,113 172,113"
                fill="#FFFFFF"
              />
              <circle cx="345" cy="148" r="14" fill="#E11D48" />
              <circle cx="345" cy="148" r="5" fill="#FFFFFF" />
            </svg>
          </div>

          <div className="mt-3 flex flex-wrap gap-8 text-xs text-[#001D39]">
            <span>
              Distance: <strong>{delivery.distance}</strong>
            </span>
            <span>
              Estimated: <strong>{delivery.eta}</strong>
            </span>
          </div>
        </section>

        <section className="flex flex-col justify-between rounded-2xl border border-border bg-white p-5">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-[#001D39]">
              Customer Information
            </h2>
            <div>
              <p className="text-[11px] text-gray-500">Customer</p>
              <p className="text-xs font-semibold text-[#001D39]">
                {delivery.customer}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Phone Number</p>
              <p className="text-xs font-semibold text-[#001D39]">
                {delivery.phone}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500">Delivery Address</p>
              <p className="text-xs font-semibold text-[#001D39]">
                {delivery.dropoff}
              </p>
            </div>
          </div>

          <a
            href={`tel:${delivery.phone.replace(/\s+/g, "")}`}
            className="mt-6 block w-full rounded-lg bg-[#FF5B88] py-2.5 text-center text-xs font-semibold text-white transition hover:bg-pink-hover"
          >
            Contact Customer
          </a>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-white p-5">
        <h2 className="text-sm font-semibold text-[#001D39]">
          Delivery Progress
        </h2>

        <div className="mx-auto my-6 grid max-w-2xl grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center gap-1.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-xs font-semibold text-[#001D39]">
              Order Accepted
            </p>
            <p className="text-[11px] text-emerald-500">Completed</p>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="h-10 w-10 rounded-full bg-[#FF5B88]" />
            <p className="text-xs font-semibold text-[#001D39]">
              Order Picked Up
            </p>
            <p className="text-[11px] text-pink">In Progress</p>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <div className="h-10 w-10 rounded-full bg-gray-400" />
            <p className="text-xs font-semibold text-[#001D39]">Delivered</p>
            <p className="text-[11px] text-gray-400">Pending</p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <Link
            href={`/rider/deliveries/${delivery.id}`}
            className="text-xs font-medium text-gray-500 hover:underline"
          >
            &lt; Back to details
          </Link>

          <button
            type="button"
            onClick={() =>
              router.push(`/rider/deliveries/${delivery.id}/confirmation`)
            }
            className="rounded-lg bg-[#FF5B88] px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-hover cursor-pointer"
          >
            Mark as Delivered
          </button>
        </div>
      </section>
    </div>
  );
}

export default function RiderActiveDeliveryPage() {
  return (
    <Suspense
      fallback={<p className="text-sm text-gray-500">Loading active delivery...</p>}
    >
      <RiderActiveDeliveryContent />
    </Suspense>
  );
}
