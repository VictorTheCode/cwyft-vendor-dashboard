export function FilterTabs<T extends string>({
  options,
  value,
  onChange,
}: {
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          onClick={() => onChange(o)}
          className={`rounded-lg px-4 py-2.5 text-xs font-medium transition ${
            value === o
              ? "bg-navy text-white"
              : "bg-gray-200/70 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
