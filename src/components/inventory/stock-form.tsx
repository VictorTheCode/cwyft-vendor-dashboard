import { StockItem } from "@/types";
import { FormEvent, useState } from "react";
import { Field, inputClass } from "../ui/form-input";
import { categories } from "@/constants/inventory";
import { primaryBtn, secondaryBtn } from "../ui/button";

export function StockForm({
  initial,
  onSave,
  onCancel,
}: {
  initial: StockItem | null;
  onSave: (data: Omit<StockItem, "id">) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(initial?.name ?? "");
  const [category, setCategory] = useState(initial?.category ?? categories[0]);
  const [stock, setStock] = useState(initial ? String(initial.stock) : "");
  const [lowAt, setLowAt] = useState(initial ? String(initial.lowAt) : "5");
  const [errors, setErrors] = useState<{
    name?: string;
    stock?: string;
    lowAt?: string;
  }>({});

  function submit(e: FormEvent) {
    e.preventDefault();
    const next: typeof errors = {};
    const s = Number(stock);
    const l = Number(lowAt);
    if (!name.trim()) next.name = "Enter an item name";
    if (stock === "" || !Number.isInteger(s) || s < 0)
      next.stock = "Enter a whole number (0 or more)";
    if (lowAt === "" || !Number.isInteger(l) || l < 0)
      next.lowAt = "Enter a whole number (0 or more)";
    setErrors(next);
    if (Object.keys(next).length) return;
    onSave({ name: name.trim(), category, stock: s, lowAt: l });
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate>
      <Field label="Item name" error={errors.name}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="e.g. Rice (1kg)"
        />
      </Field>
      <Field label="Category">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={inputClass}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>
      <div className="grid grid-cols-2 gap-3">
        <Field label="Stock level" error={errors.stock}>
          <input
            type="number"
            min="0"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Low stock at" error={errors.lowAt}>
          <input
            type="number"
            min="0"
            value={lowAt}
            onChange={(e) => setLowAt(e.target.value)}
            className={inputClass}
          />
        </Field>
      </div>
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
