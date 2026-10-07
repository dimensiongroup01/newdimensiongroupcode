"use client";

import { FormEvent, useState } from "react";

const TO = "contact@dimensiongroup.co.in";

/**
 * Proposal request form. The site is a static export with no backend, so on
 * submit it opens the visitor's email app with a pre-filled message to the
 * Dimension Group inbox.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const interest = get("interest");
    const subject = `Proposal request${interest ? ` — ${interest}` : ""}`;
    const body = [
      `Name: ${get("name")}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Interested in: ${interest || "Not specified"}`,
      "",
      get("message"),
    ].join("\n");
    window.location.href = `mailto:${TO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 p-8 sm:p-12 self-center">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="sr-only">Full name</span>
          <input name="name" required autoComplete="name" className="input-field" placeholder="Full name" />
        </label>
        <label className="block">
          <span className="sr-only">Phone number</span>
          <input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="input-field" placeholder="Phone number" />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Email address</span>
        <input name="email" type="email" required autoComplete="email" className="input-field" placeholder="Email address" />
      </label>
      <label className="block">
        <span className="sr-only">I&apos;m interested in</span>
        <select name="interest" defaultValue="" className="input-field text-slate">
          <option value="">I&apos;m interested in...</option>
          <option>Provident Fund</option>
          <option>Bonds & Debentures</option>
          <option>Mutual Funds</option>
          <option>Fixed Deposits</option>
        </select>
      </label>
      <label className="block">
        <span className="sr-only">Tell us about your goals</span>
        <textarea name="message" rows={5} className="input-field resize-none" placeholder="Tell us about your goals" />
      </label>
      <button
        type="submit"
        className="group inline-flex items-center gap-2 bg-ink text-paper font-semibold px-8 py-4 rounded-full shadow-[0_18px_40px_-14px_rgba(15,23,42,0.7)] transition hover:bg-cobalt-dim hover:-translate-y-0.5"
      >
        Request proposal
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </button>
      <p role="status" className="min-h-[1.25rem] text-sm text-slate">
        {sent ? `Your email app should open with the request ready to send to ${TO}.` : ""}
      </p>
    </form>
  );
}
