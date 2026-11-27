"use client";

import type { ReactNode } from "react";
import {
  BarChart3,
  Bike,
  LayoutGrid,
  Settings,
  ShoppingBag,
  Store,
  Users,
  Wallet,
} from "lucide-react";
import { PortalShell, type PortalNavItem } from "@/components/portal/portal-shell";

const adminNav: PortalNavItem[] = [
  { label: "Dashboard", href: "/admin/dashboard", icon: <LayoutGrid className="h-4 w-4" /> },
  { label: "Consumers", href: "/admin/consumers", icon: <Users className="h-4 w-4" /> },
  { label: "Vendors", href: "/admin/vendors", icon: <Store className="h-4 w-4" /> },
  { label: "Riders", href: "/admin/riders", icon: <Bike className="h-4 w-4" /> },
  { label: "Orders", href: "/admin/orders", icon: <ShoppingBag className="h-4 w-4" /> },
  { label: "Transactions", href: "/admin/transactions", icon: <Wallet className="h-4 w-4" /> },
  { label: "Analytics", href: "/admin/analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "Settings", href: "/admin/settings", icon: <Settings className="h-4 w-4" /> },
];

export default function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PortalShell
      navItems={adminNav}
      basePath="/admin/dashboard"
      logoutHref="/admin/login"
      dashboardTitle="Dashboard"
    >
      {children}
    </PortalShell>
  );
}
