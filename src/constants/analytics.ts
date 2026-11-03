import { Range } from "@/types";

const ranges: Record<
  Range,
  { labels: string[]; values: number[]; delta: number }
> = {
  Week: {
    labels: ["Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat.", "Sun."],
    values: [52000, 78000, 30000, 46000, 95000, 85750, 100000],
    delta: 18,
  },
  Month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [410000, 465000, 458000, 486750],
    delta: 12,
  },
  Year: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [
      1200000, 1350000, 1280000, 1500000, 1620000, 1450000, 1100000, 1250000,
      1700000, 1880000, 1750000, 1950000,
    ],
    delta: 24,
  },
};

const stats = [
  { label: "Total Orders", value: "234", delta: "12%" },
  { label: "Total Revenue", value: "₦486,750", delta: "18%" },
  { label: "New Customers", value: "87", delta: "24%" },
  { label: "Average Order Value", value: "₦2,003", delta: "6%" },
];

const statusBreakdown = [
  { label: "Pending", value: 169, bar: "bg-yellow-400", dot: "bg-yellow-400" },
  { label: "Preparing", value: 89, bar: "bg-cyan-400", dot: "bg-cyan-400" },
  { label: "Ready for Pickup", value: 65, bar: "bg-pink", dot: "bg-pink" },
  {
    label: "Completed",
    value: 72,
    bar: "bg-emerald-500",
    dot: "bg-emerald-500",
  },
];

const topItems = [
  { item: "Jellor rice + chicken", orders: 86, revenue: 301000 },
  { item: "Fried rice + chicken", orders: 64, revenue: 224000 },
  { item: "Shawarma", orders: 42, revenue: 126000 },
  { item: "Moi Moi", orders: 28, revenue: 28000 },
  { item: "Beef Suya", orders: 23, revenue: 46000 },
  { item: "Grilled Chicken", orders: 19, revenue: 57000 },
  { item: "Ofada rice + sauce", orders: 16, revenue: 64000 },
];

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

// 100000 -> "₦100k", 2000000 -> "₦2M"
const short = (n: number) =>
  n === 0 ? "₦0" : n >= 1_000_000 ? `₦${n / 1_000_000}M` : `₦${n / 1000}k`;

// Round the top of the y-axis up to a clean number: 99,000 -> 100,000, 465,000 -> 500,000
function niceTop(max: number) {
  const pow = 10 ** Math.floor(Math.log10(max));
  return Math.ceil(max / pow) * pow;
}

export { ranges, stats, statusBreakdown, topItems, niceTop, naira, short };
