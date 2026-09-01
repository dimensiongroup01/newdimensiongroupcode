export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <a href="/" className="inline-block mb-4 bg-white p-3 rounded-lg">
            <img
              src="/images/dimension-group-logo.jpeg"
              alt="Dimension Group logo"
              className="h-16 w-auto object-contain"
            />
          </a>
          <p className="text-white/50 text-sm leading-relaxed">
            A well-established corporate house headquartered in Delhi, providing financial services across investment
            management, data processing and market research.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-4">Our company</p>
          <div className="space-y-2.5 text-sm text-white/60">
            <a href="/" className="block hover:text-white">Home</a>
            <a href="/service" className="block hover:text-white">Services</a>
            <a href="/#about" className="block hover:text-white">About us</a>
            <a href="/group-companies" className="block hover:text-white">Group companies</a>
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-4">Quick links</p>
          <div className="space-y-2.5 text-sm text-white/60">
            <a href="/mutual-fund" className="block hover:text-white">Mutual funds</a>
            <a href="/provident-fund" className="block hover:text-white">Provident fund</a>
            <a href="/bond" className="block hover:text-white">Bonds/Debentures</a>
            <a href="/fixed-deposit" className="block hover:text-white">Fixed deposits</a>
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-4">Get in touch</p>
          <div className="space-y-2.5 text-sm text-white/60">
            <a href="/business-partner" className="block hover:text-white">Become a partner</a>
            <a href="/#contact" className="block hover:text-white">Contact us</a>
            <a href="/annual-return" className="block hover:text-white">Annual return</a>
            <a href="/policies" className="block hover:text-white">Policies</a>
            <a href="/codeofconduct" className="block hover:text-white">Code of conduct</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-white/40 text-xs font-mono">
          <p>© 2026 Dimension Group. All rights reserved.</p>
          <p>Made with love by inhouse developers of Dimension</p>
        </div>
      </div>
    </footer>
  );
}
