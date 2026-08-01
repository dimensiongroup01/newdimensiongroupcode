import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Hero3D from "@/components/Hero3D";


export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Ticker />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f8fafc]">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-copper/12 to-transparent" />
        <div className="max-w-7xl mx-auto relative px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.62fr_0.38fr] items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="font-display font-semibold text-5xl md:text-5xl leading-[1.02] text-ink">
                  Debt market clarity for investors who value trust and quality.
                </h1>
                <p className="text-slate-700 text-lg leading-relaxed max-w-2xl">
                  Dimension Financial Solutions Pvt Ltd brings SEBI-regulated merchant banking
                  and debt advisory. Bondsadda delivers a curated bond marketplace with live
                  listings, transparent pricing and smooth investor onboarding.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://dimensiongroup.themfbox.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-copper px-7 py-3.5 text-sm font-semibold text-white shadow-[0_22px_50px_rgba(255,107,53,0.2)] transition hover:brightness-110"
                >
                  View Portfolio
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="https://dimensionfinancial.co.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-cobalt hover:text-cobalt"
                >
                  Visit DFS
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "SEBI registered",
                    text: "Merchant banking and debt broking compliance.",
                    icon: (
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copper/10 text-copper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    title: "Curated bonds",
                    text: "Top-rated corporate, PSU and govt debt.",
                    icon: (
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copper/10 text-copper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M8 12l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M8 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    title: "Fast onboarding",
                    text: "Quick access for bond investors.",
                    icon: (
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copper/10 text-copper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 4v8M12 18h.01M5 13a7 7 0 1 1 14 0v4H5v-4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    ),
                  },
                  {
                    title: "Research-led",
                    text: "Data-backed debt selection insights.",
                    icon: (
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-copper/10 text-copper">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 20v-8M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    {item.icon}
                    <p className="mt-4 text-sm font-semibold text-ink">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] ">
              <div className="h-[520px] w-full overflow-hidden rounded-[1.75rem] bg-transparent">
                <Hero3D />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal className="max-w-2xl mb-14">
          <p className="font-mono text-[12px] tracking-[0.3em] text-cobalt mb-4">CORE INVESTMENT PRODUCTS</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-ink">
            Four ways to put capital to work.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reveal delay={0}>
            <ServiceCard
              id="mf"
              label="MUTUAL FUNDS"
              title="Smart way of growing wealth"
              href="/mutual-fund"
              description="A mutual fund pools money from many investors to invest in shares, debt securities, money market instruments — or a blend of all three."
              icon={
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
                  <path d="M4 22l6-10 5 6 6-12 5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
          </Reveal>

          <Reveal delay={80}>
            <ServiceCard
              id="fd"
              label="FIXED DEPOSITS"
              title="Assured returns, top corporates"
              href="/fixed-deposit"
              description="One of India's favourite investment options — fixed deposits offering assured, high-interest returns, sourced only from leading corporate houses."
              icon={
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
                  <circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M15 9v6l4 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
          </Reveal>

          <Reveal delay={160}>
            <ServiceCard
              id="bonds"
              label="BONDS"
              title="High-return bonds, curated"
              href="/bond"
              description="Access SEBI-compliant corporate, PSU and government bonds via BondsAdda — transparent pricing, yields up to 14%+, RM support end to end."
              icon={
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
                  <rect x="4" y="8" width="22" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                  <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 11v0M22 11v0M8 19v0M22 19v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
          </Reveal>

          <Reveal delay={240}>
            <ServiceCard
              id="merchant-banking"
              label="MERCHANT BANKING"
              title="Capital markets, done right"
              href="https://dimensionfinancial.co.in/merchant-banking"
              description="SEBI-registered merchant banking via Dimension Financial Solutions — capital issue management, open offers, M&A and ESOP advisory, and debt syndication."
              icon={
                <svg width="28" height="28" viewBox="0 0 30 30" fill="none">
                  <path d="M15 4l10 5v3H5V9l10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M6 12v10M12 12v10M18 12v10M24 12v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M4 26h22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              }
            />
          </Reveal>
        </div>
      </section>

      {/* FEATURED BONDS — live listings from BondsAdda */}
      

      {/* ABOUT */}
      <section id="about" className="bg-white border-y border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="font-mono text-[12px] tracking-[0.3em] text-cobalt mb-4">WHO WE ARE</p>
            <h2 className="font-display font-semibold text-4xl text-ink mb-6 leading-tight">
              We are Dimension Group.
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              Dimension Group is a well-established corporate house, incorporated and
              headquartered in Delhi, providing financial services with a wide range of products.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              Today it is a well-diversified conglomerate. Its businesses straddle the
              entire financial services spectrum, as well as data processing and
              management. Since most financial services were retail-focused, building
              scale and skill in transaction processing became imperative — and during
              stressed periods in financial services, the non-financial businesses bring
              stability to the group.
            </p>
            <p className="text-slate leading-relaxed mb-5">
              We provide end-to-end personalised investment management services —
              planning, advisory, execution and monitoring — with a presence across
              debt, fixed-income and mutual funds, offline and online.
            </p>
            <p className="text-slate leading-relaxed">
              Our group entity, Dimension Financial Solutions Pvt Ltd, is a SEBI-registered
              Merchant Banker (INM000013314) and Stock Broker (INZ000313233), and operates
              as an Online Bond Platform Provider (OBPP) at BSE — the regulatory backbone
              behind BondsAdda, our bonds and fixed-deposit platform.
            </p>
          </Reveal>

          <Reveal delay={100} className="grid sm:grid-cols-2 gap-5">
            <div className="bg-ink rounded-2xl p-7">
              <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-3">MISSION</p>
              <p className="text-paper/75 text-sm leading-relaxed">
                To provide clients with the finest financial thinking, products and
                execution — setting the highest standards for behaviours that embody
                our business principles, while reducing systemic risk efficiently and
                compliantly.
              </p>
            </div>
            <div className="bg-cobalt-dim rounded-2xl p-7">
              <p className="font-mono text-[11px] tracking-[0.25em] text-white mb-3">VISION</p>
              <p className="text-paper/75 text-sm leading-relaxed">
                To create value for all stakeholders through profitable growth, and to
                build an amicable environment that accords respect to every individual
                and permits personal growth.
              </p>
            </div>
            <div className="bg-paper border border-line rounded-2xl p-7 sm:col-span-2">
              <p className="font-mono text-[11px] tracking-[0.25em] text-cobalt mb-3">WHAT WE DO</p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-slate">
                <p>· Financial advisory services</p>
                <p>· Distribution of financial products</p>
                <p>· Personal finance advisory</p>
                <p>· Corporate finance</p>
                <p>· Data management</p>
                <p>· Market research</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal>
          <p className="font-mono text-[12px] tracking-[0.3em] text-cobalt mb-4">LEADERSHIP</p>
          <h2 className="font-display font-semibold text-4xl text-ink mb-14">
            The people setting direction.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              name: "Vivek Gautam",
              image: "https://dimensionfinancial.co.in/images/Vivek%20sir%20new.jpeg",
            },
            {
              name: "Ravi Kant Mathur",
              image: "https://dimensionfinancial.co.in/images/Ravi%20sir%20Image.png",
            },
            {
              name: "Prachi Mathur",
              image: "https://dimensionfinancial.co.in/images/pc.png",
            },
          ].map((person, i) => (
            <Reveal key={person.name} delay={i * 80}>
              <div className="bg-white border border-line rounded-2xl p-8 text-center transition hover:-translate-y-1.5 hover:border-cobalt">
                <div className="mx-auto mb-5 h-20 w-20 overflow-hidden rounded-full border border-line">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="font-display font-semibold text-xl text-ink mb-1">{person.name}</h3>
                <p className="font-mono text-xs text-slate mb-4">DIRECTOR</p>
                <a href="#" className="text-cobalt text-sm font-semibold hover:underline">
                  LinkedIn profile →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GROUP COMPANIES */}
      <section id="group-companies" className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
          <Reveal>
            <p className="font-mono text-[12px] tracking-[0.3em] text-copper mb-4">GROUP COMPANIES</p>
            <h2 className="font-display font-semibold text-4xl text-white mb-6 max-w-xl">
              One conglomerate, several disciplines.
            </h2>
            <p className="text-white/60 max-w-xl mb-12">
              Beyond retail-focused financial services, the group operates across data
              processing and management verticals — built to bring stability across
              market cycles.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { t: "Financial Services", d: "Advisory, distribution and execution across debt, fixed-income and mutual fund products." },
              { t: "Data Processing", d: "Transaction processing and management infrastructure supporting scale across the group." },
              { t: "Corporate Finance", d: "Market research and corporate finance capabilities supporting institutional relationships." },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 80}>
                <div className="border border-white/15 rounded-2xl p-7 hover:border-copper transition">
                  <h3 className="font-display font-semibold text-lg text-white mb-2">{item.t}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section id="partners" className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cobalt to-cobalt-dim">
            <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 max-w-2xl">
              <p className="font-mono text-[12px] tracking-[0.3em] text-white/80 mb-4">JOIN OUR GROWING NETWORK</p>
              <h2 className="font-display font-semibold text-4xl text-white mb-5">
                Be a part of our legacy, grow big with us.
              </h2>
              <p className="text-white/85 leading-relaxed mb-8">
                Take your entrepreneurial skills to the premier league by becoming our
                Authorized Person.
              </p>
              <a
                href="#contact"
                className="inline-block bg-copper text-white font-semibold px-7 py-3.5 rounded-full hover:brightness-105 transition"
              >
                Become a Partner
              </a>
            </div>
            <svg className="absolute right-0 top-0 h-full opacity-20 hidden md:block" width="420" viewBox="0 0 420 300" fill="none">
              <circle cx="380" cy="60" r="140" stroke="white" strokeWidth="1" />
              <circle cx="380" cy="60" r="90" stroke="white" strokeWidth="1" />
            </svg>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white border-t border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="font-mono text-[12px] tracking-[0.3em] text-cobalt mb-4">GET A PROPOSAL</p>
            <h2 className="font-display font-semibold text-4xl text-ink mb-6">Surely you will love it.</h2>
            <p className="text-slate leading-relaxed mb-8 max-w-md">
              Tell us a little about your goals and one of our advisors will put
              together a proposal tailored to your investment horizon.
            </p>
            <div className="space-y-4 font-mono text-sm text-slate">
              <p>DELHI, INDIA</p>
              <p>HELLO@DIMENSIONGROUP.CO.IN</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cobalt" placeholder="Full name" />
                <input className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cobalt" placeholder="Phone number" />
              </div>
              <input className="w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cobalt" placeholder="Email address" />
              <select className="w-full border border-line rounded-lg px-4 py-3 text-sm text-slate focus:outline-none focus:border-cobalt">
                <option>I&apos;m interested in...</option>
                <option>Provident Fund</option>
                <option>Bonds & Debentures</option>
                <option>Mutual Funds</option>
                <option>Fixed Deposits</option>
              </select>
              <textarea rows={4} className="w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-cobalt" placeholder="Tell us about your goals" />
              <button type="submit" className="bg-ink text-paper font-semibold px-7 py-3.5 rounded-full hover:bg-cobalt transition">
                Request proposal
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="font-display font-semibold text-xl text-white mb-2">DIMENSION</div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              A well-established corporate house headquartered in Delhi, providing
              financial services across investment management, data processing and
              market research.
            </p>
            <div className="font-mono text-[11px] text-white/40 leading-relaxed space-y-1">
              <p>SEBI Merchant Banker: INM000013314</p>
              <p>SEBI Stock Broker: INZ000313233</p>
              <p>OBPP at BSE · BSE Member ID 6824</p>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-4">OUR COMPANY</p>
            <div className="space-y-2.5 text-sm text-white/60">
              <a href="#top" className="block hover:text-white">Home</a>
              <a href="/service" className="block hover:text-white">Services</a>
              <a href="#about" className="block hover:text-white">About Us</a>
              <a href="/group-companies" className="block hover:text-white">Group Companies</a>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-4">QUICK LINKS</p>
            <div className="space-y-2.5 text-sm text-white/60">
              <a href="/mutual-fund" className="block hover:text-white">Mutual Funds</a>
              <a href="/provident-fund" className="block hover:text-white">Provident Fund</a>
              <a href="/bond" className="block hover:text-white">Bonds/Debentures</a>
              <a href="/fixed-deposit" className="block hover:text-white">Fixed Deposits</a>
            </div>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-4">GET IN TOUCH</p>
            <div className="space-y-2.5 text-sm text-white/60">
              <a href="/business-partner" className="block hover:text-white">Become a Partner</a>
              <a href="#contact" className="block hover:text-white">Contact Us</a>
              <a href="#" className="block hover:text-white">Careers</a>
              <a href="#" className="block hover:text-white">Gallery</a>
              <a href="/annual-return" className="block hover:text-white">Investor Corner</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-2 text-white/40 text-xs font-mono">
            <p>© 2026 DIMENSION GROUP. ALL RIGHTS RESERVED.</p>
            <p>MADE WITH ♥ BY INHOUSE DEVELOPERS OF DIMENSION</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/919650799561"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 1 1-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4L9.7 8.6c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9 0 1.1.8 2.2.9 2.4.1.2 1.6 2.5 4 3.4.6.2 1 .4 1.3.5.6.2 1.1.1 1.5-.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-.9.1-1z" />
        </svg>
      </a>
    </main>
  );
}