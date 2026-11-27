"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Wallet } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { BankForm } from "@/components/settings/bank-form";
import { riderEarningsRanges, riderTransactions } from "@/constants/rider";
import { niceTop, short } from "@/lib/chart";
import { naira } from "@/lib/format";
import type { Bank } from "@/types";

type RangeKey = keyof typeof riderEarningsRanges;

export default function RiderEarningsPage() {
  const [range, setRange] = useState<RangeKey>("Last 7 Days");
  const [bankOpen, setBankOpen] = useState(false);
  const [bank, setBank] = useState<Bank>({
    bank: "Providus Bank",
    accountName: "David Elue",
    accountNumber: "0123456789",
  });

  const data = riderEarningsRanges[range];
  const masked = "•••••••" + bank.accountNumber.slice(-4);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Earnings Overview</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          Track your earnings and payout activities
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
            <Wallet className="h-4 w-4 text-[#001D39]" />
            <span>Available Balance</span>
          </div>
          <p className="mt-2.5 text-2xl font-bold text-[#001D39]">₦12,500</p>
          <p className="mt-1 text-[11px] text-gray-400">Ready for the payout</p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Clock className="h-4 w-4 text-[#001D39]" />
            <span>Pending Earnings</span>
          </div>
          <p className="mt-2.5 text-2xl font-bold text-[#001D39]">₦3,500</p>
          <p className="mt-1 text-[11px] text-gray-400">
            From ongoing deliveries
          </p>
        </div>
      </div>

      {/* Chart + Payment Info */}
      <div>
        <h2 className="text-base font-semibold text-[#001D39]">
          Earnings Overview
        </h2>
        <p className="mb-3 text-xs text-gray-500">
          Your earnings over the last 7 days
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-gray-500">Earning This Week</p>
                <p className="mt-0.5 text-2xl font-bold text-[#001D39]">
                  {naira(data.total)}
                </p>
              </div>

              <select
                value={range}
                onChange={(e) => setRange(e.target.value as RangeKey)}
                aria-label="Earnings date range"
                className="h-8 rounded-lg border border-border bg-white px-2.5 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
              >
                {(Object.keys(riderEarningsRanges) as RangeKey[]).map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <PinkLineChart labels={[...data.labels]} values={[...data.values]} />
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-white p-5">
            <div>
              <h3 className="text-base font-semibold text-[#001D39]">
                Payment Information
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="text-[11px] text-gray-500">Bank Name</p>
                  <p className="mt-0.5 font-semibold text-[#001D39]">
                    {bank.bank}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500">Account Name</p>
                  <p className="mt-0.5 font-semibold text-[#001D39]">
                    {bank.accountName}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500">Account Number</p>
                  <p className="mt-0.5 font-semibold text-[#001D39]">
                    {masked}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-500">Next Payout</p>
                  <p className="mt-0.5 font-semibold text-[#001D39]">
                    Friday, 6 November
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setBankOpen(true)}
                className="rounded-lg bg-[#FF5B88] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-pink-hover cursor-pointer"
              >
                Manage Bank Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="rounded-2xl border border-border bg-white p-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#001D39]">
            Recent Transactions
          </h2>
          <Link
            href="/rider/history"
            className="text-xs font-medium text-pink hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-140 text-center text-xs">
            <thead className="border-b border-border text-gray-500">
              <tr>
                <th className="px-4 py-3 text-left font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Description</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 text-right font-medium">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {riderTransactions.map((t, idx) => (
                <tr key={idx} className="hover:bg-surface/50">
                  <td className="px-4 py-3 text-left text-[#001D39]">
                    {t.date}
                  </td>
                  <td className="px-4 py-3 text-[#001D39]">{t.desc}</td>
                  <td
                    className={`px-4 py-3 font-medium ${
                      t.type === "Delivery"
                        ? "text-emerald-500"
                        : "text-gray-400"
                    }`}
                  >
                    {t.type}
                  </td>
                  <td className="px-4 py-3 text-right font-medium text-[#001D39]">
                    + {naira(t.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        open={bankOpen}
        title="Manage bank details"
        onClose={() => setBankOpen(false)}
      >
        <BankForm
          initial={bank}
          onSave={(updated) => {
            setBank(updated);
            setBankOpen(false);
          }}
          onCancel={() => setBankOpen(false)}
        />
      </Modal>
    </div>
  );
}

function PinkLineChart({
  labels,
  values,
}: {
  labels: string[];
  values: number[];
}) {
  const W = 500;
  const H = 200;
  const left = 52;
  const right = 14;
  const top = 12;
  const bottom = 26;
  const plotW = W - left - right;
  const plotH = H - top - bottom;
  const max = niceTop(Math.max(...values));

  const x = (i: number) => left + (i / (values.length - 1)) * plotW;
  const y = (v: number) => top + plotH - (v / max) * plotH;
  const ticks = [0, 1, 2, 3, 4].map((i) => (max / 4) * i);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="mt-4 w-full">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={left} x2={W - right} y1={y(t)} y2={y(t)} stroke="#e5e7eb" />
          <text
            x={left - 8}
            y={y(t) + 3}
            textAnchor="end"
            fontSize="10"
            fill="#6b7280"
          >
            {short(t)}
          </text>
        </g>
      ))}
      <polyline
        points={values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
        fill="none"
        stroke="#FF5B88"
        strokeWidth="2"
      />
      {values.map((v, i) => (
        <circle key={i} cx={x(i)} cy={y(v)} r="3" fill="#FF5B88" />
      ))}
      {labels.map((l, i) => (
        <text
          key={l}
          x={x(i)}
          y={H - 6}
          textAnchor="middle"
          fontSize="10"
          fill="#6b7280"
        >
          {l}
        </text>
      ))}
    </svg>
  );
}
