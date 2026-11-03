"use client";
import { Bank } from "@/types";
import { FormEvent, useState } from "react";
import { Field, inputClass } from "../ui/form-input";
import { banks } from "@/constants/settings";
import { primaryBtn, secondaryBtn } from "../ui/button";

export function BankForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: Bank;
  onSave: (b: Bank) => void;
  onCancel: () => void;
}) {
  const [bank, setBank] = useState(initial.bank);
  const [accountName, setAccountName] = useState(initial.accountName);
  const [accountNumber, setAccountNumber] = useState("");
  const [errors, setErrors] = useState<{
    accountName?: string;
    accountNumber?: string;
  }>({});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    if (!accountName.trim()) next.accountName = "Enter the account name";
    if (!/^\d{10}$/.test(accountNumber))
      next.accountNumber = "Nigerian account numbers are 10 digits";
    setErrors(next);
    if (Object.keys(next).length) return;
    onSave({ bank, accountName: accountName.trim(), accountNumber });
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <Field label="Bank">
        <select
          value={bank}
          onChange={(e) => setBank(e.target.value)}
          className={inputClass}
        >
          {banks.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </Field>
      <Field label="Account name" error={errors.accountName}>
        <input
          value={accountName}
          onChange={(e) => setAccountName(e.target.value)}
          className={inputClass}
        />
      </Field>
      <Field label="Account number" error={errors.accountNumber}>
        <input
          inputMode="numeric"
          maxLength={10}
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value.replace(/\D/g, ""))}
          className={inputClass}
          placeholder="10 digits"
        />
      </Field>
      <div className="flex justify-end gap-2 pt-2">
        <button type="button" onClick={onCancel} className={secondaryBtn}>
          Cancel
        </button>
        <button type="submit" className={primaryBtn}>
          Save
        </button>
      </div>
    </form>
  );
}
