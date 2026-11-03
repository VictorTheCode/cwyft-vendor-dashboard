"use client";

import { Bank } from "@/types";
import { useState } from "react";
import { Modal } from "../ui/modal";
import { BankForm } from "./bank-form";

export function BankDetails() {
  const [bank, setBank] = useState<Bank>({
    bank: "Providus Bank",
    accountName: "David's Kitchen",
    accountNumber: "0123456789",
  });
  const [open, setOpen] = useState(false);

  // Show only the last 4 digits
  const masked = "••••••" + bank.accountNumber.slice(-4);

  return (
    <section className="max-w-md">
      <h2 className="text-sm font-semibold text-navy">Bank Account Details</h2>
      <p className="text-[11px] text-gray-500">
        Manage the bank account where you receive payouts
      </p>
      <div className="mt-2 rounded-xl border border-border bg-white p-4">
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-semibold text-navy">Bank Name</p>
            <p className="mt-1 text-[11px] text-gray-600">{bank.bank}</p>
          </div>
          <div>
            <p className="font-semibold text-navy">Account Name</p>
            <p className="mt-1 text-[11px] text-gray-600">{bank.accountName}</p>
          </div>
          <div>
            <p className="font-semibold text-navy">Account Number</p>
            <p className="mt-1 text-[11px] text-gray-600">{masked}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className="rounded-md bg-pink px-4 py-2 text-[11px] font-medium text-white hover:bg-pink/90"
          >
            Update Bank Details
          </button>
        </div>
      </div>

      <Modal
        open={open}
        title="Update bank details"
        onClose={() => setOpen(false)}
      >
        <BankForm
          initial={bank}
          onSave={(b) => {
            setBank(b);
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />
      </Modal>
    </section>
  );
}
