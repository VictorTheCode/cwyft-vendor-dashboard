export type AdminConsumer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  orders: number;
  dateJoined: string;
  status: "Active" | "Inactive";
};

export type AdminVendor = {
  id: string;
  vendor: string;
  owner: string;
  email: string;
  orders: number;
  verification: "Verified" | "Pending" | "Rejected";
  status: "Active" | "Inactive";
};

export type AdminRider = {
  id: string;
  name: string;
  email: string;
  phone: string;
  deliveries: number;
  status: "Active" | "Pending";
};

export type AdminOrder = {
  id: string;
  consumer: string;
  vendor: string;
  amount: number;
  date: string;
  status: "Delivered" | "Preparing" | "Cancelled" | "On the way";
};

export type AdminTransaction = {
  id: string;
  orderId: string;
  consumer: string;
  method: "Card" | "Transfer" | "Cash";
  amount: number;
  date: string;
  status: "Successful" | "Pending" | "Failed";
};

export const adminKpis = [
  { label: "Total Orders", value: "1,280", delta: "↑ 12% this month" },
  { label: "Total Consumers", value: "2,450", delta: "↑ 18% this month" },
  { label: "Total Vendors", value: "186", delta: "↑ 24% this month" },
  { label: "Total Riders", value: "94", delta: "↑ 6% this month" },
];

export const adminPerformanceRanges = {
  "Last 7 days": {
    labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
    orders: [150, 210, 185, 270, 220, 310, 285],
    revenue: [90, 150, 125, 200, 160, 240, 215],
  },
  "Last 30 days": {
    labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"],
    orders: [280, 340, 310, 350],
    revenue: [180, 240, 215, 260],
  },
  "This year": {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    orders: [920, 1080, 1190, 1280],
    revenue: [610, 740, 830, 910],
  },
} as const;

export const adminRecentActivity = [
  {
    type: "consumer",
    title: "New consumer registered",
    desc: "A new consumer joined Cwyft",
    time: "2 min ago",
  },
  {
    type: "vendor",
    title: "New vendor registered",
    desc: "A new vendor joined Cwyft",
    time: "5 min ago",
  },
  {
    type: "rider",
    title: "New rider registered",
    desc: "A new rider joined Cwyft",
    time: "30 min ago",
  },
  {
    type: "order",
    title: "New order received",
    desc: "Order #CY1024 was placed",
    time: "1 hr ago",
  },
  {
    type: "done",
    title: "Order completed",
    desc: "Order #CY1021 was completed",
    time: "15 min ago",
  },
] as const;

export const adminRecentOrders: Omit<AdminOrder, "date">[] = [
  {
    id: "#CY-1028",
    consumer: "Judith Oluchi",
    vendor: "Mama's kitchen",
    amount: 8500,
    status: "Delivered",
  },
  {
    id: "#CY-1027",
    consumer: "Lebron James",
    vendor: "David's kitchen",
    amount: 5800,
    status: "Preparing",
  },
  {
    id: "#CY-1026",
    consumer: "Elue David",
    vendor: "Papa's kitchen",
    amount: 6000,
    status: "On the way",
  },
  {
    id: "#CY-1025",
    consumer: "Ibeawuchi Godswill",
    vendor: "Your kitchen",
    amount: 7000,
    status: "Delivered",
  },
  {
    id: "#CY-1024",
    consumer: "Opemipo Opeyemi",
    vendor: "Mama's kitchen",
    amount: 4200,
    status: "Preparing",
  },
  {
    id: "#CY-1023",
    consumer: "Pelumi Maxwell",
    vendor: "Mama's kitchen",
    amount: 3500,
    status: "Preparing",
  },
];

