"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#001D39] h-16 flex items-center justify-between px-8 py-4">
        <Link href="/">
          <Logo />
        </Link>
        <span className="text-sm text-gray-200">
          {pathname === "/signup"
            ? "Already have an account? "
            : "Don't have an account? "}

          <Link
            href={pathname === "/signup" ? "/login" : "/signup"}
            className="text-pink font-medium hover:underline"
          >
            {pathname === "/signup" ? "Log in" : "Sign up"}
          </Link>
        </span>
      </header>
      <main className="flex-1 flex items-start justify-center pt-8 pb-12 px-4">
        {children}
      </main>
    </div>
  );
}
