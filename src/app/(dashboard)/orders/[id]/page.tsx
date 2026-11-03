export default function OrderDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-900">Order Details</h1>
      <p className="text-sm text-gray-500 mt-1">
        View order information and status.
      </p>

      {/* TODO: Order detail view */}
    </div>
  );
}

