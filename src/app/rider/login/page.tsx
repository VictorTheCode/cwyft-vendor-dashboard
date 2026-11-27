"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SplitAuthShell } from "@/components/portal/split-auth-shell";

export default function RiderLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }
    setError("");
    router.push("/rider/dashboard");
  }

  return (
    <SplitAuthShell
      title="Welcome Back!"
      subtitle="Log in to your rider account to manage deliveries and track your earnings."
    >
      <div className="w-full max-w-lg">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-[#001D39]">Rider Login</h2>
          <p className="mt-0.5 text-xs text-gray-600">
            Enter your account details to continue
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                Email Address
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink focus:ring-2 focus:ring-pink/15"
              />
            </label>

            <div>
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-[#001D39]">
                  Password
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink focus:ring-2 focus:ring-pink/15"
                />
              </label>
              <div className="mt-1.5 text-right">
                <Link
                  href="/rider/support"
                  className="text-[11px] font-medium text-pink hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-500" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-[#FF5B88] py-2.5 text-sm font-semibold text-white transition hover:bg-pink-hover cursor-pointer"
            >
              Log In
            </button>
          </form>

          <Link
            href="/rider/dashboard"
            className="mt-3 block w-full rounded-lg border border-pink py-2 text-center text-xs font-medium text-pink transition hover:bg-pink/10"
          >
            Continue to demo rider dashboard
          </Link>

          <p className="mt-4 text-center text-xs text-gray-600">
            Don&apos;t have a rider account?{" "}
            <Link
              href="/rider/signup"
              className="font-medium text-pink hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <p className="mt-5 text-center text-xs text-gray-500">
          Need help?{" "}
          <Link
            href="/rider/support"
            className="font-medium text-pink hover:underline"
          >
            Contact Support
          </Link>
        </p>

        <div className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-500">
          <Link href="/login" className="hover:text-pink hover:underline">
            Vendor Portal
          </Link>
          <span>•</span>
          <Link href="/admin/login" className="hover:text-pink hover:underline">
            Admin Portal
          </Link>
        </div>
      </div>
    </SplitAuthShell>
  );
}
