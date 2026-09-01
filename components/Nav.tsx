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
      <button className="hover:text-blue-600 transition-colors duration-200 font-sans text-sm font-normal text-gray-900" type="button">
        {label}
      </button>
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 absolute left-0 top-full pt-4 transition">
        <div className="w-56 rounded-lg border border-gray-200 bg-white p-2 shadow-xl shadow-gray-400/30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
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
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-lg">
      <div className="max-w-[90vw] mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-40">
          <a href="/" className="flex items-center">
            <span className="relative block h-20 w-60 overflow-hidden md:h-24 md:w-72">
              <img
                src="/images/dimension-group-logo.jpeg"
                alt="Dimension Group logo"
                className="absolute left-1/2 top-1/2 h-[310px] w-[310px] max-w-none -translate-x-1/2 -translate-y-[53%] object-contain md:h-[370px] md:w-[370px]"
              />
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7 font-sans text-sm font-normal tracking-normal text-gray-900">
            <a href="/" className="hover:text-blue-600 transition-colors duration-200">Home</a>
            <a href="/service" className="hover:text-blue-600 transition-colors duration-200">Service</a>
            <DesktopDropdown label="Invest" links={investLinks} />
            <a href="/group-companies" className="hover:text-blue-600 transition-colors duration-200">Group companies</a>
            <a href="/business-partner" className="hover:text-blue-600 transition-colors duration-200">Business partners</a>
            <a href="/#licenses" className="hover:text-blue-600 transition-colors duration-200">Licenses</a>
            <DesktopDropdown label="Investor corner" links={investorLinks} />
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://camskra.com/"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm font-normal border border-gray-300 text-gray-900 px-4 py-2.5 rounded-full hover:border-gray-900 hover:bg-gray-50 transition-colors"
            >
              Check kyc
            </a>
            <a
              href="https://dimensiongroup.themfbox.com/"
              target="_blank"
              rel="noreferrer"
              className="font-sans text-sm font-normal bg-copper text-white px-5 py-2.5 rounded-full hover:bg-orange-600 transition-colors"
            >
              View portfolio
            </a>
          </div>

          <button className="lg:hidden text-gray-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden pb-6 flex flex-col gap-4 font-sans text-sm text-gray-900 font-normal">
            <a href="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Home</a>
            <a href="/service" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Service</a>
            <div>
              <p className="mb-2 text-xs text-orange-500">Invest</p>
              <div className="grid gap-2 pl-3">
                {investLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="/group-companies" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Group companies</a>
            <a href="/business-partner" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Business partners</a>
            <a href="/#licenses" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Licenses</a>
            <div>
              <p className="mb-2 text-xs text-orange-500">Investor corner</p>
              <div className="grid gap-2 pl-3">
                {investorLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="https://camskra.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-gray-300 text-gray-900 text-center py-2.5 rounded-full hover:bg-gray-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              Check kyc
            </a>
            <a
              href="https://dimensiongroup.themfbox.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-copper text-white text-center py-2.5 rounded-full hover:bg-orange-600 transition-colors"
              onClick={() => setOpen(false)}
            >
             View portfolio
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
