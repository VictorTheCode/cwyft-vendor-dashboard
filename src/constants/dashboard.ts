import type {
  PopularItem,
  RecentOrder,
  SalesData,
  SalesRange,
  Stat,
} from "@/types";

export const stats: Stat[] = [
  { label: "Total Orders", value: "24", icon: "orders" },
  { label: "Total Revenue", value: "₦185,000", icon: "revenue" },
  { label: "Pending Orders", value: "6", icon: "pending" },
];

// IDs match the Orders page, so every row links to a real details page
export const recentOrders: RecentOrder[] = [
  {
    id: "CW1024",
    customer: "Sarah Johnson",
    item: "Shawarma",
    amount: 3500,
    status: "Preparing",
  },
  {
    id: "CW1023",
    customer: "Michael James",
    item: "Jollof rice & Chicken",
    amount: 4200,
    status: "Delivered",
  },
  {
    id: "CW1022",
    customer: "Grace Williams",
    item: "Shawarma",
    amount: 3000,
    status: "Pending",
  },
  {
    id: "CW1021",
    customer: "Daniel Brown",
    item: "Beef Suya & Drink",
    amount: 2800,
    status: "Delivered",
  },
  {
    id: "CW1020",
    customer: "Esther Ade",
    item: "Ofada Rice",
    amount: 5500,
    status: "Cancelled",
  },
];

// Add `image: "/meals/ofada-rice.jpg"` once the photos are in public/meals
export const popularItems: PopularItem[] = [
  { name: "Plantain & Egg", orders: 45, revenue: 112000 },
  { name: "Ofada Rice", orders: 32, revenue: 72000 },
  { name: "Jollof rice & Chicken", orders: 24, revenue: 135000 },
  { name: "Fried rice & Chicken", orders: 20, revenue: 50000 },
];

// The 7-day values add up to ₦185,000, so the chart total matches the stat card
export const salesRanges: Record<SalesRange, SalesData> = {
  "Last 7 Days": {
    label: "Revenue This Week",
    labels: ["Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat.", "Sun."],
    values: [20000, 27000, 10000, 16000, 38000, 34000, 40000],
  },
  "Last 30 Days": {
    label: "Revenue, Last 30 Days",
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [520000, 610000, 580000, 640000],
  },
  "This Month": {
    label: "Revenue This Month",
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [150000, 210000, 185000, 230000],
  },
};
