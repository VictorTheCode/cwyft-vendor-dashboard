"use client";

import { useState } from "react";
import { AdminTableView } from "@/components/admin/admin-table-view";
import { initialAdminRiders } from "@/constants/admin";

export default function AdminRidersPage() {
  const [riders, setRiders] = useState(initialAdminRiders);

  function toggleStatus(id: string) {
    setRiders((prev) =>
      prev.map((r) =>
        r.id === id
          ? { ...r, status: r.status === "Active" ? "Pending" : "Active" }
          : r,
      ),
    );
  }

  return (
    <AdminTableView
      title="Riders"
      subtitle="Monitor and manage delivery riders registered on Cwyft."
      kpis={[
        { label: "Total Riders", value: "94" },
        { label: "Active Riders", value: "72" },
        { label: "Pending Approval", value: "12" },
      ]}
      tableTitle="All Riders"
      searchPlaceholder="Search riders..."
      rows={riders}
      filterOptions={["All", "Active", "Pending"]}
      matchesSearch={(r, q) =>
        r.name.toLowerCase().includes(q) || r.email.toLowerCase().includes(q)
      }
      matchesFilter={(r, f) => r.status === f}
      columns={[
        { header: "Rider", render: (r) => r.name },
        { header: "Email", render: (r) => r.email },
        { header: "Phone", render: (r) => r.phone },
        { header: "Deliveries", render: (r) => r.deliveries },
        {
          header: "Status",
          render: (r) => (
            <span
              className={`font-medium ${r.status === "Active" ? "text-emerald-500" : "text-gray-400"}`}
            >
              {r.status}
            </span>
          ),
        },
      ]}
      rowAction={(r) => [
        {
          label: r.status === "Active" ? "Set Pending" : "Approve Rider",
          onClick: () => toggleStatus(r.id),
        },
      ]}
      exportFileName="cwyft-riders.csv"
      csvHeaders={["Rider", "Email", "Phone", "Deliveries", "Status"]}
      toCsvRow={(r) => [r.name, r.email, r.phone, r.deliveries, r.status]}
      totalLabelPrefix="riders"
    />
  );
}
