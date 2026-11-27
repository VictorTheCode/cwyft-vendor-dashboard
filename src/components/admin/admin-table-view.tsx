"use client";

import { useState, type ReactNode } from "react";
import { Filter, MoreHorizontal, Search } from "lucide-react";
import { Pagination } from "@/components/portal/pagination";

export type AdminKpi = {
  label: string;
  value: string;
  hint?: string;
};

export type AdminColumn<T> = {
  header: string;
  render: (row: T) => ReactNode;
  className?: string;
};

interface AdminTableViewProps<T extends { id: string }> {
  title: string;
  subtitle: string;
  kpis: AdminKpi[];
  tableTitle: string;
  searchPlaceholder: string;
  rows: T[];
  filterOptions: string[];
  matchesSearch: (row: T, query: string) => boolean;
  matchesFilter: (row: T, filter: string) => boolean;
  columns: AdminColumn<T>[];
  exportFileName: string;
  toCsvRow: (row: T) => (string | number)[];
  csvHeaders: string[];
  rowAction?: (row: T) => { label: string; onClick: () => void }[];
  totalLabelPrefix: string;
  pageSize?: number;
}

export function AdminTableView<T extends { id: string }>({
  title,
  subtitle,
  kpis,
  tableTitle,
  searchPlaceholder,
  rows,
  filterOptions,
  matchesSearch,
  matchesFilter,
  columns,
  exportFileName,
  toCsvRow,
  csvHeaders,
  rowAction,
  totalLabelPrefix,
  pageSize = 11,
}: AdminTableViewProps<T>) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(filterOptions[0] ?? "All");
  const [page, setPage] = useState(1);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const filtered = rows.filter(
    (r) =>
      (filter === "All" || matchesFilter(r, filter)) &&
      (!query.trim() || matchesSearch(r, query.trim().toLowerCase())),
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const start = (safePage - 1) * pageSize;
  const visible = filtered.slice(start, start + pageSize);

  function handleExport() {
    const lines = [
      csvHeaders.join(","),
      ...filtered.map((r) =>
        toCsvRow(r)
          .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
          .join(","),
      ),
    ].join("\n");
    const blob = new Blob([lines], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = exportFileName;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">{title}</h1>
        <p className="mt-0.5 text-xs text-gray-600">{subtitle}</p>
      </div>

      {/* KPI Cards */}
      <div
        className={`grid grid-cols-2 gap-4 ${kpis.length >= 4 ? "xl:grid-cols-4" : "sm:grid-cols-3 max-w-3xl"}`}
      >
        {kpis.map((k) => (
          <div
            key={k.label}
            className="rounded-xl border border-border bg-white p-4"
          >
            <p className="text-[11px] text-gray-500">{k.label}</p>
            <p className="mt-1 text-xl font-bold text-[#001D39]">{k.value}</p>
            {k.hint && (
              <p className="mt-1 text-[10px] text-gray-400">{k.hint}</p>
            )}
          </div>
        ))}
      </div>

      {/* Table Card */}
      <div className="rounded-2xl border border-border bg-white p-5">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-[#001D39]">
              {tableTitle}
            </h2>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setPage(1);
                  }}
                  placeholder={searchPlaceholder}
                  className="h-8 w-52 rounded-lg border border-gray-300 bg-white pl-8 pr-3 text-xs outline-none placeholder:text-gray-400 focus:border-pink"
                />
              </div>

              <div className="relative">
                <Filter className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#001D39]" />
                <select
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    setPage(1);
                  }}
                  aria-label={`Filter ${tableTitle}`}
                  className="h-8 rounded-lg border border-gray-300 bg-white pl-8 pr-3 text-xs text-[#001D39] outline-none focus:border-pink cursor-pointer"
                >
                  {filterOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt === "All" ? "Filter" : opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleExport}
            className="self-start text-xs font-medium text-pink hover:underline sm:self-end cursor-pointer"
          >
            Export
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-180 text-center text-xs">
            <thead className="border-b border-border text-gray-500">
              <tr>
                {columns.map((col) => (
                  <th key={col.header} className="px-3 py-3 font-medium">
                    {col.header}
                  </th>
                ))}
                {rowAction && <th className="px-3 py-3 font-medium">Action</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {visible.map((row) => (
                <tr key={row.id} className="hover:bg-surface/50">
                  {columns.map((col) => (
                    <td
                      key={col.header}
                      className={`whitespace-nowrap px-3 py-3 text-[#001D39] ${col.className ?? ""}`}
                    >
                      {col.render(row)}
                    </td>
                  ))}
                  {rowAction && (
                    <td className="relative px-3 py-3">
                      <button
                        type="button"
                        aria-label="Row actions"
                        onClick={() =>
                          setOpenMenuId(openMenuId === row.id ? null : row.id)
                        }
                        className="inline-flex rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-[#001D39] cursor-pointer"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>

                      {openMenuId === row.id && (
                        <div className="absolute right-6 top-9 z-20 w-36 rounded-lg border border-border bg-white py-1 text-left shadow-md">
                          {rowAction(row).map((act) => (
                            <button
                              key={act.label}
                              type="button"
                              onClick={() => {
                                act.onClick();
                                setOpenMenuId(null);
                              }}
                              className="block w-full px-3 py-1.5 text-xs text-[#001D39] hover:bg-surface cursor-pointer"
                            >
                              {act.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </td>
                  )}
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td
                    colSpan={columns.length + (rowAction ? 1 : 0)}
                    className="px-4 py-10 text-sm text-gray-500"
                  >
                    No matching records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        page={safePage}
        totalPages={totalPages}
        totalLabel={`Showing ${filtered.length === 0 ? 0 : start + 1}-${start + visible.length} of ${filtered.length} ${totalLabelPrefix}`}
        onPageChange={setPage}
        activeTone="pink"
      />
    </div>
  );
}
