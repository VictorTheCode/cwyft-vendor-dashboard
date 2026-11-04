import { notificationOptions } from "@/constants/settings";

export type Info = {
  name: string;
  type: string;
  phone: string;
  email: string;
  address: string;
};
export type Hours = { day: string; time: string }[];
export type Range = "Week" | "Month" | "Year";
export type Payout = {
  id: string;
  date: string;
  amount: number;
  method: string;
  status: "Completed" | "Pending";
};
export type Status = "In Stock" | "Low Stock" | "Out of Stock";
export type StockFilter = "All items" | Status;
export type StockItem = {
  id: number;
  name: string;
  category: string;
  stock: number;
  lowAt: number;
  image?: string;
};

export type Category = "Rice" | "Swallow" | "Snacks" | "Drinks";
export type MenuFilter = "All items" | Category;
export type MenuItem = {
  id: number;
  name: string;
  category: Category;
  price: number;
  available: boolean;
  image?: string;
};
export type OrderStatus =
  | "Pending"
  | "Preparing"
  | "Ready for Pickup"
  | "Delivered"
  | "Cancelled";

export type Order = {
  id: string;
  placedAt: string;
  status: OrderStatus;
  customer: { name: string; phone: string; address: string };
  items: { name: string; qty: number; price: number; image?: string }[];
  deliveryFee: number;
};

export type SupportTopic =
  | "Orders"
  | "Payouts"
  | "Menu & Inventory"
  | "Account"
  | "Other";

export type Faq = { question: string; answer: string };

export type ContactKey = "email" | "phone" | "chat";

export type ContactChannel = {
  key: ContactKey;
  title: string;
  detail: string;
  hint: string;
  href: string;
};

export type StatIcon = "orders" | "revenue" | "pending";
export type Stat = { label: string; value: string; icon: StatIcon };

export type RecentOrder = {
  id: string;
  customer: string;
  item: string;
  amount: number;
  status: OrderStatus;
};

export type PopularItem = {
  name: string;
  orders: number;
  revenue: number;
  image?: string;
};

export type SalesRange = "Last 7 Days" | "Last 30 Days" | "This Month";
export type SalesData = { label: string; labels: string[]; values: number[] };
export type NotifKey = (typeof notificationOptions)[number]["key"];
export type Bank = { bank: string; accountName: string; accountNumber: string };
