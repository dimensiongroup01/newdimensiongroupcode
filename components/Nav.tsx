"use client";
import { useEffect, useState } from "react";

const investLinks = [
  { label: "Provident Fund", href: "/provident-fund/" },
  { label: "Bonds & Debentures", href: "/bond/" },
  { label: "Mutual Funds", href: "/mutual-fund/" },
  { label: "Fixed Deposits", href: "/fixed-deposit/" },
];

const investorLinks = [
  { label: "Annual Return", href: "/annual-return/" },
  { label: "Policies", href: "/policies/" },
  { label: "Code of Conduct", href: "/codeofconduct/" },
];

const linkClass =
  "rounded-full px-3.5 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-cobalt/10 hover:text-cobalt-dim";

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform duration-200 group-hover:rotate-180">
      <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopDropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="relative group">
      <button className={`${linkClass} inline-flex items-center gap-1.5`} type="button">
        {label}
        <Chevron />
      </button>
      <div className="invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200">
        <div className="w-60 rounded-2xl border border-slate-200/80 bg-white/95 p-2 shadow-[0_30px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group/item flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm text-slate-700 transition-colors hover:bg-gradient-to-r hover:from-cobalt/10 hover:to-copper/5 hover:text-cobalt-dim"
            >
              {link.label}
              <span aria-hidden="true" className="text-copper opacity-0 -translate-x-1 transition-all group-hover/item:opacity-100 group-hover/item:translate-x-0">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // Negative bottom margin lets the dark hero run underneath the floating bar.
    <header className="sticky top-0 z-50 -mb-[76px] px-3 pt-3 sm:-mb-[84px] sm:px-5">
      <div
        className={`mx-auto max-w-[1400px] rounded-[22px] border transition-all duration-300 ${
          scrolled || open
            ? "border-slate-200/80 bg-white/85 shadow-[0_18px_50px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl"
            : "border-white/60 bg-white/95 shadow-[0_10px_40px_-24px_rgba(15,23,42,0.4)]"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-3 sm:h-[72px] sm:px-5">
          <a href="/" className="flex items-center">
            <span className="relative block h-12 w-36 overflow-hidden sm:h-14 sm:w-[168px]">
              <img
                src="/images/dimension-group-logo.jpeg"
                width={500}
                height={500}
                fetchPriority="high"
                alt="Dimension Group logo"
                className="absolute left-1/2 top-1/2 h-[186px] w-[186px] max-w-none -translate-x-1/2 -translate-y-[53%] object-contain sm:h-[217px] sm:w-[217px]"
              />
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-0.5">
            <a href="/" className={linkClass}>Home</a>
            <a href="/service/" className={linkClass}>Service</a>
            <DesktopDropdown label="Invest" links={investLinks} />
            <a href="/group-companies/" className={linkClass}>Group companies</a>
            <a href="/business-partner/" className={linkClass}>Business partners</a>
            <a href="/#licenses" className={linkClass}>Licenses</a>
            <DesktopDropdown label="Investor corner" links={investorLinks} />
          </nav>

          <div className="hidden xl:flex items-center gap-2.5">
            <a
              href="https://camskra.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition-colors hover:border-cobalt hover:text-cobalt-dim"
            >
              Check kyc
            </a>
            <a
              href="https://dimensiongroup.wylth.com/Home/Login"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-copper-deep hover:bg-[#B34300] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_25px_-8px_rgba(255,105,0,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-8px_rgba(255,105,0,0.7)]"
            >
              View portfolio
            </a>
          </div>

          <button
            className="xl:hidden flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:border-cobalt"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="xl:hidden flex max-h-[calc(100dvh-6rem)] flex-col gap-1 overflow-y-auto overscroll-contain border-t border-slate-100 px-3 pb-5 pt-3 text-sm text-slate-800"
          >
            <a href="/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-cobalt/10 hover:text-cobalt-dim transition-colors">Home</a>
            <a href="/service/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-cobalt/10 hover:text-cobalt-dim transition-colors">Service</a>
            <div>
              <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper-deep">Invest</p>
              <div className="grid grid-cols-2 gap-1.5 px-1">
                {investLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 hover:border-cobalt/40 hover:text-cobalt-dim transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="/group-companies/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-cobalt/10 hover:text-cobalt-dim transition-colors">Group companies</a>
            <a href="/business-partner/" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-cobalt/10 hover:text-cobalt-dim transition-colors">Business partners</a>
            <a href="/#licenses" onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 hover:bg-cobalt/10 hover:text-cobalt-dim transition-colors">Licenses</a>
            <div>
              <p className="px-3 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper-deep">Investor corner</p>
              <div className="grid gap-1.5 px-1">
                {investorLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5 hover:border-cobalt/40 hover:text-cobalt-dim transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 px-1">
              <a
                href="https://camskra.com/"
                target="_blank"
                rel="noreferrer"
                className="border border-slate-300 text-slate-900 text-center py-3 rounded-full hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(false)}
              >
                Check kyc
              </a>
              <a
                href="https://dimensiongroup.wylth.com/Home/Login"
                target="_blank"
                rel="noreferrer"
                className="bg-copper-deep hover:bg-[#B34300] text-white font-semibold text-center py-3 rounded-full transition-colors"
                onClick={() => setOpen(false)}
              >
                View portfolio
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
