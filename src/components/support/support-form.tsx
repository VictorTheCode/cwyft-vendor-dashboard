"use client";

import { useState, type FormEvent } from "react";
import { topics } from "@/constants/support";
import type { SupportTopic } from "@/types/index";

const field =
  "w-full rounded-lg border border-border bg-white px-3 text-sm outline-none placeholder:text-gray-400 focus:border-pink";

export function SupportForm() {
  const [topic, setTopic] = useState<SupportTopic>(topics[0]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (message.trim().length < 10) {
      setError("Please describe the issue in at least 10 characters.");
      return;
    }
    // Demo only: nothing is sent anywhere. Later this becomes a POST to the backend.
    setError("");
    setMessage("");
    setSent(true);
  }

  return (
    <section>
      <h2 className="text-sm font-semibold text-navy">Send us a message</h2>
      <p className="mb-2 text-[11px] text-gray-500">
        Tell us what went wrong and we will get back to you
      </p>

      <div className="rounded-2xl border border-border bg-white p-5">
        {sent ? (
          <div className="py-6 text-center">
            <p className="text-sm font-semibold text-emerald-600">
              Message sent
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Thanks. Our team will reply by email soon.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-4 text-xs font-medium text-pink hover:underline"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="space-y-4">
            <label className="block">
              <span className="mb-1 block text-xs font-medium text-gray-600">
                Topic
              </span>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value as SupportTopic)}
                className={`${field} h-10`}
              >
                {topics.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-1 block text-xs font-medium text-gray-600">
                Message
              </span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder="Describe your issue..."
                className={`${field} resize-none py-2.5`}
              />
              {error && (
                <span className="mt-1 block text-[11px] text-red-500">
                  {error}
                </span>
              )}
            </label>

            <button
              type="submit"
              className="w-full rounded-lg bg-pink px-4 py-2.5 text-sm font-medium text-white transition hover:bg-pink/90"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
