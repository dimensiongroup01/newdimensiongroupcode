"use client";

import { useState } from "react";

const investLinks = [
  { label: "Provident Fund", href: "/provident-fund" },
  { label: "Bonds & Debentures", href: "/bond" },
  { label: "Mutual Funds", href: "/mutual-fund" },
  { label: "Fixed Deposits", href: "/fixed-deposit" },
];

const investorLinks = [
  { label: "Annual Return", href: "/annual-return" },
  { label: "Policies", href: "/policies" },
  { label: "Code of Conduct", href: "/codeofconduct" },
];

function DesktopDropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="relative group">
      <button className="nav-underline hover:text-ink uppercase" type="button">
        {label}
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-0 top-full pt-4 transition">
        <div className="w-56 rounded-lg border border-line bg-white p-2 shadow-xl shadow-ink/10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2.5 text-[12px] text-ink/70 hover:bg-paper hover:text-cobalt"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur border-b border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img
              src="https://dimensiongroup.co.in/wp-content/uploads/2019/05/dimesnion-logo-s.png"
              alt="Dimension Group"
              className="h-12 w-auto"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-7 font-mono text-[12px] tracking-wide text-ink/70">
            <a href="/" className="nav-underline hover:text-ink">HOME</a>
            <a href="/service" className="nav-underline hover:text-ink">SERVICE</a>
            <DesktopDropdown label="Invest" links={investLinks} />
            <a href="/group-companies" className="nav-underline hover:text-ink">GROUP COMPANIES</a>
            <a href="/business-partner" className="nav-underline hover:text-ink">BUSINESS PARTNERS</a>
            <DesktopDropdown label="Investor Corner" links={investorLinks} />
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://camskra.com/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] tracking-wide border border-ink/15 text-ink px-4 py-2.5 rounded-full hover:border-cobalt hover:text-cobalt transition-colors"
            >
              CHECK KYC
            </a>
            <a
              href="https://dimensiongroup.themfbox.com/"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[12px] tracking-wide bg-ink text-paper px-5 py-2.5 rounded-full hover:bg-cobalt transition-colors"
            >
              VIEW PORTFOLIO
            </a>
          </div>

          <button className="lg:hidden text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 font-mono text-sm text-ink/80">
            <a href="/" onClick={() => setOpen(false)}>HOME</a>
            <a href="/service" onClick={() => setOpen(false)}>SERVICE</a>
            <div>
              <p className="mb-2 text-xs text-cobalt">INVEST</p>
              <div className="grid gap-2 pl-3">
                {investLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="/group-companies" onClick={() => setOpen(false)}>GROUP COMPANIES</a>
            <a href="/business-partner" onClick={() => setOpen(false)}>BUSINESS PARTNERS</a>
            <div>
              <p className="mb-2 text-xs text-cobalt">INVESTOR CORNER</p>
              <div className="grid gap-2 pl-3">
                {investorLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="https://camskra.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-ink/15 text-center py-2.5 rounded-full"
              onClick={() => setOpen(false)}
            >
              CHECK KYC
            </a>
            <a
              href="https://dimensiongroup.themfbox.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-ink text-paper text-center py-2.5 rounded-full"
              onClick={() => setOpen(false)}
            >
             VIEW PORTFOLIO
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
