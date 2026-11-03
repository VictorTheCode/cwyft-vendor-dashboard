const banks = [
  "Providus Bank",
  "GTBank",
  "Access Bank",
  "Zenith Bank",
  "First Bank",
  "UBA",
  "Opay",
  "Kuda",
];

const notificationOptions = [
  {
    key: "newOrders",
    title: "New Orders",
    desc: "Get notified when a customer places an order",
  },
  {
    key: "orderUpdates",
    title: "Order Updates",
    desc: "Receive updates about order status",
  },
  {
    key: "payouts",
    title: "Payout Notifications",
    desc: "Get notified when a payout is processed",
  },
  {
    key: "promos",
    title: "Promotional Contents",
    desc: "Receive news and special announcements",
  },
] as const;

export { banks, notificationOptions };
