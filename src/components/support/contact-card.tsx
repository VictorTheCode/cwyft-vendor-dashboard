import {
  ChatIcon,
  MailIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/components/icons";
import { contactChannels } from "@/constants/support";

const icons = { email: MailIcon, phone: PhoneIcon, chat: WhatsappIcon };

export function ContactCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {contactChannels.map((c) => {
        const Icon = icons[c.key];
        return (
          <a
            key={c.key}
            href={c.href}
            className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 transition hover:border-pink"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-pink/10 text-pink">
              <Icon />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-navy">{c.title}</p>
              <p className="mt-0.5 truncate text-xs text-gray-700">
                {c.detail}
              </p>
              <p className="mt-1 text-[11px] text-gray-500">{c.hint}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
