import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/logo";

interface SplitAuthShellProps {
  title: string;
  subtitle: string;
  extraText?: string;
  children: ReactNode;
}

export function SplitAuthShell({
  title,
  subtitle,
  extraText,
  children,
}: SplitAuthShellProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
      {/* Left Navy Brand Panel */}
      <div className="flex flex-col justify-between bg-[#001D39] px-8 py-7 text-white lg:min-h-screen">
        <Link href="/" className="self-start">
          <Logo />
        </Link>

        <div className="my-10 max-w-sm space-y-3 lg:my-0">
          <h1 className="text-3xl font-bold leading-tight">{title}</h1>
          <p className="text-sm text-white/80 leading-relaxed">{subtitle}</p>
          {extraText && (
            <p className="pt-2 text-xs text-white/75">{extraText}</p>
          )}
        </div>

        <div className="hidden text-xs text-white/40 lg:block">
          © 2026 Cwyft
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="flex flex-col items-center justify-center bg-[#FAF5EE] px-4 py-10 sm:px-8">
        {children}
      </div>
    </div>
  );
}