export const initialAdminConsumers: AdminConsumer[] = [
  { id: "c1", name: "Judith Oluchi", email: "judith@gmail.com", phone: "0801 234 5678", orders: 12, dateJoined: "Nov 6, 2026", status: "Active" },
  { id: "c2", name: "David Ifeanyi", email: "david@gmail.com", phone: "0802 345 6789", orders: 11, dateJoined: "Nov 6, 2026", status: "Active" },
  { id: "c3", name: "Godswill Neche", email: "neche@gmail.com", phone: "0803 456 7890", orders: 2, dateJoined: "Nov 6, 2026", status: "Inactive" },
  { id: "c4", name: "Timini Egbuson", email: "tim@gmail.com", phone: "0804 567 8901", orders: 10, dateJoined: "Nov 5, 2026", status: "Active" },
  { id: "c5", name: "Chris Lawson", email: "chris@gmail.com", phone: "0805 678 9012", orders: 11, dateJoined: "Nov 5, 2026", status: "Inactive" },
  { id: "c6", name: "Fola Pondis", email: "fola@gmail.com", phone: "0806 789 0123", orders: 8, dateJoined: "Nov 4, 2026", status: "Active" },
  { id: "c7", name: "Aisha Shakira", email: "aisha@gmail.com", phone: "0807 890 1234", orders: 6, dateJoined: "Nov 4, 2026", status: "Active" },
  { id: "c8", name: "Tina Esther", email: "tina@gmail.com", phone: "0808 901 2345", orders: 5, dateJoined: "Nov 4, 2026", status: "Inactive" },
  { id: "c9", name: "James Lebron", email: "james@gmail.com", phone: "0809 012 3456", orders: 9, dateJoined: "Nov 4, 2026", status: "Inactive" },
  { id: "c10", name: "Judith Queen", email: "jqueen@gmail.com", phone: "0810 123 4567", orders: 12, dateJoined: "Nov 3, 2026", status: "Active" },
  { id: "c11", name: "Sodiq Usman", email: "usman@gmail.com", phone: "0811 234 5678", orders: 10, dateJoined: "Nov 3, 2026", status: "Inactive" },
  { id: "c12", name: "Amaka Nwosu", email: "amaka@gmail.com", phone: "0812 345 6789", orders: 7, dateJoined: "Nov 2, 2026", status: "Active" },
  { id: "c13", name: "Chidi Okafor", email: "chidi@gmail.com", phone: "0813 456 7890", orders: 4, dateJoined: "Nov 1, 2026", status: "Active" },
];

export const initialAdminVendors: AdminVendor[] = [
  { id: "v1", vendor: "Mama's kitchen", owner: "Judith Oluchi", email: "judith@gmail.com", orders: 12, verification: "Verified", status: "Active" },
  { id: "v2", vendor: "David's kitchen", owner: "David Ifeanyi", email: "david@gmail.com", orders: 11, verification: "Verified", status: "Active" },
  { id: "v3", vendor: "Papa's kitchen", owner: "Godswill Neche", email: "neche@gmail.com", orders: 2, verification: "Pending", status: "Inactive" },
  { id: "v4", vendor: "Your kitchen", owner: "Timini Egbuson", email: "tim@gmail.com", orders: 10, verification: "Verified", status: "Active" },
  { id: "v5", vendor: "Mama's kitchen", owner: "Chris Lawson", email: "chris@gmail.com", orders: 11, verification: "Rejected", status: "Inactive" },
  { id: "v6", vendor: "Mama's kitchen", owner: "Fola Pondis", email: "fola@gmail.com", orders: 8, verification: "Pending", status: "Active" },
  { id: "v7", vendor: "Mama's kitchen", owner: "Aisha Shakira", email: "aisha@gmail.com", orders: 6, verification: "Verified", status: "Active" },
  { id: "v8", vendor: "David's kitchen", owner: "Tina Esther", email: "tina@gmail.com", orders: 5, verification: "Rejected", status: "Inactive" },
  { id: "v9", vendor: "Papa's kitchen", owner: "James Lebron", email: "james@gmail.com", orders: 9, verification: "Verified", status: "Inactive" },
  { id: "v10", vendor: "Your kitchen", owner: "Judith Queen", email: "jqueen@gmail.com", orders: 12, verification: "Pending", status: "Active" },
  { id: "v11", vendor: "Mama's kitchen", owner: "Sodiq Usman", email: "usman@gmail.com", orders: 10, verification: "Verified", status: "Inactive" },
  { id: "v12", vendor: "Campus Grill", owner: "Tunde Bakare", email: "tunde@gmail.com", orders: 14, verification: "Verified", status: "Active" },
];

