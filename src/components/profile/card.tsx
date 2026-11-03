import { ReactNode } from "react";

export function Card({
  title,
  editing,
  onEdit,
  children,
}: {
  title: string;
  editing: boolean;
  onEdit: () => void;
  children: ReactNode;
}) {
  return (
    <section className="max-w-xl">
      <h2 className="mb-1.5 text-xl font-semibold text-navy">{title}</h2>
      <div className="relative text-lg rounded-xl border border-border bg-white p-5">
        {!editing && (
          <button
            onClick={onEdit}
            className="absolute right-4 top-3 text-[11px] font-medium text-pink hover:underline"
          >
            Edit
          </button>
        )}
        {children}
      </div>
    </section>
  );
}
