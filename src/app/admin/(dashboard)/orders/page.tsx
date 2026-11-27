"use client";

import { useState } from "react";
import { AdminTableView } from "@/components/admin/admin-table-view";
import { initialAdminOrders, type AdminOrder } from "@/constants/admin";
import { naira } from "@/lib/format";

const statusColor: Record<AdminOrder["status"], string> = {
  Delivered: "text-emerald-500",
  Preparing: "text-amber-400",
  Cancelled: "text-red-500",
  "On the way": "text-cyan-500",
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState(initialAdminOrders);

  function setStatus(id: string, status: AdminOrder["status"]) {
    setOrders((prev) => prev.map((o) => (o.id === id ? { ...o, status } : o)));
  }

  return (
    <AdminTableView
      title="Orders"
      subtitle="Monitor and manage all food orders placed on Cwyft."
      kpis={[
        { label: "Total Orders", value: "1,280" },
        { label: "Completed Orders", value: "980" },
        { label: "Ongoing Orders", value: "180" },
        { label: "Cancelled Orders", value: "120" },
      ]}
      tableTitle="All Orders"
      searchPlaceholder="Search by order ID or consumer..."
      rows={orders}
      filterOptions={["All", "Delivered", "Preparing", "Cancelled"]}
      matchesSearch={(o, q) =>
        o.id.toLowerCase().includes(q) ||
        o.consumer.toLowerCase().includes(q) ||
        o.vendor.toLowerCase().includes(q)
      }
      matchesFilter={(o, f) => o.status === f}
      columns={[
        { header: "Order ID", render: (o) => o.id },
        { header: "Consumer", render: (o) => o.consumer },
        { header: "Vendor", render: (o) => o.vendor },
        { header: "Amount", render: (o) => naira(o.amount) },
        { header: "Date", render: (o) => o.date },
        {
          header: "Status",
          render: (o) => (
            <span className={`font-medium ${statusColor[o.status]}`}>
              {o.status}
            </span>
          ),
        },
      ]}
      rowAction={(o) => [
        { label: "Mark Delivered", onClick: () => setStatus(o.id, "Delivered") },
        { label: "Mark Preparing", onClick: () => setStatus(o.id, "Preparing") },
        { label: "Cancel Order", onClick: () => setStatus(o.id, "Cancelled") },
      ]}
      exportFileName="cwyft-admin-orders.csv"
      csvHeaders={["Order ID", "Consumer", "Vendor", "Amount", "Date", "Status"]}
      toCsvRow={(o) => [o.id, o.consumer, o.vendor, o.amount, o.date, o.status]}
      totalLabelPrefix="orders"
    />
  );
}