export const initialAdminRiders: AdminRider[] = [
  { id: "r1", name: "Judith Oluchi", email: "judith@gmail.com", phone: "0801 234 5678", deliveries: 120, status: "Active" },
  { id: "r2", name: "David Ifeanyi", email: "david@gmail.com", phone: "0802 345 6789", deliveries: 111, status: "Active" },
  { id: "r3", name: "Godswill Neche", email: "neche@gmail.com", phone: "0803 456 7890", deliveries: 102, status: "Pending" },
  { id: "r4", name: "Timini Egbuson", email: "tim@gmail.com", phone: "0804 567 8901", deliveries: 100, status: "Active" },
  { id: "r5", name: "Chris Lawson", email: "chris@gmail.com", phone: "0805 678 9012", deliveries: 91, status: "Pending" },
  { id: "r6", name: "Fola Pondis", email: "fola@gmail.com", phone: "0806 789 0123", deliveries: 89, status: "Active" },
  { id: "r7", name: "Aisha Shakira", email: "aisha@gmail.com", phone: "0807 890 1234", deliveries: 86, status: "Active" },
  { id: "r8", name: "Tina Esther", email: "tina@gmail.com", phone: "0808 901 2345", deliveries: 59, status: "Pending" },
  { id: "r9", name: "James Lebron", email: "james@gmail.com", phone: "0809 012 3456", deliveries: 95, status: "Pending" },
  { id: "r10", name: "Judith Queen", email: "jqueen@gmail.com", phone: "0810 123 4567", deliveries: 82, status: "Active" },
  { id: "r11", name: "Sodiq Usman", email: "usman@gmail.com", phone: "0811 234 5678", deliveries: 70, status: "Pending" },
  { id: "r12", name: "Ibrahim Yusuf", email: "ibrahim@gmail.com", phone: "0812 345 6789", deliveries: 64, status: "Active" },
];

export const initialAdminOrders: AdminOrder[] = [
  { id: "#CY-1028", consumer: "Judith Oluchi", vendor: "Mama's kitchen", amount: 8500, date: "Nov 4", status: "Delivered" },
  { id: "#CY-1027", consumer: "David Ifeanyi", vendor: "David's kitchen", amount: 6500, date: "Nov 4", status: "Preparing" },
  { id: "#CY-1026", consumer: "Godswill Neche", vendor: "Papa's kitchen", amount: 5500, date: "Nov 3", status: "Cancelled" },
  { id: "#CY-1025", consumer: "Timini Egbuson", vendor: "Your kitchen", amount: 6000, date: "Nov 3", status: "Delivered" },
  { id: "#CY-1024", consumer: "Chris Lawson", vendor: "Mama's kitchen", amount: 7200, date: "Nov 2", status: "Preparing" },
  { id: "#CY-1023", consumer: "Fola Pondis", vendor: "Mama's kitchen", amount: 6500, date: "Nov 2", status: "Cancelled" },
  { id: "#CY-1022", consumer: "Aisha Shakira", vendor: "Mama's kitchen", amount: 9500, date: "Nov 2", status: "Delivered" },
  { id: "#CY-1021", consumer: "Tina Esther", vendor: "David's kitchen", amount: 5000, date: "Nov 1", status: "Preparing" },
  { id: "#CY-1019", consumer: "James Lebron", vendor: "Papa's kitchen", amount: 6500, date: "Nov 1", status: "Cancelled" },
  { id: "#CY-1018", consumer: "Judith Queen", vendor: "Your kitchen", amount: 8500, date: "Nov 1", status: "Delivered" },
  { id: "#CY-1017", consumer: "Sodiq Usman", vendor: "Mama's kitchen", amount: 8500, date: "Nov 1", status: "Preparing" },
  { id: "#CY-1016", consumer: "Amaka Nwosu", vendor: "David's kitchen", amount: 4800, date: "Oct 31", status: "Delivered" },
];

