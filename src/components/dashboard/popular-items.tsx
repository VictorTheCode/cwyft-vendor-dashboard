import Image from "next/image";
import { popularItems } from "@/constants/dashboard";
import { naira } from "@/lib/format";

export function PopularItems() {
  return (
    <section>
      <h2 className="mb-4 font-semibold text-navy">Popular Items</h2>
      <div className="space-y-3 rounded-2xl border border-border bg-white p-3">
        {popularItems.map((item, i) => (
          <div
            key={item.name}
            className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-surface/60"
          >
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-200">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              )}
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-navy">
                {item.name}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">
                {item.orders} Orders
              </p>
              <p className="mt-0.5 text-xs font-medium text-navy">
                {naira(item.revenue)}
              </p>
            </div>
            <span className="ml-auto self-start text-xs font-semibold text-gray-300">
              #{i + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
