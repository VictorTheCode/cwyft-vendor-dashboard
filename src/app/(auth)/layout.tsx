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
  const isVerification = pathname.startsWith("/verification");
  const isSignup = pathname === "/signup";

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EE]">
      <header className="bg-[#001D39] h-16 flex items-center justify-between px-6 sm:px-8 py-4 shrink-0">
        <Link href="/">
          <Logo />
        </Link>
        {isVerification ? (
          <span className="text-sm text-gray-200">
            Need help?{" "}
            <Link
              href="/support"
              className="text-pink font-medium hover:underline"
            >
              Contact Support
            </Link>
          </span>
        ) : (
          <span className="text-sm text-gray-200">
            {isSignup
              ? "Already have an account? "
              : "Don't have an account? "}
            <Link
              href={isSignup ? "/login" : "/signup"}
              className="text-pink font-medium hover:underline"
            >
              {isSignup ? "Log in" : "Sign up"}
            </Link>
          </span>
        )}
      </header>
      <main className="flex-1 flex flex-col items-center justify-start pt-8 pb-12 px-4">
        {children}
      </main>
    </div>
  );
}
