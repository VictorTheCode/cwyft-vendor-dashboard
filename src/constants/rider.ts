export type RiderDeliveryStatus = "New" | "Active" | "Completed" | "Cancelled";

export type RiderDelivery = {
  id: string;
  customer: string;
  phone: string;
  pickup: string;
  dropoff: string;
  distance: string;
  eta: string;
  itemsCount: number;
  amount: number;
  status: RiderDeliveryStatus;
  date: string;
  dateTime: string;
};

export const riderDeliveries: RiderDelivery[] = [
  { id: "CY-1028", customer: "Judith Oluchi", phone: "0801 234 5678", pickup: "Store A", dropoff: "Student Hostel, Main Campus", distance: "2.5 km", eta: "15 mins", itemsCount: 2, amount: 1500, status: "New", date: "Nov 4", dateTime: "Today, 22:24PM" },
  { id: "CY-1027", customer: "David Ifeanyi", phone: "0802 345 6789", pickup: "Store B", dropoff: "Hostel B", distance: "1.8 km", eta: "12 mins", itemsCount: 1, amount: 1800, status: "New", date: "Nov 4", dateTime: "Today, 21:00PM" },
  { id: "CY-1026", customer: "Godswill Neche", phone: "0803 456 7890", pickup: "Store C", dropoff: "Hostel C", distance: "3.1 km", eta: "18 mins", itemsCount: 3, amount: 2000, status: "Active", date: "Nov 3", dateTime: "Today, 15:45PM" },
  { id: "CY-1025", customer: "Timini Egbuson", phone: "0804 567 8901", pickup: "Store D", dropoff: "Hostel D", distance: "1.2 km", eta: "10 mins", itemsCount: 2, amount: 1000, status: "Completed", date: "Nov 3", dateTime: "Today, 13:00PM" },
  { id: "CY-1024", customer: "Chris Lawson", phone: "0805 678 9012", pickup: "Store E", dropoff: "Hostel E", distance: "2.0 km", eta: "14 mins", itemsCount: 1, amount: 1200, status: "New", date: "Nov 2", dateTime: "Today, 10:12AM" },
  { id: "CY-1023", customer: "Fola Pondis", phone: "0806 789 0123", pickup: "Store F", dropoff: "Hostel F", distance: "2.4 km", eta: "15 mins", itemsCount: 2, amount: 1300, status: "Completed", date: "Nov 2", dateTime: "Today, 09:30AM" },
  { id: "CY-1022", customer: "Aisha Shakira", phone: "0807 890 1234", pickup: "Store G", dropoff: "Hostel G", distance: "2.9 km", eta: "17 mins", itemsCount: 3, amount: 2500, status: "Active", date: "Nov 2", dateTime: "Nov 2, 18:10PM" },
  { id: "CY-1021", customer: "Tina Esther", phone: "0808 901 2345", pickup: "Store H", dropoff: "Hostel H", distance: "1.6 km", eta: "11 mins", itemsCount: 1, amount: 1500, status: "New", date: "Nov 1", dateTime: "Nov 1, 16:40PM" },
  { id: "CY-1020", customer: "James Lebron", phone: "0809 012 3456", pickup: "Store I", dropoff: "Hostel I", distance: "2.2 km", eta: "14 mins", itemsCount: 2, amount: 2000, status: "Completed", date: "Nov 1", dateTime: "Nov 1, 14:20PM" },
  { id: "CY-1019", customer: "Judith Queen", phone: "0810 123 4567", pickup: "Store J", dropoff: "Hostel J", distance: "1.9 km", eta: "13 mins", itemsCount: 1, amount: 1500, status: "Completed", date: "Nov 1", dateTime: "Nov 1, 12:15PM" },
  { id: "CY-1018", customer: "Sodiq Usman", phone: "0811 234 5678", pickup: "Store K", dropoff: "Hostel K", distance: "2.7 km", eta: "16 mins", itemsCount: 2, amount: 2000, status: "Cancelled", date: "Nov 1", dateTime: "Nov 1, 10:05AM" },
  { id: "CY-1017", customer: "Chidi Okafor", phone: "0812 345 6789", pickup: "David's Kitchen", dropoff: "Male Hostel A", distance: "1.5 km", eta: "10 mins", itemsCount: 1, amount: 1500, status: "Completed", date: "Oct 31", dateTime: "Oct 31, 19:20PM" },
  { id: "CY-1016", customer: "Amaka Nwosu", phone: "0813 456 7890", pickup: "Mama's Kitchen", dropoff: "Library Road", distance: "2.1 km", eta: "14 mins", itemsCount: 2, amount: 1800, status: "Cancelled", date: "Oct 31", dateTime: "Oct 31, 17:10PM" },
];

