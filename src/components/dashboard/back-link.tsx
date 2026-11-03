import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/orders"
      className="inline-flex items-center gap-1 text-[11px] text-gray-700 hover:underline"
    >
      <svg
        width="10"
        height="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Back to Orders
    </Link>
  );
}
