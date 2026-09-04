import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Hero3D from "@/components/Hero3D";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main id="top">
      <Nav />
      <Ticker />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f8fafc]">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-copper/12 to-transparent" />
        <div className="max-w-[90vw] mx-auto relative px-6 lg:px-10 py-16 lg:py-20">
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
      <section id="services" className="max-w-[90vw] mx-auto px-6 lg:px-10 py-24">
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
        <div className="max-w-[90vw] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="font-mono text-[12px] tracking-[0.3em] text-cobalt mb-4">WHO WE ARE</p>
            <h2 className="font-display font-semibold text-4xl text-ink mb-6 leading-tight">
              We are Dimension Group.
            </h2>
            <p className="text-slate leading-relaxed mb-5">
              Dimension Group is a well-established corporate house, incorporated and
              headquartered in Delhi NCR, providing financial services with a wide range of products.
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

      {/*
        PEOPLE — Leadership + Team
        Both sections below share one card "frame": identical width (w-[280px])
        and identical photo height (h-[360px]). Cards sit in a centered,
        wrapping row so the frame stays constant no matter how many people
        are in the section — 3 directors or 11 team members read as one
        continuous system instead of two differently-sized card kits.
      */}

      {/* LEADERSHIP */}
      <section id="leadership" className="relative overflow-hidden bg-white border-y border-slate-200">
        <div className="pointer-events-none absolute -top-48 right-[-120px] h-[500px] w-[500px] rounded-full bg-cobalt/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-180px] left-[-120px] h-[400px] w-[400px] rounded-full bg-copper/5 blur-3xl" />

        <div className="relative max-w-[90vw] mx-auto px-6 lg:px-10 py-24">
          <Reveal className="mb-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-copper" />
                  <p className="font-mono text-[11px] tracking-[0.3em] text-cobalt">LEADERSHIP</p>
                </div>
                <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02] max-w-2xl">
                  The people setting
                  <span className="block text-cobalt">direction.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-600 lg:pb-2">
                Experienced leadership guiding Dimension Group with a focus on
                trust, disciplined execution and long-term growth.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-7">
            {[
              { name: "Vivek Gautam", role: "Director", image: "https://dimensionfinancial.co.in/images/Vivek%20sir%20new.jpeg" },
              { name: "Ravi Kant Mathur", role: "Director", image: "https://dimensionfinancial.co.in/images/Ravi%20sir%20Image.png" },
              { name: "Prachi Mathur", role: "Director", image: "https://dimensionfinancial.co.in/images/pc.png" },
            ].map((person, i) => (
              <Reveal key={person.name} delay={i * 100}>
                <PersonCard person={person} accentLabel="DIMENSION GROUP" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section id="team" className="relative overflow-hidden bg-[#f7f8fa] border-y border-slate-200">
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cobalt/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-copper/10 blur-3xl" />

        <div className="relative max-w-[90vw] mx-auto px-6 lg:px-10 py-24">
          <Reveal className="mb-14">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-3 mb-5">
                  <span className="h-px w-10 bg-copper" />
                  <p className="font-mono text-[11px] tracking-[0.3em] text-cobalt">OUR TEAM</p>
                </div>
                <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02] max-w-2xl">
                  The people behind
                  <span className="block text-cobalt">the numbers.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-600 lg:pb-2">
                Meet the professionals who bring expertise, experience and
                execution together to create better financial outcomes.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {[
              { name: "Supriya Sharma", role: "Asst. VP", image: "https://dimensionfinancial.co.in/images/ss.png" },
              { name: "Pragya Srivastav", role: "CA", image: "https://dimensionfinancial.co.in/images/Pragyanew.jpeg" },
              { name: "Shlok Shah", role: "Software Developer", image: "https://dimensionfinancial.co.in/images/NEWSHLOK.jpeg" },
              { name: "Utkarsh Bhatnagar", role: "Asst Debt Manager", image: "https://dimensionfinancial.co.in/images/ub%20new.jpeg" },
              { name: "Pratik Vishwakarma", role: "Software Developer", image: "https://www.dimensioncorporateservices.com/team/Pratik.png" },
              { name: "Shivangi", role: "Company Secretary", image: "/images/shivangi.png" },
              { name: "Arjun Singh", role: "Accounts Executive", image: "https://dimensionfinancial.co.in/images/Arjun.jpeg" },
              { name: "Anushkha Chandra", role: "HR & Admin", image: "https://dimensionfinancial.co.in/images/HRAnushkha.jpg" },
              { name: "Pooja Singh", role: "Accounts Executive", image: "/images/pooja.jpg" },
              { name: "Ved Prakash", role: "Debt Market", image: "https://dimensionfinancial.co.in/images/Ved%20Prakash.png" },
              { name: "S Ghosh", role: "Debt Market", image: "https://dimensionfinancial.co.in/images/SGOSH.png" },
            ].map((person, i) => (
              <Reveal key={person.name} delay={(i % 4) * 70}>
                <PersonCard person={person} accentLabel="DIMENSION GROUP" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP COMPANIES */}
      <section id="group-companies" className="bg-ink">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-10 py-24">
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
      <section id="partners" className="max-w-[90vw] mx-auto px-6 lg:px-10 py-24">
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

      {/* LICENSES & CERTIFICATIONS */}
      <section id="licenses" className="bg-slate-50 border-t border-line">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-10 py-24">
          <Reveal className="mb-14">
            <p className="font-mono text-[12px] tracking-[0.3em] text-cobalt mb-4">COMPLIANCE & CERTIFICATIONS</p>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-ink">
              Regulatory excellence and trust.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mt-6">
              Our certifications and registrations with leading regulatory bodies demonstrate our commitment to compliance, transparency, and investor protection.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SEBI Certificate",
                description: "BSE Debt Segment",
                file: "SEBI_Certificate_(BSE%20Debt%20Segment).pdf",
                icon: "🔒",
              },
              {
                title: "BSE Membership",
                description: "Official membership certificate",
                file: "BSE_Membership_Certificate_DFSPL.pdf",
                icon: "📜",
              },
              {
                title: "Merchant Banking",
                description: "SEBI-registered credential",
                file: "Merchant%20Banking-Certificate.pdf",
                icon: "🏦",
              },
              {
                title: "OBPP Registration",
                description: "Online Bond Platform Provider",
                file: "OBPP_Registration_Certificate_DFSPL.PDF",
                icon: "📋",
              },
            ].map((cert, i) => (
              <Reveal key={cert.title} delay={i * 80}>
                <a
                  href={`/certificates/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:border-cobalt hover:shadow-md"
                >
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="text-4xl mb-4">{cert.icon}</div>
                      <h3 className="font-display font-semibold text-lg text-ink mb-2 group-hover:text-cobalt transition">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-2 text-cobalt font-semibold text-sm">
                      <span>View Certificate</span>
                      <span className="group-hover:translate-x-1 transition">→</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white border-t border-line">
        <div className="max-w-[90vw] mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-16">
          <Reveal>
            <p className="font-mono text-[12px] tracking-[0.3em] text-cobalt mb-4">GET A PROPOSAL</p>
            <h2 className="font-display font-semibold text-4xl text-ink mb-6">Surely you will love it.</h2>
            <p className="text-slate leading-relaxed mb-8 max-w-md">
              Tell us a little about your goals and one of our advisors will put
              together a proposal tailored to your investment horizon.
            </p>
            <div className="space-y-4 font-mono text-sm text-slate">
              <p className="leading-relaxed">
                DIMENSION TOWER, PLOT NO-10, 3RD FLOOR,
                <br />
                COMMERCIAL AREA, KAUSHAMBI, GHAZIABAD,
                <br />
                U.P-201010
              </p>
              <p>CONTACT@DIMENSIONGROUP.CO.IN</p>
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

      <Footer />

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

/**
 * Shared card used by both the Leadership and Team sections.
 * Fixed width (w-[280px]) and fixed photo height (h-[360px]) so every
 * card — director or team member — occupies exactly the same frame.
 */
function PersonCard({
  person,
  accentLabel,
}: {
  person: { name: string; role: string; image: string };
  accentLabel: string;
}) {
  return (
    <article
      className="
        group relative w-[280px] shrink-0 overflow-hidden
        rounded-[24px]
        border border-slate-200
        bg-white
        shadow-[0_10px_35px_rgba(15,23,42,0.06)]
        transition-all duration-300
        hover:-translate-y-1.5
        hover:border-cobalt/50
        hover:shadow-[0_24px_55px_rgba(15,23,42,0.12)]
      "
    >
      {/* Photo frame — identical height across every card. object-cover fills
          the frame edge-to-edge regardless of the source photo's aspect
          ratio, so no letterboxing/backdrop banding shows through. */}
      <div className="relative h-[360px] overflow-hidden bg-slate-100">
        <img
          src={person.image}
          alt={person.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 z-20 h-28 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 z-30">
          <span className="inline-flex items-center rounded-full border border-white/30 bg-white/15 px-3 py-1.5 backdrop-blur-md font-mono text-[9px] tracking-[0.15em] text-white">
            {person.role.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Info block — identical height across every card */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold leading-tight text-ink transition-colors duration-300 group-hover:text-cobalt">
              {person.name}
            </h3>
            <p className="mt-1.5 text-sm text-slate-500">{person.role}</p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white group-hover:rotate-[-45deg]">
            <span className="text-lg">→</span>
          </div>
        </div>

        <div className="mt-5 h-px w-full bg-slate-100">
          <div className="h-full w-0 bg-cobalt transition-all duration-500 group-hover:w-full" />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-mono text-[9px] tracking-[0.2em] text-slate-400">{accentLabel}</span>
          <span className="text-xs font-semibold text-cobalt opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            VIEW PROFILE
          </span>
        </div>
      </div>
    </article>
  );
}