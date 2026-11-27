"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import { LockIcon, MailIcon } from "@/components/icons";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError("Enter your email and password to continue.");
      return;
    }
    setError("");
    router.push("/dashboard");
  }

  return (
    <div className="w-full max-w-md pt-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#001D39] mb-1">
          Login to Your Vendor Account
        </h1>
        <p className="text-sm text-[#001D39]/80">
          Manage your restaurant and orders on Cwyft
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <FormInput
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            icon={<MailIcon />}
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            icon={<LockIcon />}
          />

          {error && (
            <p className="text-xs text-red-500" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" fullWidth className="mt-2">
            Login
          </Button>
        </form>

        {/* temporary login link - remove when real auth is implemented */}
        <Link
          href="/dashboard"
          className="mt-3 block w-full rounded-lg border border-pink py-2.5 text-center text-sm font-medium text-pink transition hover:bg-pink/10"
        >
          Continue to demo dashboard
        </Link>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs">
          <Link
            href="/verification"
            className="font-medium text-[#001D39]/70 hover:text-pink hover:underline"
          >
            Business Verification
          </Link>
          <span className="text-gray-300">•</span>
          <Link
            href="/admin/login"
            className="font-medium text-[#001D39]/70 hover:text-pink hover:underline"
          >
            Admin Portal
          </Link>
          <span className="text-gray-300">•</span>
          <Link
            href="/rider/login"
            className="font-medium text-[#001D39]/70 hover:text-pink hover:underline"
          >
            Rider Portal
          </Link>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        Questions?{" "}
        <Link href="/support" className="text-pink hover:underline font-medium">
          Contact Support
        </Link>
      </p>
    </div>
  );
}
