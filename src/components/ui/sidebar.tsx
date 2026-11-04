import { SidebarContent } from "./sidebar-content";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-52 shrink-0 flex-col bg-navy lg:flex">
      <SidebarContent />
    </aside>
  );
}
