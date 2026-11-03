export function Thumb() {
  return (
    <div className="mx-auto flex h-10 w-14 items-center justify-center rounded bg-gray-200">
      <svg
        width="18"
        height="18"
        fill="none"
        stroke="#9ca3af"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    </div>
  );
}
