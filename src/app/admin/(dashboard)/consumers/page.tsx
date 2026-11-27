"use client";

import { useState } from "react";
import { AdminTableView } from "@/components/admin/admin-table-view";
import { initialAdminConsumers } from "@/constants/admin";

export default function AdminConsumersPage() {
  const [consumers, setConsumers] = useState(initialAdminConsumers);

  const activeCount = consumers.filter((c) => c.status === "Active").length;

  function toggleStatus(id: string) {
    setConsumers((prev) =>
      prev.map((c) =>
        c.id === id
          ? { ...c, status: c.status === "Active" ? "Inactive" : "Active" }
          : c,
      ),
    );
  }

  return (
    <AdminTableView
      title="Consumers"
      subtitle="Monitor and manage consumers on the Cwyft platform."
      kpis={[
        { label: "Total Consumers", value: "2,450" },
        { label: "Active Consumers", value: String(2180 + activeCount - 7) },
        { label: "New This Month", value: "125" },
      ]}
      tableTitle="All Consumers"
      searchPlaceholder="Search consumers..."
      rows={consumers}
      filterOptions={["All", "Active", "Inactive"]}
      matchesSearch={(c, q) =>
        c.name.toLowerCase().includes(q) || c.email.toLowerCase().includes(q)
      }
      matchesFilter={(c, f) => c.status === f}
      columns={[
        { header: "Consumer", render: (c) => c.name },
        { header: "Email", render: (c) => c.email },
        { header: "Phone", render: (c) => c.phone },
        { header: "Orders", render: (c) => c.orders },
        { header: "Date Joined", render: (c) => c.dateJoined },
        {
          header: "Status",
          render: (c) => (
            <span
              className={`font-medium ${c.status === "Active" ? "text-emerald-500" : "text-gray-400"}`}
            >
              {c.status}
            </span>
          ),
        },
      ]}
      rowAction={(c) => [
        {
          label: c.status === "Active" ? "Deactivate" : "Activate",
          onClick: () => toggleStatus(c.id),
        },
      ]}
      exportFileName="cwyft-consumers.csv"
      csvHeaders={["Consumer", "Email", "Phone", "Orders", "Date Joined", "Status"]}
      toCsvRow={(c) => [c.name, c.email, c.phone, c.orders, c.dateJoined, c.status]}
      totalLabelPrefix="consumers"
    />
  );
}
