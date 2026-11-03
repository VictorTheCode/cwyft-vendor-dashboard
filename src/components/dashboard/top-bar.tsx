export function TopBar() {
  return (
    <header className="h-14 bg-white border-b border-border flex items-center justify-between px-6 shrink-0">
      {/* Search */}
      <div className="relative w-72">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search orders, menu items..."
          className="w-full pl-10 pr-3 py-2 bg-surface border border-border rounded-lg text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink/20 focus:border-pink transition"
        />
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Notification bell */}
        <button className="relative p-1.5 text-gray-500 hover:text-gray-700 transition cursor-pointer">
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute top-1 right-1 h-2 w-2 bg-pink rounded-full" />
        </button>

        {/* User info */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-navy text-white flex items-center justify-center text-xs font-semibold">
            D
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-gray-700">
              David&apos;s Kitchen
            </span>
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-400">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
