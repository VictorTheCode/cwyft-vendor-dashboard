const orders = [
  {
    id: "#CW1024",
    customer: "Sarah Johnson",
    date: "Nov 03, 10:42 AM",
    items: 2,
    amount: "₦3,500",
    status: "Preparing",
  },
  {
    id: "#CW1023",
    customer: "Michael James",
    date: "Nov 03, 10:20 AM",
    items: 3,
    amount: "₦4,200",
    status: "Delivered",
  },
  {
    id: "#CW1022",
    customer: "Grace Williams",
    date: "Nov 03, 09:58 AM",
    items: 1,
    amount: "₦3,000",
    status: "Pending",
  },
  {
    id: "#CW1021",
    customer: "Daniel Brown",
    date: "Nov 03, 09:30 AM",
    items: 2,
    amount: "₦2,800",
    status: "Delivered",
  },
  {
    id: "#CW1020",
    customer: "Esther Ade",
    date: "Nov 03, 09:12 AM",
    items: 2,
    amount: "₦5,500",
    status: "Cancelled",
  },
];

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            Orders
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            View and manage all your customer orders.
          </p>
        </div>

        <button className="rounded-lg bg-navy px-4 py-2.5 text-sm font-medium text-white transition hover:bg-navy/90">
          Export orders
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          ["All Orders", "186"],
          ["Pending", "12"],
          ["Preparing", "20"],
          ["Completed", "154"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl border border-border bg-white p-4"
          >
            <p className="text-xs font-medium text-gray-500">{label}</p>
            <p className="mt-2 text-xl font-semibold text-gray-900">{value}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-white">
        <div className="flex flex-col justify-between gap-4 border-b border-border p-4 md:flex-row md:items-center">
          <div>
            <h2 className="font-semibold text-gray-900">All Orders</h2>
            <p className="mt-1 text-xs text-gray-500">
              A record of orders placed at your store.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="search"
              placeholder="Search order or customer..."
              className="h-10 rounded-lg border border-border bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink sm:w-64"
            />
            <select className="h-10 rounded-lg border border-border bg-white px-3 text-sm text-gray-600 outline-none focus:border-pink">
              <option>All statuses</option>
              <option>Pending</option>
              <option>Preparing</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-187.5 text-left text-sm">
            <thead className="bg-surface text-xs text-gray-500">
              <tr>
                <th className="px-5 py-3.5 font-medium">Order ID</th>
                <th className="px-5 py-3.5 font-medium">Customer</th>
                <th className="px-5 py-3.5 font-medium">Date</th>
                <th className="px-5 py-3.5 font-medium">Items</th>
                <th className="px-5 py-3.5 font-medium">Amount</th>
                <th className="px-5 py-3.5 font-medium">Status</th>
                <th className="px-5 py-3.5 font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-border">
              {orders.map((order) => (
                <tr key={order.id} className="transition hover:bg-surface/50">
                  <td className="whitespace-nowrap px-5 py-4 font-semibold text-navy">
                    {order.id}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                    {order.customer}
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-5 py-4 text-gray-600">{order.items}</td>
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-800">
                    {order.amount}
                  </td>
                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-emerald-50 text-emerald-700"
                          : order.status === "Preparing"
                            ? "bg-amber-50 text-amber-700"
                            : order.status === "Cancelled"
                              ? "bg-gray-100 text-gray-500"
                              : "bg-pink/10 text-pink"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4">
                    <a
                      href={`/orders/${order.id.replace("#", "")}`}
                      className="text-xs font-semibold text-pink hover:underline"
                    >
                      View details
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-border px-5 py-4 text-xs text-gray-500 sm:flex-row sm:items-center">
          <span>Showing 5 of 186 orders</span>
          <div className="flex items-center gap-2">
            <button
              disabled
              className="rounded-lg border border-border px-3 py-2 opacity-40"
            >
              Previous
            </button>
            <button className="rounded-lg border border-pink bg-pink/10 px-3 py-2 font-semibold text-pink">
              1
            </button>
            <button className="rounded-lg border border-border px-3 py-2">
              2
            </button>
            <button className="rounded-lg border border-border px-3 py-2">
              3
            </button>
            <button className="rounded-lg border border-border px-3 py-2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
