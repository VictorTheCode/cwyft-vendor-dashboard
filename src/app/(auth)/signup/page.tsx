"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormInput } from "@/components/ui/form-input";
import { Button } from "@/components/ui/button";
import {
  LockIcon,
  MailIcon,
  PhoneIcon,
  StoreIcon,
  UserIcon,
} from "@/components/icons";

export default function SignUpPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!businessName.trim() || !ownerName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all business and contact details.");
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
    router.push("/verification");
  }

  return (
    <div className="w-full max-w-xl">
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#001D39] mb-1">
          Create Your Vendor Account
        </h1>
        <p className="text-sm text-[#001D39]/80">
          Get your restaurant registered on Cwyft
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-xs">
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <FormInput
            id="businessName"
            label="Business Name"
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            placeholder="Enter business name"
            icon={<StoreIcon />}
          />

          <FormInput
            id="ownerName"
            label="Owner's Full Name"
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            placeholder="Enter your full name"
            icon={<UserIcon />}
          />

          <FormInput
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            icon={<MailIcon />}
          />

          <FormInput
            id="phone"
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            icon={<PhoneIcon />}
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            icon={<LockIcon />}
          />

          <FormInput
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            icon={<LockIcon />}
          />

          <div className="flex items-center gap-2.5 pt-1">
            <input
              id="terms"
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 accent-pink"
            />
            <label htmlFor="terms" className="text-xs text-gray-600">
              I agree to the{" "}
              <Link href="/support" className="text-pink font-medium hover:underline">
                Terms &amp; Privacy
              </Link>
            </label>
          </div>

          {error && (
            <p className="text-xs text-red-500" role="alert">
              {error}
            </p>
          )}

          <Button type="submit" fullWidth className="mt-2">
            Create Account
          </Button>
        </form>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        Need help?{" "}
        <Link href="/support" className="text-pink hover:underline font-medium">
          Contact Support
        </Link>
      </p>
    </div>
  );
}
