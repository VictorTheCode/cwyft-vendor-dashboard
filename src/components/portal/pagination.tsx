interface PaginationProps {
  page: number;
  totalPages: number;
  totalLabel: string;
  onPageChange: (page: number) => void;
  activeTone?: "navy" | "pink";
}

export function Pagination({
  page,
  totalPages,
  totalLabel,
  onPageChange,
  activeTone = "pink",
}: PaginationProps) {
  return (
    <div className="flex flex-col justify-between gap-3 pt-1 text-[11px] text-gray-500 sm:flex-row sm:items-center">
      <span>{totalLabel}</span>

      <div className="flex items-center gap-2">
        <button
          type="button"
          disabled={page <= 1}
          onClick={() => onPageChange(Math.max(1, page - 1))}
          className="px-1.5 py-1 transition hover:text-[#001D39] disabled:opacity-40 cursor-pointer disabled:cursor-default"
        >
          &lt;
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs transition cursor-pointer ${
              p === page
                ? activeTone === "navy"
                  ? "bg-[#001D39] font-semibold text-white"
                  : "bg-pink font-semibold text-white"
                : "text-gray-500 hover:bg-gray-200"
            }`}
          >
            {p}
          </button>
        ))}

        <button
          type="button"
          disabled={page >= totalPages}
          onClick={() => onPageChange(Math.min(totalPages, page + 1))}
          className="px-1.5 py-1 transition hover:text-[#001D39] disabled:opacity-40 cursor-pointer disabled:cursor-default"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
