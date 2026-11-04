"use client";

import { Suspense } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { LogoutIcon } from "@/constants/svgs";
import { NavLinks } from "./nav-links";
import { NavList } from "./nav-list";

export function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <>
      <div className="px-5 pb-5 pt-6">
        <Link href="/dashboard" onClick={onNavigate}>
          <Logo width={90} height={28} />
        </Link>
      </div>

      <Suspense fallback={<NavList pathname={null} onNavigate={onNavigate} />}>
        <NavLinks onNavigate={onNavigate} />
      </Suspense>

      <div className="border-t border-white/10 px-5 py-5">
        <button className="flex cursor-pointer items-center gap-2.5 text-[13px] text-white/50 transition hover:text-white">
          <LogoutIcon />
          <span>Log Out</span>
        </button>
      </div>
    </>
  );
}
