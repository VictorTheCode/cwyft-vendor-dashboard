"use client";

import { PencilIcon, SearchIcon, TrashIcon } from "@/components/icons";
import { ItemForm } from "@/components/menu/item-form";
import { primaryBtn } from "@/components/ui/button";
import { ConfirmDelete } from "@/components/ui/confirm-delete";
import { FilterTabs } from "@/components/ui/filter-tabs";
import { inputClass } from "@/components/ui/form-input";
import { Modal } from "@/components/ui/modal";
import { Thumb } from "@/components/ui/thumb";
import { filters, initialItems } from "@/constants/menu";
import { naira } from "@/lib/format";
import { MenuFilter, MenuItem } from "@/types";
import { useState } from "react";

export default function MenuPage() {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<MenuFilter>("All items");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<MenuItem | null>(null);
  const [deleting, setDeleting] = useState<MenuItem | null>(null);

  // Derived data: computed on every render from state, never stored separately
  const visible = items.filter(
    (i) =>
      (filter === "All items" || i.category === filter) &&
      i.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function openAdd() {
    setEditing(null);
    setFormOpen(true);
  }
  function openEdit(item: MenuItem) {
    setEditing(item);
    setFormOpen(true);
  }
  function closeForm() {
    setFormOpen(false);
    setEditing(null);
  }
  function save(data: Omit<MenuItem, "id">) {
    if (editing) {
      setItems((prev) =>
        prev.map((i) => (i.id === editing.id ? { ...i, ...data } : i)),
      );
    } else {
      setItems((prev) => [{ id: Date.now(), ...data }, ...prev]);
    }
    closeForm();
  }
  function toggleAvailability(id: number) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, available: !i.available } : i)),
    );
  }
  function confirmDelete() {
    if (deleting) setItems((prev) => prev.filter((i) => i.id !== deleting.id));
    setDeleting(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h1 className="text-lg font-semibold text-navy">Menu Management</h1>
          <p className="mt-0.5 text-xs text-navy">
            Manage your food items, prices and availability
          </p>
        </div>
        <button onClick={openAdd} className={primaryBtn}>
          + Add New Item
        </button>
      </div>

      <div className="relative max-w-xs">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search menu items..."
          className={`${inputClass} pl-9`}
        />
      </div>

      <FilterTabs options={filters} value={filter} onChange={setFilter} />

      <div className="overflow-hidden rounded-2xl border border-border bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-180 text-center text-xs">
            <thead>
              <tr className="border-b border-border text-gray-700">
                <th className="px-4 py-4 font-medium">Image</th>
                <th className="px-4 py-4 font-medium">Item Name</th>
                <th className="px-4 py-4 font-medium">Category</th>
                <th className="px-4 py-4 font-medium">Price</th>
                <th className="px-4 py-4 font-medium">Availability</th>
                <th className="px-4 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-3">
                    <Thumb src={item.image} alt={item.name} />
                  </td>
                  <td className="px-4 py-3 font-semibold text-navy">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 text-gray-700">{item.category}</td>
                  <td className="px-4 py-3 text-gray-700">
                    {naira(item.price)}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleAvailability(item.id)}
                      title="Click to change availability"
                      className={`font-medium hover:underline ${item.available ? "text-emerald-500" : "text-gray-500"}`}
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => openEdit(item)}
                        aria-label={`Edit ${item.name}`}
                        className="text-navy"
                      >
                        <PencilIcon />
                      </button>
                      <button
                        onClick={() => setDeleting(item)}
                        aria-label={`Delete ${item.name}`}
                        className="text-pink"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-sm text-gray-500">
                    No menu items match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-[11px] text-gray-500">
        Showing {visible.length} of {items.length} items
      </p>

      <Modal
        open={formOpen}
        title={editing ? "Edit menu item" : "Add new item"}
        onClose={closeForm}
      >
        <ItemForm initial={editing} onSave={save} onCancel={closeForm} />
      </Modal>

      <ConfirmDelete
        name={deleting?.name ?? null}
        onConfirm={confirmDelete}
        onCancel={() => setDeleting(null)}
      />
    </div>
  );
}
