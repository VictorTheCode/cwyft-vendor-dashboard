import {
  DashboardIcon,
  OrdersIcon,
  MenuMgmtIcon,
  InventoryIcon,
  AnalyticsIcon,
  EarningsIcon,
  ProfileIcon,
  SettingsIcon,
  SupportIcon,
} from "@/constants/svgs";

export const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  { label: "Orders", href: "/orders", icon: OrdersIcon },
  { label: "Menu Management", href: "/menu", icon: MenuMgmtIcon },
  { label: "Inventory", href: "/inventory", icon: InventoryIcon },
  { label: "Analytics", href: "/analytics", icon: AnalyticsIcon },
  { label: "Earnings & Payouts", href: "/earnings", icon: EarningsIcon },
  { label: "Business Profile", href: "/profile", icon: ProfileIcon },
  { label: "Settings", href: "/settings", icon: SettingsIcon },
  { label: "Help & Support", href: "/support", icon: SupportIcon },
];
