"use client";

import { Suspense, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, ChevronDown, LogOut, Menu, User, X } from "lucide-react";
import { Logo } from "@/components/logo";

export type PortalNavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

interface PortalShellProps {
  navItems: PortalNavItem[];
  basePath: string;
  logoutHref: string;
  userLabel?: string;
  dashboardTitle?: string;
  children: ReactNode;
}

function NavItemsList({
  navItems,
  basePath,
  pathname,
  onNavigate,
}: {
  navItems: PortalNavItem[];
  basePath: string;
  pathname: string | null;
  onNavigate?: () => void;
}) {
  function isActive(href: string) {
    if (!pathname) return false;
    if (href === basePath) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav className="sidebar-scroll flex-1 space-y-0.5 overflow-y-auto px-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition ${
            isActive(item.href)
              ? "bg-[#FF5B88] font-medium text-white"
              : "text-white/65 hover:bg-white/8 hover:text-white"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}

function ActiveNavItems({
  navItems,
  basePath,
  onNavigate,
}: {
  navItems: PortalNavItem[];
  basePath: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  return (
    <NavItemsList
      navItems={navItems}
      basePath={basePath}
      pathname={pathname}
      onNavigate={onNavigate}
    />
  );
}

function ActiveDashboardTitle({
  basePath,
  dashboardTitle,
}: {
  basePath: string;
  dashboardTitle: string;
}) {
  const pathname = usePathname();
  if (pathname !== basePath) return null;
  return (
    <span className="text-base font-semibold text-[#001D39]">
      {dashboardTitle}
    </span>
  );
}

export function PortalShell({
  navItems,
  basePath,
  logoutHref,
  userLabel,
  dashboardTitle,
  children,
}: PortalShellProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const sidebarBody = (onNavigate?: () => void) => (
    <>
      <div className="px-5 pb-5 pt-6">
        <Link href={basePath} onClick={onNavigate}>
          <Logo width={90} height={28} />
        </Link>
      </div>

      <Suspense
        fallback={
          <NavItemsList
            navItems={navItems}
            basePath={basePath}
            pathname={null}
            onNavigate={onNavigate}
          />
        }
      >
        <ActiveNavItems
          navItems={navItems}
          basePath={basePath}
          onNavigate={onNavigate}
        />
      </Suspense>

      <div className="border-t border-white/10 px-5 py-5">
        <Link
          href={logoutHref}
          onClick={onNavigate}
          className="flex items-center gap-2.5 text-[13px] text-white/60 transition hover:text-white"
        >
          <LogOut className="h-4 w-4" />
          <span>Log Out</span>
        </Link>
      </div>
    </>
  );

  return (
    <div className="flex h-dvh overflow-hidden bg-surface">
      {/* Desktop Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-52 shrink-0 flex-col bg-[#001D39] lg:flex">
        {sidebarBody()}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="flex h-full w-64 flex-col bg-[#001D39]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation"
              className="absolute right-3 top-4 rounded-lg p-1.5 text-white/70 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarBody(() => setMobileOpen(false))}
          </aside>
        </div>
      )}

      {/* Main Column */}
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border bg-white px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation"
              className="rounded-lg p-1.5 text-[#001D39] hover:bg-gray-100 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
            {dashboardTitle && (
              <Suspense fallback={null}>
                <ActiveDashboardTitle
                  basePath={basePath}
                  dashboardTitle={dashboardTitle}
                />
              </Suspense>
            )}
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Notifications"
              className="relative p-1.5 text-gray-600 transition hover:text-[#001D39] cursor-pointer"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-pink" />
            </button>

            <div className="flex items-center gap-2 text-sm font-medium text-[#001D39]">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#001D39]">
                <User className="h-4 w-4" />
              </span>
              {userLabel && (
                <>
                  <span className="hidden sm:inline">{userLabel}</span>
                  <ChevronDown className="hidden h-3.5 w-3.5 text-gray-500 sm:inline" />
                </>
              )}
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-[#FAF5EE] p-5 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
