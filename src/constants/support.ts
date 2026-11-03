import type { ContactChannel, Faq, SupportTopic } from "@/types/index";

export const topics: SupportTopic[] = [
  "Orders",
  "Payouts",
  "Menu & Inventory",
  "Account",
  "Other",
];

// PLACEHOLDERS: replace with the real CWYFT support contacts before the demo
export const contactChannels: ContactChannel[] = [
  {
    key: "email",
    title: "Email us",
    detail: "support@cwyft.com",
    hint: "We reply within 24 hours",
    href: "mailto:support@cwyft.com",
  },
  {
    key: "phone",
    title: "Call us",
    detail: "0800 000 0000",
    hint: "Mon - Sat, 8AM - 6PM",
    href: "tel:08000000000",
  },
  {
    key: "chat",
    title: "Chat on WhatsApp",
    detail: "0800 000 0000",
    hint: "Quick answers during the day",
    href: "https://wa.me/2348000000000",
  },
];

export const faqs: Faq[] = [
  {
    question: "How do I accept or reject a new order?",
    answer:
      "Open the order from the Orders page. While it is Pending, you will see Accept Offer and Reject Offer buttons under Order Actions.",
  },
  {
    question: "How do I mark a meal as unavailable?",
    answer:
      "Go to Menu Management and click the Available / Unavailable label next to the meal. Customers will not be able to order it while it is unavailable.",
  },
  {
    question: "When do I get paid?",
    answer:
      "Payouts are sent to the bank account in your Settings. You can track every payout and its status on the Earnings & Payouts page.",
  },
  {
    question: "How do I change my bank account?",
    answer:
      "Open Settings, scroll to Bank Account Details and click Update Bank Details. Make sure the account name matches your business.",
  },
  {
    question: "How do I update my opening hours?",
    answer:
      "Go to Business Profile and click Edit on the Opening Hours card. Save when you are done.",
  },
];
