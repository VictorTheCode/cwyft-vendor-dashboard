"use client";

import { useState, type FormEvent } from "react";
import { UserCircle2 } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

export default function AdminSettingsPage() {
  const [name, setName] = useState("Admin Name");
  const [email, setEmail] = useState("admin@cwyft.com");
  const [phone, setPhone] = useState("XXXX XXX XXXX");
  const [role, setRole] = useState("Super Admin");

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwMsg, setPwMsg] = useState("");

  const [twoFactor, setTwoFactor] = useState(true);
  const [prefs, setPrefs] = useState({
    email: true,
    order: true,
    vendor: true,
    rider: true,
  });

  function handlePasswordSubmit(e: FormEvent) {
    e.preventDefault();
    if (!currentPassword || newPassword.length < 8) {
      setPwMsg("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwMsg("Passwords do not match.");
      return;
    }
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    setPwMsg("Password updated.");
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Settings</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          Manage your admin account and platform preferences.
        </p>
      </div>

      {/* Admin Profile */}
      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="mb-4 text-sm font-semibold text-[#001D39]">
          Admin Profile
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div className="flex items-center gap-5 lg:border-r lg:border-border lg:pr-6">
            <UserCircle2 className="h-24 w-24 stroke-[1.2] text-[#001D39]" />
            <div>
              <p className="text-base font-semibold text-[#001D39]">
                Profile Picture
              </p>
              <p className="text-[11px] text-gray-500">
                Upload or change your profile picture
              </p>
              <button
                type="button"
                className="mt-1.5 text-xs font-medium text-pink hover:underline cursor-pointer"
              >
                Change Photo
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {[
              { label: "Full Name", value: name, set: setName },
              { label: "Email Address", value: email, set: setEmail },
              { label: "Phone Number", value: phone, set: setPhone },
              { label: "Role", value: role, set: setRole },
            ].map((row) => (
              <div
                key={row.label}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-xs font-medium text-[#001D39]">
                  {row.label}
                </span>
                <input
                  value={row.value}
                  onChange={(e) => row.set(e.target.value)}
                  className="h-8 w-full rounded-md border border-gray-300 px-3 text-center text-xs text-gray-600 outline-none focus:border-pink sm:w-56"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Security */}
      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="mb-4 text-sm font-semibold text-[#001D39]">
          Account Security
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
          <form
            onSubmit={handlePasswordSubmit}
            className="space-y-4 lg:border-r lg:border-border lg:pr-6"
          >
            <div>
              <p className="text-sm font-semibold text-[#001D39]">
                Change Password
              </p>
              <p className="text-[11px] text-gray-500">
                Update your password to keep your account secure
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1 block text-xs font-medium text-[#001D39]">
                  Current Password
                </span>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter current password"
                  className="h-9 w-full rounded-lg border border-gray-300 px-3 text-xs outline-none focus:border-pink"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs font-medium text-[#001D39]">
                  New Password
                </span>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                  className="h-9 w-full rounded-lg border border-gray-300 px-3 text-xs outline-none focus:border-pink"
                />
              </label>

              <label className="block">
                <span className="mb-1 block text-xs font-medium text-[#001D39]">
                  Confirm New Password
                </span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm new password"
                  className="h-9 w-full rounded-lg border border-gray-300 px-3 text-xs outline-none focus:border-pink"
                />
              </label>

              <div className="flex items-end justify-end">
                <button
                  type="submit"
                  className="text-xs font-medium text-pink hover:underline cursor-pointer"
                >
                  Update Password
                </button>
              </div>
            </div>

            {pwMsg && <p className="text-xs text-emerald-600">{pwMsg}</p>}
          </form>

          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-[#001D39]">
                Two-Factor Authentication
              </p>
              <p className="text-[11px] text-gray-500">
                Add an extra layer of security to your account
              </p>
              <p
                className={`mt-2 text-xs font-semibold ${twoFactor ? "text-emerald-500" : "text-gray-400"}`}
              >
                {twoFactor ? "Enabled" : "Disabled"}
              </p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs font-medium text-[#001D39]">
                Enable 2FA
              </span>
              <Toggle
                label="Enable 2FA"
                checked={twoFactor}
                onChange={setTwoFactor}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Preferences */}
      <section className="max-w-lg rounded-2xl border border-border bg-white p-6">
        <h2 className="text-sm font-semibold text-[#001D39]">
          Platform Preferences
        </h2>
        <p className="mb-4 text-[11px] text-gray-500">
          Manage your notifications and general platform preferences
        </p>

        <div className="space-y-4">
          {[
            {
              key: "email" as const,
              title: "Email Notifications",
              desc: "Receive important platform updates through email",
            },
            {
              key: "order" as const,
              title: "Order Notifications",
              desc: "Receive alerts about new orders and order updates",
            },
            {
              key: "vendor" as const,
              title: "Vendor Notifications",
              desc: "Get updates about vendor registrations and verification",
            },
            {
              key: "rider" as const,
              title: "Rider Notifications",
              desc: "Get updates about rider registration and activities",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-4"
            >
              <div>
                <p className="text-xs font-semibold text-[#001D39]">
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-500">{item.desc}</p>
              </div>
              <Toggle
                label={item.title}
                checked={prefs[item.key]}
                onChange={(v) => setPrefs({ ...prefs, [item.key]: v })}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