export const initialAdminTransactions: AdminTransaction[] = [
  { id: "TXN-1028", orderId: "#CY-1028", consumer: "Judith Oluchi", method: "Card", amount: 8500, date: "Nov 4", status: "Successful" },
  { id: "TXN-1027", orderId: "#CY-1027", consumer: "David Ifeanyi", method: "Card", amount: 6500, date: "Nov 4", status: "Pending" },
  { id: "TXN-1026", orderId: "#CY-1026", consumer: "Godswill Neche", method: "Transfer", amount: 5500, date: "Nov 3", status: "Successful" },
  { id: "TXN-1025", orderId: "#CY-1025", consumer: "Timini Egbuson", method: "Cash", amount: 6000, date: "Nov 3", status: "Pending" },
  { id: "TXN-1024", orderId: "#CY-1024", consumer: "Chris Lawson", method: "Card", amount: 7200, date: "Nov 2", status: "Failed" },
  { id: "TXN-1023", orderId: "#CY-1023", consumer: "Fola Pondis", method: "Transfer", amount: 6500, date: "Nov 2", status: "Successful" },
  { id: "TXN-1022", orderId: "#CY-1022", consumer: "Aisha Shakira", method: "Card", amount: 9500, date: "Nov 2", status: "Successful" },
  { id: "TXN-1021", orderId: "#CY-1021", consumer: "Tina Esther", method: "Cash", amount: 5000, date: "Nov 1", status: "Pending" },
  { id: "TXN-1019", orderId: "#CY-1019", consumer: "James Lebron", method: "Cash", amount: 6500, date: "Nov 1", status: "Successful" },
  { id: "TXN-1018", orderId: "#CY-1018", consumer: "Judith Queen", method: "Card", amount: 8500, date: "Nov 1", status: "Failed" },
  { id: "TXN-1017", orderId: "#CY-1017", consumer: "Sodiq Usman", method: "Transfer", amount: 8500, date: "Nov 1", status: "Successful" },
  { id: "TXN-1016", orderId: "#CY-1016", consumer: "Amaka Nwosu", method: "Card", amount: 4800, date: "Oct 31", status: "Successful" },
];

export const adminAnalyticsRanges = {
  "Last 7 days": {
    kpis: [
      { label: "Total Sales", value: "₦2.4M", delta: "↑ 12% vs previous period" },
      { label: "Total Orders", value: "1,280", delta: "↑ 8.2% vs previous period" },
      { label: "Average Order Value", value: "₦1,875", delta: "↑ 5.4% vs previous period" },
      { label: "Order Completion Rate", value: "92%", delta: "↑ 3.1% vs previous period" },
    ],
    labels: ["Mon.", "Tues.", "Wed.", "Thur.", "Fri.", "Sat.", "Sun."],
    revenue: [200000, 315000, 260000, 370000, 425000, 235000, 290000],
    revenuePeak: "₦480k",
    orders: [105, 165, 138, 195, 228, 125, 152],
    ordersPeak: "250",
  },
  "Last 30 days": {
    kpis: [
      { label: "Total Sales", value: "₦9.6M", delta: "↑ 16% vs previous period" },
      { label: "Total Orders", value: "4,920", delta: "↑ 11.4% vs previous period" },
      { label: "Average Order Value", value: "₦1,951", delta: "↑ 4.2% vs previous period" },
      { label: "Order Completion Rate", value: "94%", delta: "↑ 2.8% vs previous period" },
    ],
    labels: ["Wk 1", "Wk 2", "Wk 3", "Wk 4"],
    revenue: [2100000, 2450000, 2350000, 2700000],
    revenuePeak: "₦2.7M",
    orders: [1100, 1250, 1210, 1360],
    ordersPeak: "1,360",
  },
  "This year": {
    kpis: [
      { label: "Total Sales", value: "₦86.4M", delta: "↑ 28% vs previous period" },
      { label: "Total Orders", value: "44,120", delta: "↑ 22.1% vs previous period" },
      { label: "Average Order Value", value: "₦1,958", delta: "↑ 6.5% vs previous period" },
      { label: "Order Completion Rate", value: "93%", delta: "↑ 4.0% vs previous period" },
    ],
    labels: ["Q1", "Q2", "Q3", "Q4"],
    revenue: [18000000, 21000000, 22400000, 25000000],
    revenuePeak: "₦25M",
    orders: [9400, 10800, 11420, 12500],
    ordersPeak: "12.5k",
  },
} as const;

export const topPerformingVendors = [
  { name: "Vendor One", orders: 245 },
  { name: "Vendor Two", orders: 198 },
  { name: "Vendor Three", orders: 176 },
  { name: "Vendor Four", orders: 142 },
  { name: "Vendor Five", orders: 120 },
  { name: "Vendor Six", orders: 102 },
];
