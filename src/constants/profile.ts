import { Hours, Info } from "@/types";

const initialInfo: Info = {
  name: "David's Kitchen",
  type: "Restaurant",
  phone: "0801 234 5678",
  email: "david@example.com",
  address: "Main campus, Student area",
};

const initialHours: Hours = [
  { day: "Monday - Friday", time: "8:00AM - 9:00PM" },
  { day: "Saturday", time: "9:00AM - 10:00PM" },
  { day: "Sunday", time: "10:00AM - 8:00PM" },
];

export { initialHours, initialInfo };