export const riderDeliveriesById: Record<string, RiderDelivery> =
  Object.fromEntries(riderDeliveries.map((d) => [d.id, d]));

export const riderDashboardRecent = [
  { id: "CY-1028", customer: "Judith Oluchi", amount: 1500, status: "Completed", dateTime: "Today, 22:24PM" },
  { id: "CY-1027", customer: "Lebron James", amount: 1800, status: "Completed", dateTime: "Today, 21:00PM" },
  { id: "CY-1026", customer: "Elue David", amount: 2000, status: "In Progress", dateTime: "Today, 15:45PM" },
  { id: "CY-1025", customer: "Ibeawuchi Godswill", amount: 1000, status: "Completed", dateTime: "Today, 13:00PM" },
  { id: "CY-1024", customer: "Opemipo Opeyemi", amount: 1200, status: "Completed", dateTime: "Today, 10:12AM" },
  { id: "CY-1023", customer: "Pelumi Maxwell", amount: 1500, status: "Completed", dateTime: "Today, 09:30AM" },
];

export const riderEarningsRanges = {
  "Last 7 Days": {
    total: 48500,
    labels: ["Mon.", "Tues.", "Wed.", "Thurs.", "Fri.", "Sat.", "Sun."],
    values: [16000, 26000, 8000, 14000, 37000, 30000, 40000],
  },
  "Last 30 Days": {
    total: 184000,
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [38000, 45000, 52500, 48500],
  },
  "This Month": {
    total: 92000,
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [18000, 24000, 26500, 23500],
  },
} as const;

export const riderTransactions = [
  { date: "Nov 4, 2026", desc: "Delivery #CY-1028", type: "Delivery" as const, amount: 1500 },
  { date: "Nov 4, 2026", desc: "Delivery #CY-1027", type: "Delivery" as const, amount: 1800 },
  { date: "Nov 3, 2026", desc: "Delivery #CY-1026", type: "Delivery" as const, amount: 1000 },
  { date: "Nov 3, 2026", desc: "Weekly Payout", type: "Payout" as const, amount: 20000 },
  { date: "Nov 1, 2026", desc: "Delivery #CY-1025", type: "Delivery" as const, amount: 2000 },
  { date: "Nov 1, 2026", desc: "Weekly Payout", type: "Payout" as const, amount: 12000 },
];

export const riderFaqs = [
  {
    q: "How do I accept a delivery request?",
    a: "Go to Deliveries, click View on any New request, review the pickup and drop-off details, and click Accept request.",
  },
  {
    q: "How can I update my delivery status?",
    a: "Open your active delivery from the Dashboard or Deliveries page and click Mark as Delivered once the customer receives the order.",
  },
  {
    q: "When will I receive my earnings?",
    a: "Weekly payouts are processed every Friday to your saved bank account.",
  },
  {
    q: "How do I update my profile or vehicle information?",
    a: "Visit the Profile page and click Edit Profile to update your personal or vehicle information.",
  },
  {
    q: "What should i do if i encounter a problem during delivery?",
    a: "Use Contact Customer on the Active Delivery screen or reach out to our team via Email, Phone, or WhatsApp Support.",
  },
];
