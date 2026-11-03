import { ContactCards } from "@/components/support/contact-card";
import { FaqList } from "@/components/support/faqs-list";
import { SupportForm } from "@/components/support/support-form";

export default function SupportPage() {
  return (
    <div className="max-w-5xl space-y-8">
      <div>
        <h1 className="text-lg font-semibold text-navy">Help &amp; Support</h1>
        <p className="mt-0.5 text-xs text-navy">
          Find answers or get in touch with the CWYFT team
        </p>
      </div>

      <ContactCards />

      <div className="grid gap-6 lg:grid-cols-2">
        <FaqList />
        <SupportForm />
      </div>
    </div>
  );
}
