import { Sidebar } from "@/components/dashboard/sidebar";
import { TopBar } from "@/components/dashboard/top-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden bg-surface">
      {/* Sidebar: fixed height, no scroll */}
      <Sidebar />

      {/* Right content area: scrollable */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar />
        <main className="flex-1 overflow-y-auto p-6 bg-[#FAF5EE]">
          {children}
        </main>
      </div>
    </div>
  );
}
