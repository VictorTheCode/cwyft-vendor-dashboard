import { Suspense } from "react";
import { OrderDetails } from "@/components/orders/order-detail";

export default function OrderDetailsPage() {
  return (
    <Suspense
      fallback={<p className="text-sm text-gray-500">Loading order...</p>}
    >
      <OrderDetails />
    </Suspense>
  );
}
