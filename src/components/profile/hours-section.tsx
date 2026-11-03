import { initialHours } from "@/constants/profile";
import { useState } from "react";
import { Card } from "./card";
import { Field, inputClass } from "../ui/form-input";
import { primaryBtn, secondaryBtn } from "../ui/button";

export function HoursSection() {
  const [hours, setHours] = useState(initialHours);
  const [draft, setDraft] = useState(initialHours);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");

  function save() {
    if (draft.some((h) => !h.time.trim())) {
      setError("Fill in the hours for every day.");
      return;
    }
    setHours(draft);
    setError("");
    setEditing(false);
  }

  return (
    <Card
      title="Opening Hours"
      editing={editing}
      onEdit={() => {
        setDraft(hours);
        setError("");
        setEditing(true);
      }}
    >
      {editing ? (
        <div className="space-y-4">
          {draft.map((h, i) => (
            <Field key={h.day} label={h.day}>
              <input
                value={h.time}
                onChange={(e) =>
                  setDraft(
                    draft.map((d, j) =>
                      j === i ? { ...d, time: e.target.value } : d,
                    ),
                  )
                }
                className={inputClass}
                placeholder="8:00AM - 9:00PM"
              />
            </Field>
          ))}
          {error && <p className="text-[11px] text-red-500">{error}</p>}
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
        <div className="space-y-4 py-1 text-[11px] text-gray-600">
          {hours.map((h) => (
            <div key={h.day} className="space-y-1.5">
              <p className="text-navy">{h.day}</p>
              <p>{h.time}</p>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
