import { initialInfo } from "@/constants/profile";
import { Info } from "@/types";
import { useState } from "react";
import { Card } from "./card";
import { Field, inputClass } from "../ui/form-input";
import { primaryBtn, secondaryBtn } from "../ui/button";

export function InfoSection() {
  const [info, setInfo] = useState(initialInfo);
  const [draft, setDraft] = useState(initialInfo);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof Info, string>>>({});

  function startEdit() {
    setDraft(info);
    setErrors({});
    setEditing(true);
  }
  function save() {
    const next: typeof errors = {};
    if (!draft.name.trim()) next.name = "Business name is required";
    if (!draft.type.trim()) next.type = "Business type is required";
    if (draft.phone.replace(/\D/g, "").length < 10)
      next.phone = "Enter a valid phone number";
    if (!/^\S+@\S+\.\S+$/.test(draft.email))
      next.email = "Enter a valid email address";
    if (!draft.address.trim()) next.address = "Address is required";
    setErrors(next);
    if (Object.keys(next).length) return;
    setInfo(draft);
    setEditing(false);
  }

  const rows: [keyof Info, string][] = [
    ["name", "Business Name"],
    ["type", "Business Type"],
    ["phone", "Phone Number"],
    ["email", "Business email address"],
    ["address", "Business Address"],
  ];

  return (
    <Card title="Business Information" editing={editing} onEdit={startEdit}>
      {editing ? (
        <div className="space-y-4">
          {rows.map(([key, label]) => (
            <Field key={key} label={label} error={errors[key]}>
              <input
                value={draft[key]}
                onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                className={inputClass}
              />
            </Field>
          ))}
          <div className="flex justify-end gap-2">
            <button onClick={() => setEditing(false)} className={secondaryBtn}>
              Cancel
            </button>
            <button onClick={save} className={primaryBtn}>
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 py-1 text-[11px] text-gray-600">
          {rows.map(([key, label]) => (
            <p key={key}>
              {label}: <span className="text-navy">{info[key]}</span>
            </p>
          ))}
        </div>
      )}
    </Card>
  );
}
