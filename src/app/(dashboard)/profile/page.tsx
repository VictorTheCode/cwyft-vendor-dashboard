"use client";

import { HoursSection } from "@/components/profile/hours-section";
import { InfoSection } from "@/components/profile/info-section";

export default function BusinessProfilePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-lg font-semibold text-navy">Business Profile</h1>
        <p className="mt-0.5 text-base text-navy">
          Manage your restaurant information and business details
        </p>
      </div>
      <InfoSection />
      <HoursSection />
    </div>
  );
}
