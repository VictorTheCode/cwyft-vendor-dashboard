"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { SidebarContent } from "./sidebar-content";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Escape closes the drawer
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-navy hover:bg-surface"
      >
        <MenuIcon />
      </button>

      {/* Always rendered so it can animate; inert keeps hidden links out of tab order */}
      <div
        className={`fixed inset-0 z-50 ${open ? "" : "pointer-events-none"}`}
        inert={!open}
      >
        <div
          onClick={close}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <aside
          className={`absolute inset-y-0 left-0 flex w-64 max-w-[80%] flex-col bg-navy transition-transform duration-200 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={close}
            aria-label="Close menu"
            className="absolute right-3 top-4 text-white/60 hover:text-white"
          >
            <CloseIcon />
          </button>
          <SidebarContent onNavigate={close} />
        </aside>
      </div>
    </div>
  );
}
