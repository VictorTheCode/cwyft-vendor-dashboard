import { Category, MenuFilter, MenuItem } from "@/types";

const categories: Category[] = ["Rice", "Swallow", "Snacks", "Drinks"];
const filters: MenuFilter[] = ["All items", ...categories];

const initialItems: MenuItem[] = [
  {
    id: 1,
    name: "Jellof rice & Chicken",
    category: "Rice",
    price: 3500,
    available: true,
    image: "/jollof.png",
  },
  {
    id: 2,
    name: "Fried rice & Chicken",
    category: "Rice",
    price: 3500,
    available: true,
    image: "/fried.png",
  },
  {
    id: 3,
    name: "Shawarma",
    category: "Snacks",
    price: 3000,
    available: true,
    image: "/shar.png",
  },
  {
    id: 4,
    name: "Beef Suya",
    category: "Snacks",
    price: 2000,
    available: false,
    image: "/suya.png",
  },
  {
    id: 5,
    name: "Coke & Fanta",
    category: "Drinks",
    price: 1000,
    available: true,
    image: "/drinks.png",
  },
  {
    id: 6,
    name: "Ofada Rice",
    category: "Rice",
    price: 2500,
    available: true,
    image: "/ofada.png",
  },
];

export { filters, initialItems };
