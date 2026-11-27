"use client";

import type { ReactNode } from "react";
import {
  Bike,
  HelpCircle,
  History,
  LayoutGrid,
  Settings,
  User,
  Wallet,
} from "lucide-react";
import { PortalShell, type PortalNavItem } from "@/components/portal/portal-shell";

const riderNav: PortalNavItem[] = [
  { label: "Dashboard", href: "/rider/dashboard", icon: <LayoutGrid className="h-4 w-4" /> },
  { label: "Deliveries", href: "/rider/deliveries", icon: <Bike className="h-4 w-4" /> },
  { label: "Earnings", href: "/rider/earnings", icon: <Wallet className="h-4 w-4" /> },
  { label: "Delivery History", href: "/rider/history", icon: <History className="h-4 w-4" /> },
  { label: "Profile", href: "/rider/profile", icon: <User className="h-4 w-4" /> },
  { label: "Settings", href: "/rider/settings", icon: <Settings className="h-4 w-4" /> },
  { label: "Help & Support", href: "/rider/support", icon: <HelpCircle className="h-4 w-4" /> },
];

export default function RiderDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <PortalShell
      navItems={riderNav}
      basePath="/rider/dashboard"
      logoutHref="/rider/login"
      userLabel="David"
    >
      {children}
    </PortalShell>
  );
}
