"use client";

import { PencilIcon, SearchIcon, TrashIcon } from "@/components/icons";
import { StockForm } from "@/components/inventory/stock-form";
import { primaryBtn } from "@/components/ui/button";
import { ConfirmDelete } from "@/components/ui/confirm-delete";
import { FilterTabs } from "@/components/ui/filter-tabs";
import { inputClass } from "@/components/ui/form-input";
import { Modal } from "@/components/ui/modal";
import { Thumb } from "@/components/ui/thumb";
import {
  filters,
  initialItems,
  statusColor,
  statusOf,
} from "@/constants/inventory";
import { StockFilter, StockItem } from "@/types";
import { useState, type FormEvent } from "react";

export default function InventoryPage() {
  const [items, setItems] = useState(initialItems);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<StockFilter>("All items");
  const [formOpen, setFormOpen] = useState(false);
  const [editing, setEditing] = useState<StockItem | null>(null);
  const [deleting, setDeleting] = useState<StockItem | null>(null);

  const visible = items.filter(
    (i) =>
      (filter === "All items" || statusOf(i) === filter) &&
      i.name.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function closeForm() {
    setFormOpen(false);
    setEditing(null);
  }
  function save(data: Omit<StockItem, "id">) {
    if (editing) {
      setItems((prev) =>
        prev.map((i) => (i.id === editing.id ? { ...i, ...data } : i)),
      );
    } else {
      setItems((prev) => [{ id: Date.now(), ...data }, ...prev]);
    }
    closeForm();
  }
  function confirmDelete() {
    if (deleting) setItems((prev) => prev.filter((i) => i.id !== deleting.id));
    setDeleting(null);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h1 className="text-lg font-semibold text-navy">
            Inventory Management
          </h1>
          <p className="mt-0.5 text-xs text-navy">
            Keep track of your stock levels and manage your supplies
          </p>
        </div>
        <button
          onClick={() => {
            setEditing(null);
            setFormOpen(true);
          }}
          className={primaryBtn}
        >
          + Add Stock Item
        </button>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        <div className="relative w-full lg:w-72">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search inventory items..."
            className={`${inputClass} h-11 pl-9`}
          />
        </div>
        <FilterTabs options={filters} value={filter} onChange={setFilter} />
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-180 text-center text-xs">
            <thead>
              <tr className="border-b border-border text-gray-700">
                <th className="px-4 py-4 font-medium">Image</th>
                <th className="px-4 py-4 font-medium">Item Name</th>
                <th className="px-4 py-4 font-medium">Category</th>
                <th className="px-4 py-4 font-medium">Stock Level</th>
                <th className="px-4 py-4 font-medium">Status</th>
                <th className="px-4 py-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((item) => {
                const status = statusOf(item);
                return (
                  <tr key={item.id}>
                    <td className="px-4 py-3">
                      <Thumb />
                    </td>
                    <td className="px-4 py-3 font-semibold text-navy">
                      {item.name}
                    </td>
                    <td className="px-4 py-3 text-gray-700">{item.category}</td>
                    <td className="px-4 py-3 text-gray-700">{item.stock}</td>
                    <td
                      className={`px-4 py-3 font-medium ${statusColor[status]}`}
                    >
                      {status}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => {
                            setEditing(item);
                            setFormOpen(true);
                          }}
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
                );
              })}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-sm text-gray-500">
                    No inventory items found.
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
        title={editing ? "Edit stock item" : "Add stock item"}
        onClose={closeForm}
      >
        <StockForm initial={editing} onSave={save} onCancel={closeForm} />
      </Modal>

      <ConfirmDelete
        name={deleting?.name ?? null}
        onConfirm={confirmDelete}
        onCancel={() => setDeleting(null)}
      />
    </div>
  );
}
