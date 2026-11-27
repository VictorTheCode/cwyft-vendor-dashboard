"use client";

import { useState } from "react";
import { AdminTableView } from "@/components/admin/admin-table-view";
import {
  initialAdminTransactions,
  type AdminTransaction,
} from "@/constants/admin";
import { naira } from "@/lib/format";

const txnColor: Record<AdminTransaction["status"], string> = {
  Successful: "text-emerald-500",
  Pending: "text-amber-400",
  Failed: "text-red-500",
};

export default function AdminTransactionsPage() {
  const [txns, setTxns] = useState(initialAdminTransactions);

  function setStatus(id: string, status: AdminTransaction["status"]) {
    setTxns((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
  }

  return (
    <AdminTableView
      title="Transactions"
      subtitle="Monitor and manage all payments and refunds processed on Cwyft."
      kpis={[
        { label: "Total Transactions", value: "1,840", hint: "All transactions" },
        { label: "Successful", value: "1,520", hint: "Payments completed" },
        { label: "Pending", value: "210", hint: "Awaiting confirmation" },
        { label: "Failed", value: "110", hint: "Unsuccessful payments" },
      ]}
      tableTitle="All Transactions"
      searchPlaceholder="Search transactions..."
      rows={txns}
      filterOptions={["All", "Successful", "Pending", "Failed"]}
      matchesSearch={(t, q) =>
        t.id.toLowerCase().includes(q) ||
        t.orderId.toLowerCase().includes(q) ||
        t.consumer.toLowerCase().includes(q)
      }
      matchesFilter={(t, f) => t.status === f}
      columns={[
        { header: "Transaction ID", render: (t) => t.id },
        { header: "Order ID", render: (t) => t.orderId },
        { header: "Consumer", render: (t) => t.consumer },
        { header: "Payment method", render: (t) => t.method },
        { header: "Amount", render: (t) => naira(t.amount) },
        { header: "Date", render: (t) => t.date },
        {
          header: "Status",
          render: (t) => (
            <span className={`font-medium ${txnColor[t.status]}`}>
              {t.status}
            </span>
          ),
        },
      ]}
      rowAction={(t) => [
        { label: "Mark Successful", onClick: () => setStatus(t.id, "Successful") },
        { label: "Mark Pending", onClick: () => setStatus(t.id, "Pending") },
        { label: "Mark Failed", onClick: () => setStatus(t.id, "Failed") },
      ]}
      exportFileName="cwyft-transactions.csv"
      csvHeaders={[
        "Transaction ID",
        "Order ID",
        "Consumer",
        "Payment method",
        "Amount",
        "Date",
        "Status",
      ]}
      toCsvRow={(t) => [
        t.id,
        t.orderId,
        t.consumer,
        t.method,
        t.amount,
        t.date,
        t.status,
      ]}
      totalLabelPrefix="transactions"
    />
  );
}
