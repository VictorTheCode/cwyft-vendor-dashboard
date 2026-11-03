import { StockFilter, StockItem, Status } from "@/types";

const categories = ["Rice", "Protein", "Snacks", "Vegetable", "Drinks"];
const filters: StockFilter[] = [
  "All items",
  "Low Stock",
  "In Stock",
  "Out of Stock",
];

const initialItems: StockItem[] = [
  { id: 1, name: "Rice (1kg)", category: "Rice", stock: 12, lowAt: 5 },
  { id: 2, name: "Chicken (1kg)", category: "Protein", stock: 8, lowAt: 5 },
  { id: 3, name: "Shawarma Wrap", category: "Snacks", stock: 15, lowAt: 5 },
  {
    id: 4,
    name: "Tomatoes (1tray)",
    category: "Vegetable",
    stock: 5,
    lowAt: 5,
  },
  { id: 5, name: "Beef (1kg)", category: "Protein", stock: 10, lowAt: 5 },
  { id: 6, name: "Water (20pcks)", category: "Drinks", stock: 8, lowAt: 10 },
];

function statusOf(item: StockItem): Status {
  if (item.stock === 0) return "Out of Stock";
  if (item.stock <= item.lowAt) return "Low Stock";
  return "In Stock";
}

const statusColor: Record<Status, string> = {
  "In Stock": "text-emerald-500",
  "Low Stock": "text-amber-400",
  "Out of Stock": "text-red-500",
};

export { categories, filters, initialItems, statusOf, statusColor };
