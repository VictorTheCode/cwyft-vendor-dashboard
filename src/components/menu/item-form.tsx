import { Category, MenuItem } from "@/types";
import { FormEvent, useState } from "react";
import { Field, inputClass } from "../ui/form-input";
import { categories } from "@/constants/inventory";
import { primaryBtn, secondaryBtn } from "../ui/button";

export function ItemForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: MenuItem | null;
  onSave: (data: Omit<MenuItem, "id">) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [category, setCategory] = useState<Category>(
    initial?.category ?? "Rice",
  );
  const [price, setPrice] = useState(initial ? String(initial.price) : "");
  const [available, setAvailable] = useState(initial?.available ?? true);
  const [errors, setErrors] = useState<{ name?: string; price?: string }>({});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    const p = Number(price);
    if (!name.trim()) next.name = "Enter a meal name";
    if (!price || Number.isNaN(p) || p <= 0)
      next.price = "Enter a price greater than 0";
    setErrors(next);
    if (Object.keys(next).length) return;
    onSave({ name: name.trim(), category, price: p, available });
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <Field label="Meal name" error={errors.name}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="e.g. Jollof rice & Chicken"
        />
      </Field>
      <Field label="Category">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          className={inputClass}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <Field label="Price (₦)" error={errors.price}>
        <input
          type="number"
          min="0"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={inputClass}
          placeholder="3500"
        />
      </Field>
      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
          className="accent-pink"
        />
        Available for ordering
      </label>
      <div className="flex justify-end gap-2 pt-2">
        <button type="button" onClick={onCancel} className={secondaryBtn}>
          Cancel
        </button>
        <button type="submit" className={primaryBtn}>
          {initial ? "Save changes" : "Add item"}
        </button>
      </div>
    </form>
  );
}
