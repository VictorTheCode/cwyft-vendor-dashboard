import { Order, OrderStatus } from "@/types";

const orders: Record<string, Order> = {
  CW1024: {
    id: "CW1024",
    placedAt: "today at 10:42 AM",
    status: "Preparing",
    customer: {
      name: "Sarah Johnson",
      phone: "0801 234 5678",
      address: "Student Hostel, Main Campus",
    },
    items: [{ name: "Shawarma", qty: 2, price: 1750, image: "/shar.png" }],
    deliveryFee: 0,
  },
  CW1023: {
    id: "CW1023",
    placedAt: "today at 10:20 AM",
    status: "Delivered",
    customer: {
      name: "Michael James",
      phone: "0802 345 6789",
      address: "Block C, Staff Quarters",
    },
    items: [
      {
        name: "Jollof rice & Chicken",
        qty: 1,
        price: 3500,
        image: "/jollof.png",
      },
    ],
    deliveryFee: 700,
  },
  CW1022: {
    id: "CW1022",
    placedAt: "today at 09:58 AM",
    status: "Pending",
    customer: {
      name: "Grace Williams",
      phone: "0803 456 7890",
      address: "Student Hostel, Main Campus",
    },
    items: [{ name: "Shawarma", qty: 1, price: 3000, image: "/shar.png" }],
    deliveryFee: 0,
  },
  CW1021: {
    id: "CW1021",
    placedAt: "today at 09:30 AM",
    status: "Delivered",
    customer: {
      name: "Daniel Brown",
      phone: "0804 567 8901",
      address: "Off-campus, Epe Road",
    },
    items: [
      { name: "Beef Suya", qty: 1, price: 2000, image: "/beef.png" },
      { name: "Coke & Fanta", qty: 1, price: 800, image: "/drinks.png" },
    ],
    deliveryFee: 0,
  },
  CW1020: {
    id: "CW1020",
    placedAt: "today at 09:12 AM",
    status: "Cancelled",
    customer: {
      name: "Esther Ade",
      phone: "0805 678 9012",
      address: "Female Hostel B",
    },
    items: [{ name: "Ofada Rice", qty: 2, price: 2750, image: "/ofada.png" }],
    deliveryFee: 0,
  },
};

/* ---- Helpers ---- */

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

const statusText: Record<OrderStatus, string> = {
  Pending: "text-amber-400",
  Preparing: "text-cyan-500",
  "Ready for Pickup": "text-pink",
  Delivered: "text-emerald-500",
  Cancelled: "text-gray-400",
};

// What the vendor can do next, based on the current status
const nextStep: Partial<
  Record<OrderStatus, { label: string; next: OrderStatus }>
> = {
  Preparing: { label: "Mark as Ready", next: "Ready for Pickup" },
};

export { orders, naira, statusText, nextStep };
