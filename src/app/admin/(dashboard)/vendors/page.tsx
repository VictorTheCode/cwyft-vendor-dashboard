"use client";

import { useState } from "react";
import { AdminTableView } from "@/components/admin/admin-table-view";
import { initialAdminVendors, type AdminVendor } from "@/constants/admin";

const verColor: Record<AdminVendor["verification"], string> = {
  Verified: "text-emerald-500",
  Pending: "text-amber-400",
  Rejected: "text-red-500",
};

export default function AdminVendorsPage() {
  const [vendors, setVendors] = useState(initialAdminVendors);

  function setVerification(id: string, verification: AdminVendor["verification"]) {
    setVendors((prev) =>
      prev.map((v) =>
        v.id === id
          ? {
              ...v,
              verification,
              status: verification === "Verified" ? "Active" : v.status,
            }
          : v,
      ),
    );
  }

  return (
    <AdminTableView
      title="Vendors"
      subtitle="Monitor and manage food vendors registered on Cwyft."
      kpis={[
        { label: "Total Vendors", value: "186" },
        { label: "Verified vendors", value: "154" },
        { label: "Pending Verification", value: "32" },
      ]}
      tableTitle="All Vendors"
      searchPlaceholder="Search vendors..."
      rows={vendors}
      filterOptions={["All", "Verified", "Pending", "Rejected"]}
      matchesSearch={(v, q) =>
        v.vendor.toLowerCase().includes(q) ||
        v.owner.toLowerCase().includes(q) ||
        v.email.toLowerCase().includes(q)
      }
      matchesFilter={(v, f) => v.verification === f}
      columns={[
        { header: "Vendor", render: (v) => v.vendor },
        { header: "Owner", render: (v) => v.owner },
        { header: "Email", render: (v) => v.email },
        { header: "Orders", render: (v) => v.orders },
        {
          header: "Verification",
          render: (v) => (
            <span className={`font-medium ${verColor[v.verification]}`}>
              {v.verification}
            </span>
          ),
        },
        {
          header: "Status",
          render: (v) => (
            <span
              className={`font-medium ${v.status === "Active" ? "text-emerald-500" : "text-gray-400"}`}
            >
              {v.status}
            </span>
          ),
        },
      ]}
      rowAction={(v) => [
        { label: "Approve Vendor", onClick: () => setVerification(v.id, "Verified") },
        { label: "Reject Vendor", onClick: () => setVerification(v.id, "Rejected") },
      ]}
      exportFileName="cwyft-vendors.csv"
      csvHeaders={["Vendor", "Owner", "Email", "Orders", "Verification", "Status"]}
      toCsvRow={(v) => [
        v.vendor,
        v.owner,
        v.email,
        v.orders,
        v.verification,
        v.status,
      ]}
      totalLabelPrefix="vendors"
    />
  );
}
