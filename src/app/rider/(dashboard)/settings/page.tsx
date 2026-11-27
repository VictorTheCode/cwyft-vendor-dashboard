"use client";

import { useState, type FormEvent } from "react";
import { Toggle } from "@/components/ui/toggle";
import { Modal } from "@/components/ui/modal";
import { Field, inputClass } from "@/components/ui/form-input";
import { primaryBtn, secondaryBtn } from "@/components/ui/button";

export default function RiderSettingsPage() {
  const [twoFactor, setTwoFactor] = useState(true);
  const [prefs, setPrefs] = useState({
    delivery: true,
    earnings: true,
    promo: true,
  });
  const [language, setLanguage] = useState("English");
  const [theme, setTheme] = useState("Light Mode");
  const [pwOpen, setPwOpen] = useState(false);
  const [pwDraft, setPwDraft] = useState("");
  const [pwMsg, setPwMsg] = useState("");

  function savePassword(e: FormEvent) {
    e.preventDefault();
    if (pwDraft.length < 8) {
      setPwMsg("Password must be at least 8 characters.");
      return;
    }
    setPwDraft("");
    setPwMsg("");
    setPwOpen(false);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Settings</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          Manage your account preferences and security settings
        </p>
      </div>

      {/* Account Security */}
      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="mb-4 text-base font-semibold text-[#001D39]">
          Account Security
        </h2>

        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-[#001D39]">Password</p>
              <p className="mt-0.5 text-xs text-gray-500">•••••••••••••••</p>
            </div>
            <button
              type="button"
              onClick={() => setPwOpen(true)}
              className="text-xs font-medium text-pink hover:underline cursor-pointer"
            >
              Change
            </button>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-[#001D39]">
                Two-Factor Authentication
              </p>
              <p className="mt-0.5 text-[11px] text-gray-500">
                Add an extra layer of security to your account
              </p>
            </div>
            <Toggle
              label="Two-Factor Authentication"
              checked={twoFactor}
              onChange={setTwoFactor}
            />
          </div>
        </div>
      </section>

      {/* Notification Preferences */}
      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="mb-4 text-base font-semibold text-[#001D39]">
          Notification Preferences
        </h2>

        <div className="divide-y divide-border">
          {[
            {
              key: "delivery" as const,
              title: "Delivery Updates",
              desc: "Receive notifications about new orders and delivery status",
            },
            {
              key: "earnings" as const,
              title: "Earnings Notifications",
              desc: "Get notified about earnings, payouts and transactions",
            },
            {
              key: "promo" as const,
              title: "Promotional Updates",
              desc: "Receive updates about promotion and special announcements",
            },
          ].map((item) => (
            <div
              key={item.key}
              className="flex items-center justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
            >
              <div>
                <p className="text-xs font-semibold text-[#001D39]">
                  {item.title}
                </p>
                <p className="mt-0.5 text-[11px] text-gray-500">{item.desc}</p>
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

      {/* App Preferences */}
      <section className="rounded-2xl border border-border bg-white p-6">
        <h2 className="mb-4 text-base font-semibold text-[#001D39]">
          App Preferences
        </h2>

        <div className="divide-y divide-border">
          <div className="flex items-center justify-between py-3.5 first:pt-0">
            <span className="text-xs font-semibold text-[#001D39]">
              Language
            </span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              aria-label="Select language"
              className="h-8 rounded-lg border border-gray-300 bg-white px-3 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
            >
              <option>English</option>
              <option>French</option>
            </select>
          </div>

          <div className="flex items-center justify-between py-3.5 last:pb-0">
            <span className="text-xs font-semibold text-[#001D39]">Theme</span>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              aria-label="Select theme"
              className="h-8 rounded-lg border border-gray-300 bg-white px-3 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
            >
              <option>Light Mode</option>
              <option>System</option>
            </select>
          </div>
        </div>
      </section>

      <Modal
        open={pwOpen}
        title="Change Password"
        onClose={() => setPwOpen(false)}
      >
        <form onSubmit={savePassword} className="space-y-4">
          <Field label="New Password" error={pwMsg}>
            <input
              type="password"
              value={pwDraft}
              onChange={(e) => setPwDraft(e.target.value)}
              placeholder="At least 8 characters"
              className={inputClass}
            />
          </Field>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setPwOpen(false)}
              className={secondaryBtn}
            >
              Cancel
            </button>
            <button type="submit" className={primaryBtn}>
              Save Password
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
