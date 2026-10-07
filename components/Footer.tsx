const heading = "mb-5 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-copper";
const link = "group flex items-center gap-2 text-white/60 transition-colors hover:text-white";

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={link}>
      <span aria-hidden="true" className="h-px w-0 bg-cobalt transition-all duration-300 group-hover:w-3" />
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="stage-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cobalt/60 to-transparent" />
      <div className="aurora -left-40 top-10 h-80 w-80 bg-cobalt/20" />
      <div className="aurora -right-32 bottom-0 h-72 w-72 bg-copper/15" />

      <div className="relative max-w-[90vw] mx-auto px-6 lg:px-10 py-14 sm:py-20 grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
        <div>
          <a href="/" className="inline-block mb-5 rounded-2xl bg-white p-3 shadow-[0_20px_50px_-20px_rgba(0,180,216,0.6)] ring-1 ring-white/20 transition hover:-translate-y-1">
            <img
              src="/images/dimension-group-logo.jpeg"
              width={500}
              height={500}
              loading="lazy"
              decoding="async"
              alt="Dimension Group logo"
              className="h-16 w-auto object-contain"
            />
          </a>
          <p className="text-white/55 text-sm leading-relaxed max-w-sm">
            A well-established corporate house headquartered in Delhi NCR, providing financial services across investment
            management, data processing and market research.
          </p>
          <p className="mt-5 flex gap-3 text-white/55 text-sm leading-relaxed max-w-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 shrink-0 text-cobalt">
              <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
              <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            Dimension Tower, Plot No-10, 3rd Floor, Commercial Area, Kaushambi, Ghaziabad, U.P-201010
          </p>
        </div>
        <div>
          <p className={heading}><span className="h-1.5 w-1.5 rotate-45 bg-copper" />Our company</p>
          <div className="space-y-3 text-sm">
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/service/">Services</FooterLink>
            <FooterLink href="/#about">About us</FooterLink>
            <FooterLink href="/group-companies/">Group companies</FooterLink>
          </div>
        </div>
        <div>
          <p className={heading}><span className="h-1.5 w-1.5 rotate-45 bg-copper" />Quick links</p>
          <div className="space-y-3 text-sm">
            <FooterLink href="/mutual-fund/">Mutual funds</FooterLink>
            <FooterLink href="/provident-fund/">Provident fund</FooterLink>
            <FooterLink href="/bond/">Bonds/Debentures</FooterLink>
            <FooterLink href="/fixed-deposit/">Fixed deposits</FooterLink>
          </div>
        </div>
        <div>
          <p className={heading}><span className="h-1.5 w-1.5 rotate-45 bg-copper" />Get in touch</p>
          <div className="space-y-3 text-sm">
            <FooterLink href="/business-partner/">Become a partner</FooterLink>
            <FooterLink href="/#contact">Contact us</FooterLink>
            <FooterLink href="/annual-return/">Annual return</FooterLink>
            <FooterLink href="/policies/">Policies</FooterLink>
            <FooterLink href="/codeofconduct/">Code of conduct</FooterLink>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-white/40 text-xs font-mono">
          <p>© 2026 Dimension Group. All rights reserved.</p>
          <p>Made with love by inhouse developers of Dimension</p>
        </div>
      </div>
    </footer>
  );
}
