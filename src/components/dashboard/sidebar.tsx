"use client";
import { Suspense } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  OrdersIcon,
  MenuMgmtIcon,
  InventoryIcon,
  AnalyticsIcon,
  EarningsIcon,
  ProfileIcon,
  SettingsIcon,
  SupportIcon,
  LogoutIcon,
} from "@/constants/svgs";

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { label: "Orders", href: "/orders", icon: OrdersIcon },
  { label: "Menu Management", href: "/menu", icon: MenuMgmtIcon },
  { label: "Inventory", href: "/inventory", icon: InventoryIcon },
  { label: "Analytics", href: "/analytics", icon: AnalyticsIcon },
  { label: "Earnings & Payouts", href: "/earnings", icon: EarningsIcon },
  { label: "Business Profile", href: "/profile", icon: ProfileIcon },
  { label: "Settings", href: "/settings", icon: SettingsIcon },
  { label: "Help & Support", href: "/support", icon: SupportIcon },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 px-3 space-y-0.5">
      {navItems.map((item) => {
        const isActive = pathname
          ? item.href === "/dashboard"
            ? pathname === "/dashboard"
            : pathname.startsWith(item.href)
          : false;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition ${
              isActive
                ? "bg-[#FF5B88] text-white font-medium"
                : "text-white/60 hover:bg-white/8 hover:text-white"
            }`}
          >
            <item.icon />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function NavLinksFallback() {
  return (
    <nav className="flex-1 px-3 space-y-0.5">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] transition text-white/60 hover:bg-white/8 hover:text-white"
        >
          <item.icon />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="w-52 bg-navy flex flex-col h-screen sticky top-0 shrink-0">
      {/* Logo */}
      <div className="px-5 pt-6 pb-5">
        <Link href="/dashboard">
          <Logo width={90} height={28} />
        </Link>
      </div>

      {/* Navigation */}
      <Suspense fallback={<NavLinksFallback />}>
        <NavLinks />
      </Suspense>

      {/* Log Out */}
      <div className="px-5 py-5 border-t border-white/10">
        <button className="flex items-center gap-2.5 text-[13px] text-white/50 hover:text-white transition cursor-pointer">
          <LogoutIcon />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
