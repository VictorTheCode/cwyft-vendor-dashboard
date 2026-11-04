import Link from "next/link";
import { navItems } from "@/constants/nav";

function isActive(href: string, pathname: string | null) {
  if (!pathname) return false;
  return href === "/dashboard" ? pathname === href : pathname.startsWith(href);
}

type Props = { pathname: string | null; onNavigate?: () => void };

export function NavList({ pathname, onNavigate }: Props) {
  return (
    <nav className="sidebar-scroll flex-1 space-y-0.5 overflow-y-auto px-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition ${
            isActive(item.href, pathname)
              ? "bg-[#FF5B88] font-medium text-white"
              : "text-white/60 hover:bg-white/8 hover:text-white"
          }`}
        >
          <item.icon />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
