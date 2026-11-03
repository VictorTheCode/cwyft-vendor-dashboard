import { AccountSecurity } from "@/components/settings/account-security";
import { BankDetails } from "@/components/settings/bank-details";
import { Notifications } from "@/components/settings/notifications";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-lg font-semibold text-navy">Settings</h1>
        <p className="mt-0.5 text-xs text-navy">
          Manage your account, preferences and security
        </p>
      </div>
      <AccountSecurity />
      <Notifications />
      <BankDetails />
    </div>
  );
}
