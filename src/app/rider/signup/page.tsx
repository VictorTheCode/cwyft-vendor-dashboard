"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SplitAuthShell } from "@/components/portal/split-auth-shell";

export default function RiderSignUpPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in your full name, email, and phone number.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms & Privacy to continue.");
      return;
    }
    setError("");
    router.push("/rider/dashboard");
  }

  return (
    <SplitAuthShell
      title="Deliver more. Earn more."
      subtitle="Join the Cwyft rider team and start earning by delivering orders to customers."
      extraText="Flexible deliveries. Reliable earnings. Your own schedule."
    >
      <div className="w-full max-w-lg">
        <h2 className="mb-4 text-center text-2xl font-bold text-[#001D39]">
          Create Rider Account
        </h2>

        <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs">
          <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-[#001D39]">
                Full Name
              </span>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink focus:ring-2 focus:ring-pink/15"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-[#001D39]">
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

            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-[#001D39]">
                Phone Number
              </span>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink focus:ring-2 focus:ring-pink/15"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-[#001D39]">
                Password
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create a password"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink focus:ring-2 focus:ring-pink/15"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-[#001D39]">
                Confirm Password
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                className="h-10 w-full rounded-lg border border-gray-300 px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink focus:ring-2 focus:ring-pink/15"
              />
            </label>

            <label className="flex items-center gap-2 pt-1 text-xs text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-pink"
              />
              <span>
                I agree to the{" "}
                <Link
                  href="/rider/support"
                  className="font-medium text-pink hover:underline"
                >
                  Terms &amp; Privacy
                </Link>
              </span>
            </label>

            {error && (
              <p className="text-xs text-red-500" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-[#FF5B88] py-2.5 text-sm font-semibold text-white transition hover:bg-pink-hover cursor-pointer"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-center text-xs text-gray-600">
            Already have an account?{" "}
            <Link
              href="/rider/login"
              className="font-medium text-pink hover:underline"
            >
              Log in
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
      </div>
    </SplitAuthShell>
  );
}
