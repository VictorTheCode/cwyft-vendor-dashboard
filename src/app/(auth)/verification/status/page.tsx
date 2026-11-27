"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Check, Clock, Info } from "lucide-react";

function VerificationStatusContent() {
  const searchParams = useSearchParams();
  const typeParam = searchParams.get("type");
  const verificationType =
    typeParam === "CAC" || typeParam === "NIN" ? typeParam : "CAC/NIN";

  const details = [
    { label: "Verification type", value: verificationType, tone: "text-[#001D39]" },
    { label: "Registration fee", value: "Paid", tone: "text-[#001D39]" },
    { label: "Submitted on", value: "Nov 10, 2026", tone: "text-[#001D39]" },
    {
      label: "Estimated review time",
      value: "Within 24 hours",
      tone: "text-[#001D39]",
    },
    { label: "Status", value: "Pending", tone: "text-amber-500" },
  ];

  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      {/* Top Clock Emblem */}
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-pink bg-pink/5 text-[#001D39]">
        <Clock className="h-7 w-7" />
      </div>

      {/* Heading */}
      <div className="mb-6 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#001D39]">
          Verification in Progress
        </h1>
        <p className="mt-1 text-sm text-[#001D39]/80">
          Your business information has been submitted successfully
        </p>
      </div>

      {/* Submission Details Card */}
      <div className="w-full rounded-2xl border border-border bg-white p-6 shadow-xs">
        <h2 className="mb-2 text-sm font-semibold text-[#001D39]">
          Submission details
        </h2>
        <div className="divide-y divide-border">
          {details.map((row) => (
            <div
              key={row.label}
              className="flex items-center justify-between py-4 text-xs sm:text-sm"
            >
              <span className="text-gray-500">{row.label}</span>
              <span className={`font-semibold ${row.tone}`}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* What happens next */}
      <div className="mt-6 w-full space-y-5">
        <h3 className="text-sm font-semibold text-[#001D39]">
          What happens next?
        </h3>

        <div className="mx-auto flex max-w-md items-start justify-between">
          <div className="flex w-24 flex-col items-center gap-1.5 text-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink text-white">
              <Check className="h-4 w-4 stroke-[2.5]" />
            </div>
            <span className="text-[11px] text-gray-600">
              Information submitted
            </span>
          </div>

          <div className="mt-4 h-0.5 flex-1 bg-pink" />

          <div className="flex w-28 flex-col items-center gap-1.5 text-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-pink bg-white text-pink">
              <Clock className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-medium text-pink">
              Cwyft reviews your details
            </span>
          </div>

          <div className="mt-4 h-0.5 flex-1 bg-gray-300" />

          <div className="flex w-28 flex-col items-center gap-1.5 text-center">
            <div className="h-8 w-8 rounded-full bg-gray-300" />
            <span className="text-[11px] text-gray-500">
              Account approved - Start selling
            </span>
          </div>
        </div>

        {/* Info Banner */}
        <div className="flex items-start gap-3 rounded-xl border border-pink bg-[#FFF0F4] p-4">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-pink text-white">
            <Info className="h-3.5 w-3.5" />
          </span>
          <div className="text-xs text-[#001D39]">
            <p className="font-semibold">While you wait</p>
            <p className="mt-0.5 text-[11px] text-[#001D39]/80">
              You can return to your dashboard, but publishing products and
              receiving orders will remain unavailable until your business is
              approved
            </p>
          </div>
        </div>

        <div className="pt-2 text-center">
          <Link
            href="/dashboard"
            className="inline-block rounded-xl bg-[#001D39] px-10 py-3 text-sm font-medium text-white transition hover:bg-[#001D39]/90"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function VerificationStatusPage() {
  return (
    <Suspense
      fallback={
        <p className="text-sm text-gray-500">Loading verification status...</p>
      }
    >
      <VerificationStatusContent />
    </Suspense>
  );
}
