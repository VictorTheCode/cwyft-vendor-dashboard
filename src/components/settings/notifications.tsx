"use client";

import { notificationOptions } from "@/constants/settings";
import { useState } from "react";
import { Toggle } from "../ui/toggle";
import { NotifKey } from "@/types";

export function Notifications() {
  const [prefs, setPrefs] = useState<Record<NotifKey, boolean>>({
    newOrders: false,
    orderUpdates: false,
    payouts: false,
    promos: true,
  });

  return (
    <section className="max-w-md">
      <h2 className="text-sm font-semibold text-navy">
        Notification Preferences
      </h2>
      <p className="text-[11px] text-gray-500">
        Choose which notifications you receive
      </p>
      <div className="mt-2 divide-y divide-border rounded-xl border border-border bg-white px-4">
        {notificationOptions.map((o) => (
          <div key={o.key} className="flex items-center justify-between py-3">
            <div>
              <p className="text-[11px] font-semibold text-navy">{o.title}</p>
              <p className="text-[10px] text-gray-500">{o.desc}</p>
            </div>
            <Toggle
              label={o.title}
              checked={prefs[o.key]}
              onChange={(v) => setPrefs({ ...prefs, [o.key]: v })}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
