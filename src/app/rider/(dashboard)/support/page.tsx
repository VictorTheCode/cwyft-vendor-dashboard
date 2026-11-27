"use client";

import { useState, type FormEvent } from "react";
import { ChevronDown, Mail, MessageCircle, Phone, Search, Send } from "lucide-react";
import { riderFaqs } from "@/constants/rider";

export default function RiderSupportPage() {
  const [query, setQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [sent, setSent] = useState(false);

  const visibleFaqs = riderFaqs.filter(
    (f) =>
      !query.trim() ||
      f.q.toLowerCase().includes(query.trim().toLowerCase()) ||
      f.a.toLowerCase().includes(query.trim().toLowerCase()),
  );

  function submitFeedback(e: FormEvent) {
    e.preventDefault();
    if (!feedback.trim()) return;
    setFeedback("");
    setSent(true);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-[#001D39]">Help &amp; Support</h1>
        <p className="mt-0.5 text-xs text-gray-600">
          Find answers to common questions or get assistance with your account
          and deliveries
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-xl">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#001D39]" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for help..."
          className="h-10 w-full rounded-full border border-gray-300 bg-white pl-10 pr-4 text-xs outline-none placeholder:text-gray-400 focus:border-pink"
        />
      </div>

      {/* FAQs + Contact Customer Care */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.25fr_1fr]">
        <section className="rounded-2xl border border-border bg-white p-5">
          <h2 className="mb-3 text-base font-semibold text-[#001D39]">
            Frequently Asked Questions
          </h2>

          <div className="divide-y divide-border">
            {visibleFaqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={faq.q} className="py-3.5">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-3 text-left text-xs font-medium text-[#001D39] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
            {visibleFaqs.length === 0 && (
              <p className="py-6 text-xs text-gray-500">
                No FAQs match your search.
              </p>
            )}
          </div>
        </section>

        <section className="self-start rounded-2xl border border-border bg-white p-5">
          <h2 className="mb-4 text-base font-semibold text-[#001D39]">
            Contact Customer Care
          </h2>

          <div className="space-y-5">
            <a
              href="mailto:support@cwyft.com"
              className="flex items-start gap-3 text-xs hover:opacity-80"
            >
              <Mail className="mt-0.5 h-5 w-5 text-pink" />
              <div>
                <p className="font-semibold text-[#001D39]">Email Support</p>
                <p className="text-[11px] text-gray-500">support@cwyft.com</p>
              </div>
            </a>

            <a
              href="tel:+2348000000000"
              className="flex items-start gap-3 text-xs hover:opacity-80"
            >
              <Phone className="mt-0.5 h-5 w-5 text-pink" />
              <div>
                <p className="font-semibold text-[#001D39]">Phone Support</p>
                <p className="text-[11px] text-gray-500">
                  Contact or support line
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 text-xs hover:opacity-80"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 text-pink" />
              <div>
                <p className="font-semibold text-[#001D39]">Whatsapp Support</p>
                <p className="text-[11px] text-gray-500">
                  Chat with our support team
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>

      {/* Notes & Feedback */}
      <section className="max-w-xl">
        <h2 className="text-base font-semibold text-[#001D39]">
          Notes &amp; Feedback
        </h2>
        <p className="mb-3 text-xs text-gray-500">
          Share suggestions, report an issue, or leave a note for the Cwyft team
        </p>

        <form
          onSubmit={submitFeedback}
          className="rounded-2xl border border-border bg-white p-4"
        >
          <textarea
            rows={5}
            value={feedback}
            onChange={(e) => {
              setFeedback(e.target.value);
              setSent(false);
            }}
            placeholder="Write your message here..."
            className="w-full resize-none text-xs text-[#001D39] outline-none placeholder:text-gray-400"
          />

          <div className="mt-3 flex items-center justify-between">
            {sent ? (
              <span className="text-xs font-medium text-emerald-600">
                Feedback sent! Thank you.
              </span>
            ) : (
              <span />
            )}
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF5B88] px-4 py-2 text-xs font-semibold text-white transition hover:bg-pink-hover cursor-pointer"
            >
              <Send className="h-3.5 w-3.5" />
              Send Feedback
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
