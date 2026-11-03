"use client";
import { useState } from "react";
import { Field, inputClass } from "../ui/form-input";

export function AccountSecurity() {
  const [email, setEmail] = useState("david@example.com");
  const [editing, setEditing] = useState<"email" | "password" | null>(null);
  const [draft, setDraft] = useState("");
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  function startEdit(field: "email" | "password") {
    setEditing(field);
    setDraft("");
    setError("");
    setSaved(false);
  }

  function save() {
    if (editing === "email") {
      if (!/^\S+@\S+\.\S+$/.test(draft))
        return setError("Enter a valid email address");
      setEmail(draft);
    } else if (editing === "password") {
      if (draft.length < 8)
        return setError("Password must be at least 8 characters");
      // Demo only: a real password change happens on the backend, never stored in the frontend
    }
    setEditing(null);
    setSaved(true);
  }

  return (
    <section className="max-w-md">
      <h2 className="text-sm font-semibold text-navy">Account Security</h2>
      <div className="mt-2 space-y-4 rounded-xl border border-border bg-white p-4">
        <div>
          <div className="flex items-start justify-between">
            <div className="text-xs">
              <p className="text-[11px] text-gray-500">Email Address</p>
              <p className="text-navy">{email}</p>
            </div>
            <button
              onClick={() => startEdit("email")}
              className="text-[11px] font-medium text-pink hover:underline"
            >
              Change
            </button>
          </div>
          {editing === "email" && (
            <div className="mt-3">
              <Field label="New email address" error={error}>
                <input
                  type="email"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>
          )}
        </div>

        <div>
          <div className="flex items-start justify-between">
            <div className="text-xs">
              <p className="text-[11px] text-gray-500">Password</p>
              <p className="text-navy">•••••••••••••••</p>
            </div>
            <button
              onClick={() => startEdit("password")}
              className="text-[11px] font-medium text-pink hover:underline"
            >
              Change
            </button>
          </div>
          {editing === "password" && (
            <div className="mt-3">
              <Field label="New password" error={error}>
                <input
                  type="password"
                  value={draft}
                  onChange={(e) => setDraft(e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>
          )}
        </div>

        <div className="flex items-center justify-end gap-3">
          {saved && (
            <span className="text-[11px] text-emerald-500">Changes saved</span>
          )}
          {editing && (
            <button
              onClick={() => setEditing(null)}
              className="text-[11px] text-gray-500 hover:underline"
            >
              Cancel
            </button>
          )}
          <button
            onClick={save}
            disabled={!editing}
            className="text-[11px] font-medium text-pink hover:underline disabled:opacity-40 disabled:hover:no-underline"
          >
            Save Changes
          </button>
        </div>
      </div>
    </section>
  );
}
