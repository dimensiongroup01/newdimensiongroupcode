import Nav from "@/components/Nav";
import Ticker from "@/components/Ticker";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import Hero3D from "@/components/Hero3D";
import Footer from "@/components/Footer";
import LazyScene from "@/components/LazyScene";
import TiltCard from "@/components/TiltCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import PersonPhoto from "@/components/PersonPhoto";
import ContactForm from "@/components/ContactForm";

/** Small eyebrow label used above every section heading. */
function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className={`h-2 w-2 rotate-45 ${dark ? "bg-copper" : "bg-cobalt"}`} />
      <p className={`font-mono text-[11px] sm:text-[12px] tracking-[0.3em] ${dark ? "text-copper" : "text-cobalt-dim"}`}>{children}</p>
      <span className={`h-px w-10 ${dark ? "bg-copper/60" : "bg-copper"}`} />
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Nav />

      {/* HERO — deep-navy stage with a live 3D illustration */}
      <section className="stage-dark relative overflow-hidden">
        <div className="aurora -left-32 top-24 h-96 w-96 bg-cobalt/30" />
        <div className="aurora right-0 top-1/3 h-[28rem] w-[28rem] bg-copper/20 [animation-delay:-6s]" />
        <div className="grid-floor" />
        <div className="noise absolute inset-0" />

        <div className="max-w-[90vw] mx-auto relative px-2 sm:px-6 lg:px-10 pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-[0.52fr_0.48fr] items-center">
            <div className="space-y-8 relative z-10">
              <div className="space-y-6">
                <div aria-hidden="true" className="flex items-center gap-2">
                  <span className="h-1 w-10 rounded-full bg-gradient-to-r from-cobalt to-copper" />
                  <span className="h-1 w-3 rounded-full bg-copper/70" />
                  <span className="h-1 w-1.5 rounded-full bg-white/40" />
                </div>
                <h1 className="font-display font-semibold text-4xl sm:text-5xl xl:text-6xl leading-[1.04] tracking-tight text-white">
                  Debt market clarity for investors who value{" "}
                  <span className="text-gradient">trust and quality.</span>
                </h1>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                  Dimension Financial Solutions Pvt Ltd brings SEBI-regulated merchant banking
                  and debt advisory. Bondsadda delivers a curated bond marketplace with live
                  listings, transparent pricing and smooth investor onboarding.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://mf.dimensiongroup.co.in/Home/Login"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-copper-deep hover:bg-[#B34300] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_50px_-12px_rgba(255,105,0,0.65)] transition hover:-translate-y-0.5"
                >
                  View Portfolio
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="https://dimensionfinancial.co.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="glass-dark inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-white transition hover:border-cobalt hover:text-cobalt"
                >
                  Visit DFS
                </a>
              </div>
            </div>

            {/* 3D illustration + spinning brand coin */}
            <div className="relative h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[560px] w-full">
              <LazyScene variant="hero" priority />
              <div className="pointer-events-none absolute left-0 top-2 w-[34%] max-w-[190px] aspect-[6/5] sm:left-4">
                <div className="pointer-events-auto h-full w-full">
                  <Hero3D />
                </div>
              </div>
            </div>
          </div>

          {/* Feature strip */}
          <div className="relative z-10 mt-6 lg:mt-2 grid gap-4 grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "SEBI registered",
                text: "Merchant banking and debt broking compliance.",
                icon: <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
              },
              {
                title: "Curated bonds",
                text: "Top-rated corporate, PSU and govt debt.",
                icon: (
                  <>
                    <path d="M8 12l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                ),
              },
              {
                title: "Fast onboarding",
                text: "Quick access for bond investors.",
                icon: <path d="M12 4v8M12 18h.01M5 13a7 7 0 1 1 14 0v4H5v-4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
              },
              {
                title: "Research-led",
                text: "Data-backed debt selection insights.",
                icon: (
                  <>
                    <path d="M12 20v-8M8 16l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                ),
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <TiltCard className="group h-full rounded-3xl">
                  <div className="glass-dark flex h-full items-start gap-4 rounded-3xl p-5 transition hover:border-cobalt/50">
                    <div className={`tile-3d h-12 w-12 shrink-0 rounded-2xl ${i % 2 ? "tile-orange" : ""}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">{item.icon}</svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.text}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Ticker />

      {/* SERVICES — bento grid of tilting cards */}
      <section id="services" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-fade opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
          <Reveal className="mb-10 sm:mb-14 flex flex-col items-center text-center">
            <Eyebrow>CORE INVESTMENT PRODUCTS</Eyebrow>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-ink max-w-3xl tracking-tight">
              Four ways to put capital to work.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Reveal delay={0} className="lg:col-span-2">
              <ServiceCard
                id="mf"
                index={0}
                featured
                label="MUTUAL FUNDS"
                title="Smart way of growing wealth"
                href="/mutual-fund/"
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
                index={1}
                label="FIXED DEPOSITS"
                title="Assured returns, top corporates"
                href="/fixed-deposit/"
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
                index={2}
                label="BONDS"
                title="High-return bonds, curated"
                href="/bond/"
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

            <Reveal delay={240} className="lg:col-span-2">
              <ServiceCard
                id="merchant-banking"
                index={3}
                featured
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
        </div>
      </section>

      {/* ABOUT — 3D tower illustration + mission/vision */}
      <section id="about" className="relative overflow-hidden bg-white border-y border-line">
        <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-cobalt/10 blur-3xl" />
        <div className="relative max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <div className="stage-dark relative overflow-hidden rounded-[32px] shadow-[0_50px_100px_-40px_rgba(15,23,42,0.6)]">
              <div className="grid-floor opacity-70" />
              <div className="relative h-[340px] sm:h-[420px]">
                <LazyScene variant="tower" />
              </div>
            </div>
            <div className="relative -mt-14 grid sm:grid-cols-2 gap-4 px-3 sm:px-6">
              <TiltCard className="rounded-3xl">
                <div className="h-full rounded-3xl bg-ink p-6 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.7)] ring-1 ring-white/10">
                  <p className="font-mono text-[11px] tracking-[0.25em] text-copper mb-3">MISSION</p>
                  <p className="text-paper/75 text-sm leading-relaxed">
                    To provide clients with the finest financial thinking, products and
                    execution — setting the highest standards for behaviours that embody
                    our business principles, while reducing systemic risk efficiently and
                    compliantly.
                  </p>
                </div>
              </TiltCard>
              <TiltCard className="rounded-3xl">
                <div className="h-full rounded-3xl bg-gradient-to-br from-cobalt to-cobalt-dim p-6 shadow-[0_30px_60px_-25px_rgba(0,122,150,0.8)]">
                  <p className="font-mono text-[11px] tracking-[0.25em] text-white mb-3">VISION</p>
                  <p className="text-paper/85 text-sm leading-relaxed">
                    To create value for all stakeholders through profitable growth, and to
                    build an amicable environment that accords respect to every individual
                    and permits personal growth.
                  </p>
                </div>
              </TiltCard>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <Eyebrow>WHO WE ARE</Eyebrow>
            <h2 className="font-display font-semibold text-4xl md:text-5xl text-ink mb-8 leading-tight tracking-tight">
              We are Dimension Group.
            </h2>
            <div className="space-y-5 border-l-2 border-cobalt/30 pl-6">
              <p className="text-slate leading-relaxed text-[17px]">
                Dimension Group is a well-established corporate house, incorporated and
                headquartered in Delhi NCR, providing financial services with a wide range of products.
              </p>
              <p className="text-slate leading-relaxed">
                Today it is a well-diversified conglomerate. Its businesses straddle the
                entire financial services spectrum, as well as data processing and
                management. Since most financial services were retail-focused, building
                scale and skill in transaction processing became imperative — and during
                stressed periods in financial services, the non-financial businesses bring
                stability to the group.
              </p>
              <p className="text-slate leading-relaxed">
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
            </div>

            <div className="mt-10 rounded-3xl border border-line bg-paper p-6 sm:p-7">
              <p className="font-mono text-[11px] tracking-[0.25em] text-cobalt-dim mb-4">WHAT WE DO</p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm text-ink">
                {[
                  "Financial advisory services",
                  "Distribution of financial products",
                  "Personal finance advisory",
                  "Corporate finance",
                  "Data management",
                  "Market research",
                ].map((item, i) => (
                  <p
                    key={item}
                    className="group flex items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:border-cobalt/40 hover:shadow-md"
                  >
                    <span className={`h-2.5 w-2.5 shrink-0 rotate-45 rounded-[3px] ${i % 2 ? "bg-copper" : "bg-cobalt"} transition-transform group-hover:rotate-[135deg]`} />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/*
        PEOPLE — Leadership + Team share one PersonCard frame so 3 directors
        and 11 team members read as one continuous system.
      */}

      {/* LEADERSHIP */}
      <section id="leadership" className="stage-dark relative overflow-hidden">
        <div className="aurora -top-20 right-10 h-96 w-96 bg-cobalt/25" />
        <div className="aurora bottom-0 -left-20 h-80 w-80 bg-copper/20 [animation-delay:-5s]" />
        <div className="grid-floor opacity-50" />

        <div className="relative max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
          <Reveal className="mb-12 sm:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <Eyebrow dark>LEADERSHIP</Eyebrow>
                <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-white leading-[1.02] max-w-2xl tracking-tight">
                  The people setting
                  <span className="block text-gradient">direction.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm md:text-base leading-relaxed text-white/60 lg:pb-2">
                Experienced leadership guiding Dimension Group with a focus on
                trust, disciplined execution and long-term growth.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {[
              { name: "Vivek Gautam", role: "Director", image: "/images/team/vivek-gautam.jpg" },
              { name: "Ravi Kant Mathur", role: "Director", image: "/images/team/ravi-kant-mathur.jpg" },
              { name: "Prachi Mathur", role: "Director", image: "/images/team/prachi-mathur.jpg" },
            ].map((person, i) => (
              <Reveal key={person.name} delay={i * 100} className={`w-full max-w-[300px] ${i === 1 ? "lg:relative lg:-top-8" : ""}`}>
                <PersonCard person={person} accentLabel="DIMENSION GROUP" tone={i % 2 ? "orange" : "cyan"} large />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section id="team" className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cobalt/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-copper/10 blur-3xl" />

        <div className="relative max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
          <Reveal className="mb-12 sm:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <Eyebrow>OUR TEAM</Eyebrow>
                <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.02] max-w-2xl tracking-tight">
                  The people behind
                  <span className="block text-cobalt-dim">the numbers.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm md:text-base leading-relaxed text-slate-600 lg:pb-2">
                Meet the professionals who bring expertise, experience and
                execution together to create better financial outcomes.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 xs:gap-7 justify-items-center">
            {[
              { name: "Supriya Sharma", role: "Asst. VP", image: "/images/team/supriya-sharma.jpg" },
              { name: "Pragya Srivastav", role: "CA", image: "/images/team/pragya-srivastav.jpg" },
              { name: "Shlok Shah", role: "Assistant Manager (Tech)", image: "/images/team/shlok-shah.jpg" },
              { name: "Utkarsh Bhatnagar", role: "Asst Debt Manager", image: "/images/team/utkarsh-bhatnagar.jpg" },
              { name: "Pratik Vishwakarma", role: "Software Developer", image: "/images/team/pratik-vishwakarma.jpg" },
              { name: "Shivangi", role: "Company Secretary", image: "/images/team/shivangi.jpg" },
              { name: "Arjun Singh", role: "Accounts Executive", image: "/images/team/arjun-singh.jpg" },
              { name: "Anushkha Chandra", role: "HR & Admin", image: "/images/team/anushkha-chandra.jpg" },
              { name: "Pooja Singh", role: "Accounts Executive", image: "/images/team/pooja-singh.jpg" },
              { name: "Ved Prakash", role: "Debt Market", image: "/images/team/ved-prakash.jpg" },
              { name: "S Ghosh", role: "Debt Market", image: "/images/team/s-ghosh.jpg" },
            ].map((person, i) => (
              <Reveal key={person.name} delay={(i % 4) * 70} className="w-full max-w-[280px]">
                <PersonCard person={person} accentLabel="DIMENSION GROUP" tone={i % 2 ? "orange" : "cyan"} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GROUP COMPANIES — network illustration */}
      <section id="group-companies" className="stage-dark relative overflow-hidden">
        <div className="aurora left-1/3 top-10 h-96 w-96 bg-cobalt/20" />
        <div className="relative max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal>
              <Eyebrow dark>GROUP COMPANIES</Eyebrow>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-white mb-6 max-w-xl tracking-tight">
                One conglomerate, several disciplines.
              </h2>
              <p className="text-white/60 max-w-xl mb-10">
                Beyond retail-focused financial services, the group operates across data
                processing and management verticals — built to bring stability across
                market cycles.
              </p>
            </Reveal>
            <div className="grid gap-4">
              {[
                { t: "Financial Services", d: "Advisory, distribution and execution across debt, fixed-income and mutual fund products." },
                { t: "Data Processing", d: "Transaction processing and management infrastructure supporting scale across the group." },
                { t: "Corporate Finance", d: "Market research and corporate finance capabilities supporting institutional relationships." },
              ].map((item, i) => (
                <Reveal key={item.t} delay={i * 80}>
                  <TiltCard className="group rounded-3xl" max={5}>
                    <div className="glass-dark flex items-start gap-5 rounded-3xl p-6 transition hover:border-copper/60">
                      <span className={`tile-3d h-12 w-12 shrink-0 rounded-2xl font-mono text-sm font-bold ${i === 1 ? "tile-orange" : ""}`}>
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display font-semibold text-lg text-white mb-1.5">{item.t}</h3>
                        <p className="text-white/55 text-sm leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={120} className="relative order-first lg:order-none h-[340px] sm:h-[460px] lg:h-[560px]">
            <LazyScene variant="network" />
          </Reveal>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section id="partners" className="max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-cobalt via-[#0096B7] to-cobalt-dim shadow-[0_50px_100px_-40px_rgba(0,122,150,0.8)]">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_at_right,black,transparent_70%)]" />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-copper/40 blur-3xl" />
            <div className="relative grid md:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20 max-w-2xl">
                <p className="font-mono text-[12px] tracking-[0.3em] text-white/80 mb-4">JOIN OUR GROWING NETWORK</p>
                <h2 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-white mb-5 tracking-tight">
                  Be a part of our legacy, grow big with us.
                </h2>
                <p className="text-white/85 leading-relaxed mb-8 text-lg">
                  Take your entrepreneurial skills to the premier league by becoming our
                  Authorized Person.
                </p>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-copper-deep text-white font-semibold px-7 py-4 rounded-full shadow-[0_18px_40px_-12px_rgba(255,105,0,0.8),inset_0_-3px_0_rgba(0,0,0,0.15)] transition hover:-translate-y-0.5"
                >
                  Become a Partner
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
              <div className="relative h-[260px] sm:h-[320px] md:h-full md:min-h-[380px]">
                <LazyScene variant="partner" />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* LICENSES & CERTIFICATIONS */}
      <section id="licenses" className="relative overflow-hidden bg-white border-t border-line">
        <div className="absolute inset-0 bg-grid-fade opacity-50 [mask-image:radial-gradient(ellipse_at_bottom,black_10%,transparent_65%)]" />
        <div className="relative max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-28">
          <Reveal className="mb-12 sm:mb-16 grid lg:grid-cols-2 gap-6 lg:items-end">
            <div>
              <Eyebrow>COMPLIANCE & CERTIFICATIONS</Eyebrow>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight">
                Regulatory excellence and trust.
              </h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
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
              <Reveal key={cert.title} delay={i * 80} className="h-full">
                <TiltCard className="group h-full rounded-3xl">
                  <a
                    href={`/certificates/${cert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-glow relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-[0_30px_60px_-25px_rgba(0,122,150,0.5)]"
                  >
                    {/* layered paper stack behind the icon */}
                    <div className="relative mb-8 h-24 w-20">
                      <span aria-hidden="true" className="absolute inset-0 rotate-[-10deg] rounded-xl bg-cobalt/15 transition-transform duration-500 group-hover:rotate-[-16deg]" />
                      <span aria-hidden="true" className="absolute inset-0 rotate-[6deg] rounded-xl bg-copper/20 transition-transform duration-500 group-hover:rotate-[12deg]" />
                      <span className="absolute inset-0 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-4xl shadow-[0_14px_30px_-12px_rgba(15,23,42,0.35)] transition-transform duration-500 group-hover:-translate-y-2">
                        {cert.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg text-ink mb-2 group-hover:text-cobalt-dim transition">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-cobalt-dim font-semibold text-sm">
                      <span>View Certificate</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cobalt/10 transition group-hover:bg-cobalt group-hover:text-white group-hover:-rotate-45">→</span>
                    </div>
                  </a>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative bg-paper">
        <div className="max-w-[90vw] mx-auto px-2 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="grid overflow-hidden rounded-[36px] border border-line bg-white shadow-[0_50px_100px_-50px_rgba(15,23,42,0.45)] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="stage-dark relative overflow-hidden p-8 sm:p-12">
                <div className="grid-floor opacity-60" />
                <div className="relative">
                  <Eyebrow dark>GET A PROPOSAL</Eyebrow>
                  <h2 className="font-display font-semibold text-4xl text-white mb-6 tracking-tight">Surely you will love it.</h2>
                  <p className="text-white/65 leading-relaxed mb-10 max-w-md">
                    Tell us a little about your goals and one of our advisors will put
                    together a proposal tailored to your investment horizon.
                  </p>
                  <div className="space-y-4 font-mono text-sm text-white/75">
                    <div className="glass-dark flex gap-4 rounded-2xl p-4">
                      <span className="tile-3d h-10 w-10 shrink-0 rounded-xl">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                          <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" />
                        </svg>
                      </span>
                      <p className="leading-relaxed text-[13px]">
                        DIMENSION TOWER, PLOT NO-10, 3RD FLOOR,
                        <br />
                        COMMERCIAL AREA, KAUSHAMBI, GHAZIABAD,
                        <br />
                        U.P-201010
                      </p>
                    </div>
                    <div className="glass-dark flex items-center gap-4 rounded-2xl p-4">
                      <span className="tile-3d tile-orange h-10 w-10 shrink-0 rounded-xl">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
                          <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <p className="text-[13px] break-all">CONTACT@DIMENSIONGROUP.CO.IN</p>
                    </div>
                  </div>
                </div>
              </div>

              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}

/**
 * Shared card for the Leadership and Team sections: a photo frame with two
 * offset colour plates behind it (a stacked 3D look) that fan out on hover,
 * inside a tilt wrapper. Fluid width, aspect-ratio photo, so every card keeps
 * the same proportions at any screen size.
 */
function PersonCard({
  person,
  accentLabel,
  tone = "cyan",
  large = false,
}: {
  person: { name: string; role: string; image: string };
  accentLabel: string;
  tone?: "cyan" | "orange";
  large?: boolean;
}) {
  const plate = tone === "orange" ? "from-copper to-[#FF9A52]" : "from-cobalt to-cobalt-dim";
  return (
    <TiltCard className="group w-full rounded-[26px]" max={10}>
      <article className="relative">
        <span aria-hidden="true" className={`absolute inset-0 translate-x-2 translate-y-2 rotate-[2deg] rounded-[26px] bg-gradient-to-br ${plate} opacity-80 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3 group-hover:rotate-[4deg]`} />
        <span aria-hidden="true" className={`absolute inset-0 -translate-x-1.5 translate-y-1 -rotate-[2deg] rounded-[26px] ${large ? "bg-white/10 ring-1 ring-white/20" : "bg-slate-200/70"} transition-transform duration-500 group-hover:-translate-x-3 group-hover:-rotate-[4deg]`} />

        <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-[0_24px_50px_-24px_rgba(15,23,42,0.4)]">
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200">
            <PersonPhoto src={person.image} name={person.name} />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 backdrop-blur-md font-mono text-[9px] tracking-[0.15em] text-white">
                <span className={`h-1.5 w-1.5 rounded-full ${tone === "orange" ? "bg-copper" : "bg-cobalt"}`} />
                {person.role.toUpperCase()}
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-display text-base sm:text-lg font-semibold leading-tight text-ink transition-colors duration-300 group-hover:text-cobalt-dim">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500">{person.role}</p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white group-hover:rotate-[-45deg]">
                <span className="text-base">→</span>
              </div>
            </div>

            <div className="mt-4 h-px w-full bg-slate-100">
              <div className="h-full w-0 bg-gradient-to-r from-cobalt to-copper transition-all duration-500 group-hover:w-full" />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-[0.2em] text-slate-400">{accentLabel}</span>
              <span className="text-xs font-semibold text-cobalt-dim opacity-100 translate-x-0 transition-all duration-300 sm:opacity-0 sm:translate-x-2 sm:group-hover:opacity-100 sm:group-hover:translate-x-0">
                VIEW PROFILE
              </span>
            </div>
          </div>
        </div>
      </article>
    </TiltCard>
  );
}
