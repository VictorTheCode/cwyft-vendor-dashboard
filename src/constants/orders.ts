import { Order, OrderStatus } from "@/types";

export const orderList: (Order & { time: string; itemsSummary: string })[] = [
  {
    id: "CY-1028",
    placedAt: "today at 11:42 AM",
    time: "11:42 AM",
    status: "Pending",
    customer: {
      name: "Judith Oluchi",
      phone: "0801 234 5678",
      address: "Student Hostel, Main Campus",
    },
    items: [{ name: "Shawarma", qty: 1, price: 3000, image: "/shar.png" }],
    itemsSummary: "Shawarma × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1027",
    placedAt: "today at 11:28 AM",
    time: "11:28 AM",
    status: "Preparing",
    customer: {
      name: "David Ifeanyi",
      phone: "0802 345 6789",
      address: "Block B, New Hostel",
    },
    items: [{ name: "Jellof Rice", qty: 1, price: 4200, image: "/jollof.png" }],
    itemsSummary: "Jellof Rice × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1026",
    placedAt: "today at 8:00 PM",
    time: "20:00 PM",
    status: "Ready for Pickup",
    customer: {
      name: "Godswill Neche",
      phone: "0803 456 7890",
      address: "Faculty of Science Annex",
    },
    items: [{ name: "Fried Rice", qty: 1, price: 3500, image: "/fried.png" }],
    itemsSummary: "Fried Rice × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1025",
    placedAt: "today at 10:42 AM",
    time: "10:42 AM",
    status: "Delivered",
    customer: {
      name: "Timini Egbuson",
      phone: "0804 567 8901",
      address: "Hall 3, Main Campus",
    },
    items: [{ name: "Shawarma", qty: 1, price: 3000, image: "/shar.png" }],
    itemsSummary: "Shawarma × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1024",
    placedAt: "today at 11:42 AM",
    time: "11:42 AM",
    status: "Pending",
    customer: {
      name: "Chris Lawson",
      phone: "0805 678 9012",
      address: "Staff Quarters, Block A",
    },
    items: [
      { name: "Peppered Turkey", qty: 1, price: 4500, image: "/chicken.png" },
    ],
    itemsSummary: "Peppered Turkey × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1023",
    placedAt: "today at 11:00 AM",
    time: "11:00 AM",
    status: "Ready for Pickup",
    customer: {
      name: "Fola Pondis",
      phone: "0806 789 0123",
      address: "Female Hostel C",
    },
    items: [{ name: "Pounded yam", qty: 1, price: 6000, image: "/ofada.png" }],
    itemsSummary: "Pounded yam × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1022",
    placedAt: "today at 12:42 PM",
    time: "12:42 AM",
    status: "Preparing",
    customer: {
      name: "Aisha Shakira",
      phone: "0807 890 1234",
      address: "Engineering Block",
    },
    items: [{ name: "Shawarma", qty: 1, price: 5000, image: "/shar.png" }],
    itemsSummary: "Shawarma × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1021",
    placedAt: "today at 7:42 AM",
    time: "7:42 AM",
    status: "Pending",
    customer: {
      name: "Tina Esther",
      phone: "0808 901 2345",
      address: "Main Gate Plaza",
    },
    items: [{ name: "Beef Suya", qty: 2, price: 3900, image: "/suya.png" }],
    itemsSummary: "Beef Suya × 2",
    deliveryFee: 0,
  },
  {
    id: "CY-1020",
    placedAt: "today at 5:42 PM",
    time: "17:42 PM",
    status: "Delivered",
    customer: {
      name: "James Lebron",
      phone: "0809 012 3456",
      address: "Sports Complex Hostel",
    },
    items: [{ name: "Zobo", qty: 1, price: 2800, image: "/drinks.png" }],
    itemsSummary: "Zobo × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1019",
    placedAt: "today at 9:42 PM",
    time: "21:42 PM",
    status: "Ready for Pickup",
    customer: {
      name: "Judith Queen",
      phone: "0810 123 4567",
      address: "Student Hostel, Main Campus",
    },
    items: [{ name: "Burger", qty: 1, price: 3200, image: "/wrap.png" }],
    itemsSummary: "Burger × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1018",
    placedAt: "today at 11:30 AM",
    time: "11:30 AM",
    status: "Pending",
    customer: {
      name: "Sodiq Usman",
      phone: "0811 234 5678",
      address: "PG Hostel, Block D",
    },
    items: [{ name: "Spaghetti", qty: 1, price: 4500, image: "/jollof.png" }],
    itemsSummary: "Spaghetti × 1",
    deliveryFee: 0,
  },
  // Page 2 (11 items) + Page 3 (2 items) -> Total 24 orders (Pending: 6, Preparing: 8, Ready: 5, Completed: 5)
  {
    id: "CY-1017",
    placedAt: "today at 10:15 AM",
    time: "10:15 AM",
    status: "Preparing",
    customer: {
      name: "Chidi Okafor",
      phone: "0812 345 6789",
      address: "Male Hostel A",
    },
    items: [{ name: "Ofada Rice", qty: 1, price: 3500, image: "/ofada.png" }],
    itemsSummary: "Ofada Rice × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1016",
    placedAt: "today at 10:02 AM",
    time: "10:02 AM",
    status: "Pending",
    customer: {
      name: "Amaka Nwosu",
      phone: "0813 456 7890",
      address: "Library Road",
    },
    items: [{ name: "Plantain & Egg", qty: 1, price: 2500, image: "/plantain.png" }],
    itemsSummary: "Plantain & Egg × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1015",
    placedAt: "today at 9:50 AM",
    time: "9:50 AM",
    status: "Preparing",
    customer: {
      name: "Bola Adeyemi",
      phone: "0814 567 8901",
      address: "Medical Hostel",
    },
    items: [{ name: "Jellof Rice & Chicken", qty: 2, price: 3500, image: "/jollof.png" }],
    itemsSummary: "Jellof Rice & Chicken × 2",
    deliveryFee: 0,
  },
  {
    id: "CY-1014",
    placedAt: "today at 9:40 AM",
    time: "9:40 AM",
    status: "Ready for Pickup",
    customer: {
      name: "Kemi Balogun",
      phone: "0815 678 9012",
      address: "Arts Courtyard",
    },
    items: [{ name: "Fried Rice & Chicken", qty: 1, price: 3500, image: "/fried.png" }],
    itemsSummary: "Fried Rice & Chicken × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1013",
    placedAt: "today at 9:25 AM",
    time: "9:25 AM",
    status: "Delivered",
    customer: {
      name: "Tunde Bakare",
      phone: "0816 789 0123",
      address: "Off-campus, Epe Road",
    },
    items: [{ name: "Beef Suya", qty: 1, price: 2000, image: "/beef.png" }],
    itemsSummary: "Beef Suya × 1",
    deliveryFee: 500,
  },
  {
    id: "CY-1012",
    placedAt: "today at 9:10 AM",
    time: "9:10 AM",
    status: "Preparing",
    customer: {
      name: "Zainab Musa",
      phone: "0817 890 1234",
      address: "Female Hostel A",
    },
    items: [{ name: "Shawarma", qty: 2, price: 3000, image: "/shar.png" }],
    itemsSummary: "Shawarma × 2",
    deliveryFee: 0,
  },
  {
    id: "CY-1011",
    placedAt: "today at 8:55 AM",
    time: "8:55 AM",
    status: "Pending",
    customer: {
      name: "Emeka Eze",
      phone: "0818 901 2345",
      address: "Student Union Building",
    },
    items: [{ name: "Coke & Fanta", qty: 3, price: 1000, image: "/drinks.png" }],
    itemsSummary: "Coke & Fanta × 3",
    deliveryFee: 0,
  },
  {
    id: "CY-1010",
    placedAt: "today at 8:40 AM",
    time: "8:40 AM",
    status: "Preparing",
    customer: {
      name: "Seyi Martins",
      phone: "0819 012 3456",
      address: "Staff Quarters, Block C",
    },
    items: [{ name: "Ofada Rice", qty: 1, price: 2500, image: "/ofada.png" }],
    itemsSummary: "Ofada Rice × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1009",
    placedAt: "today at 8:30 AM",
    time: "8:30 AM",
    status: "Ready for Pickup",
    customer: {
      name: "Ngozi Obi",
      phone: "0802 111 2233",
      address: "Hall 2, Main Campus",
    },
    items: [{ name: "Plantain & Egg", qty: 2, price: 2500, image: "/plantain.png" }],
    itemsSummary: "Plantain & Egg × 2",
    deliveryFee: 0,
  },
  {
    id: "CY-1008",
    placedAt: "today at 8:15 AM",
    time: "8:15 AM",
    status: "Delivered",
    customer: {
      name: "Ibrahim Yusuf",
      phone: "0803 222 3344",
      address: "Male Hostel B",
    },
    items: [{ name: "Jellof Rice", qty: 1, price: 3500, image: "/jollof.png" }],
    itemsSummary: "Jellof Rice × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1007",
    placedAt: "today at 8:05 AM",
    time: "8:05 AM",
    status: "Preparing",
    customer: {
      name: "Funke Akindele",
      phone: "0804 333 4455",
      address: "Law Faculty",
    },
    items: [{ name: "Shawarma", qty: 1, price: 3000, image: "/shar.png" }],
    itemsSummary: "Shawarma × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1006",
    placedAt: "today at 7:50 AM",
    time: "7:50 AM",
    status: "Preparing",
    customer: {
      name: "Uche Kalu",
      phone: "0805 444 5566",
      address: "Student Hostel, Main Campus",
    },
    items: [{ name: "Fried Rice", qty: 1, price: 3500, image: "/fried.png" }],
    itemsSummary: "Fried Rice × 1",
    deliveryFee: 0,
  },
  {
    id: "CY-1005",
    placedAt: "today at 7:30 AM",
    time: "7:30 AM",
    status: "Delivered",
    customer: {
      name: "Opeyemi Ade",
      phone: "0806 555 6677",
      address: "Female Hostel B",
    },
    items: [{ name: "Ofada Rice", qty: 1, price: 3000, image: "/ofada.png" }],
    itemsSummary: "Ofada Rice × 1",
    deliveryFee: 0,
  },
];

// Keep dashboard CW* IDs resolvable too so every link in Recent Orders works
const legacyOrders: Record<string, Order> = {
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

const orders: Record<string, Order> = {
  ...legacyOrders,
  ...Object.fromEntries(orderList.map((o) => [o.id, o])),
};

/* ---- Helpers ---- */

const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

const statusText: Record<OrderStatus, string> = {
  Pending: "text-amber-400",
  Preparing: "text-cyan-500",
  "Ready for Pickup": "text-emerald-500",
  Delivered: "text-gray-500",
  Cancelled: "text-gray-400",
};

const shortStatusLabel: Record<OrderStatus, string> = {
  Pending: "Pending",
  Preparing: "Preparing",
  "Ready for Pickup": "Ready",
  Delivered: "Completed",
  Cancelled: "Cancelled",
};

// What the vendor can do next, based on the current status
const nextStep: Partial<
  Record<OrderStatus, { label: string; next: OrderStatus }>
> = {
  Preparing: { label: "Mark as Ready", next: "Ready for Pickup" },
};

export { orders, naira, statusText, shortStatusLabel, nextStep };
