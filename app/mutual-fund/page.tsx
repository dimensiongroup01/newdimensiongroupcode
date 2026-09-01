import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mutual Fund Investment India | SIP & Equity/Debt Funds",
  description:
    "Invest in mutual funds with expert advisory from Dimension Group. Access equity, debt, and hybrid mutual funds with SIP options and professional guidance.",
  keywords: [
    "mutual fund investment",
    "mutual fund investment India",
    "SIP investment",
    "equity mutual funds",
    "debt mutual funds",
    "mutual fund advisor",
    "mutual fund advisory",
    "best mutual funds",
    "fund investment",
    "wealth creation",
    "financial investment",
    "investment planning",
  ],
  openGraph: {
    title: "Mutual Fund Investment India | Expert Advisory & SIP",
    description:
      "Professional mutual fund investment advisory. Access equity, debt and hybrid funds with SIP options and expert guidance from certified advisors.",
    type: "website",
  },
};

type ContentLink = {
  label: string;
  href: string;
};

type ContentTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

type ContentSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: ContentLink[];
  image?: string;
  imageAlt?: string;
  cards?: {
    title: string;
    paragraphs: string[];
    link?: ContentLink;
  }[];
  table?: ContentTable;
};

type PageData = {
  eyebrow: string;
  title: string;
  intro: string;
  sourceUrl: string;
  sections: ContentSection[];
};

function isLink(value: string) {
  return value.startsWith("http") || value.startsWith("mailto:");
}

function ActionLink({
  label,
  href,
  variant = "light",
}: {
  label: string;
  href: string;
  variant?: "light" | "dark";
}) {
  const external = href.startsWith("http");
  const styles =
    variant === "dark"
      ? "border-white/20 text-white hover:border-copper hover:text-copper"
      : "border-ink/15 text-ink hover:border-cobalt hover:text-cobalt";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold transition ${styles}`}
    >
      {label}
    </a>
  );
}

function PageSection({ section, index }: { section: ContentSection; index: number }) {
  return (
    <Reveal delay={index * 60}>
      <section className="border-t border-line py-12">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <h2 className="font-display text-3xl font-semibold text-ink">{section.title}</h2>
          <div className="space-y-7">
            {section.image && (
              <div className="mx-auto max-w-xs overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-[0_20px_90px_rgba(15,23,42,0.12)]">
                <img src={section.image} alt={section.imageAlt ?? section.title} className="mx-auto h-20 object-contain" />
              </div>
            )}

            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate">
                {paragraph}
              </p>
            ))}

            {section.bullets && (
              <ul className="grid gap-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-slate">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-copper" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.cards && (
              <div className="grid gap-5 md:grid-cols-2">
                {section.cards.map((card) => (
                  <article key={card.title} className="rounded-lg border border-line bg-white p-6">
                    <h3 className="mb-3 font-display text-xl font-semibold text-ink">{card.title}</h3>
                    <div className="space-y-3">
                      {card.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-sm leading-relaxed text-slate">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    {card.link && (
                      <div className="mt-5">
                        <ActionLink label={card.link.label} href={card.link.href} />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            )}

            {section.links && (
              <div className="flex flex-wrap gap-3">
                {section.links.map((link) => (
                  <ActionLink key={link.href} label={link.label} href={link.href} />
                ))}
              </div>
            )}

            {section.table && (
              <div className="overflow-x-auto rounded-lg border border-line bg-white">
                <table className="min-w-full text-left text-sm">
                  <caption className="sr-only">{section.table.title}</caption>
                  <thead className="bg-ink text-paper">
                    <tr>
                      {section.table.columns.map((column) => (
                        <th key={column} className="px-4 py-3 font-mono text-[11px] uppercase tracking-wide">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line">
                    {section.table.rows.map((row, rowIndex) => (
                      <tr key={`${section.table?.title}-${rowIndex}`}>
                        {row.map((cell, cellIndex) => (
                          <td key={`${cell}-${cellIndex}`} className="px-4 py-3 text-slate">
                            {isLink(cell) ? <ActionLink label="View Document" href={cell} /> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

const asset = (path: string) => `https://dimensiongroup.co.in/${path.replace(/^\.?\//, "")}`;

const page: PageData = {
  eyebrow: "Invest",
  title: "Mutual Funds",
  intro:
    "Mutual funds pool money from many investors to invest in shares, debt securities, money market securities or a combination of these.",
  sourceUrl: "https://dimensiongroup.co.in/mutual-fund.html",
  sections: [
    {
      title: "Why Invest In Mutual Funds?",
      paragraphs: [
        "A mutual fund is an entity that pools the money of many investors, its unit-holders, to invest in different securities. Investments may be in shares, debt securities, money market securities or a combination of these.",
        "Those securities are professionally managed on behalf of the unit-holders, and each investor holds a pro-rata share of the portfolio, entitled to any profits when the securities are sold, but subject to any losses in value as well.",
      ],
    },
    {
      title: "Benefits Of Mutual Fund",
      cards: [
        {
          title: "Transparency",
          paragraphs: [
            "You get regular information on the value of your investment in addition to disclosure on the specific investments made by the mutual fund scheme.",
          ],
        },
        {
          title: "Low Cost",
          paragraphs: [
            "A mutual fund lets you participate in a diversified portfolio for as little as Rs.5,000/-, and sometimes less. And with a no-load fund, you pay little or no sales charges to own them.",
          ],
        },
        {
          title: "Liquidity",
          paragraphs: [
            "A mutual fund lets you participate in a diversified portfolio for as little as Rs.5,000/-, and sometimes less. And with a no-load fund, you pay little or no sales charges to own them.",
          ],
        },
        {
          title: "Diversification",
          paragraphs: [
            "Mutual funds invest in a broad range of securities. This limits investment risk by reducing the effect of a possible decline in the value of any one security.",
            "Mutual fund unit-holders can benefit from diversification techniques usually available only to investors wealthy enough to buy significant positions in a wide variety of securities.",
          ],
        },
        {
          title: "Professional Investment Management",
          paragraphs: [
            "Mutual funds hire full-time, high-level investment professionals. Funds can afford to do so as they manage large pools of money.",
            "The managers have real-time access to crucial market information and are able to execute trades on the largest and most cost-effective scale.",
          ],
        },
        {
          title: "Convenience & Flexibility",
          paragraphs: [
            "You own just one security rather than many, yet enjoy the benefits of a diversified portfolio and a wide range of services.",
            "Fund managers decide what securities to trade, collect the interest payments, and see that your dividends on portfolio securities are received and your rights exercised.",
          ],
        },
      ],
    },
    {
      title: "Mutual Fund Forms",
      paragraphs: ["SIP - Systematic Investment Plan. CAF - Common Application Form."],
      links: [
        { label: "Aditya Birla Equity CAF", href: asset("mutual-funds/ADITYA_BIRLA_Equity_CAF.pdf") },
        { label: "Aditya Birla Equity SIP", href: asset("mutual-funds/ADITYA_BIRLA_Equity_SIP.pdf") },
        { label: "Axis Equity & Hybrid CAF", href: asset("mutual-funds/AXIS_Equity_&_Hybrid_CAF.pdf") },
        { label: "Axis Equity & Hybrid SIP", href: asset("mutual-funds/AXIS_Equity_&_Hybrid_SIP.pdf") },
        { label: "HDFC Debt CAF", href: asset("mutual-funds/HDFC_Debt_CAF.pdf") },
        { label: "HDFC Debt SIP", href: asset("mutual-funds/HDFC_Debt_SIP.pdf") },
        { label: "HDFC Equity CAF", href: asset("mutual-funds/HDFC_EQUITY_COMMON_APPLICATION_FORM.pdf") },
        { label: "HDFC Equity SIP", href: asset("mutual-funds/HDFC_Equity_SIP_FORM.pdf") },
        { label: "SBI Debt Liquid Fund CAF", href: asset("mutual-funds/SBI_DEBT_LIQUID_FUND_CAF.pdf") },
        { label: "SBI Debt Liquid SIP", href: asset("mutual-funds/SBI_DEBT_LIQUID_SIP.pdf") },
        { label: "SBI Equity CAF", href: asset("mutual-funds/SBI_EQUITY_CAF.pdf") },
        { label: "SBI Equity SIP", href: asset("mutual-funds/SBI_EQUITY_SIP.pdf") },
        { label: "ICICI", href: asset("mutual-funds/ICICI.pdf") },
        { label: "Principal CAF/SIP Form", href: asset("mutual-funds/PRINCIPAL_CAF_SIP_FORM.pdf") },
      ],
    },
  ],
};

export default function MutualFundPage() {
  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden bg-ink">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
        <div className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-cobalt/30 blur-[120px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-[300px] w-[300px] rounded-full bg-copper/20 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <Reveal className="max-w-3xl">
            <div className="mb-7 flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-white/45">
              <a href="/" className="transition hover:text-white">
                HOME
              </a>
              <span>/</span>
              <span className="text-copper">{page.eyebrow.toUpperCase()}</span>
            </div>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.3em] text-copper">
              <span className="h-1.5 w-1.5 rounded-full bg-copper" />
              {page.eyebrow.toUpperCase()}
            </p>

            <h1 className="mb-6 font-display text-5xl font-semibold leading-[1.05] text-white md:text-6xl">
              {page.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">{page.intro}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Get a proposal
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <ActionLink label="View original source" href={page.sourceUrl} variant="dark" />
            </div>
          </Reveal>
        </div>

        <div className="relative h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {page.sections.map((section, index) => (
          <PageSection key={section.title} section={section} index={index} />
        ))}
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}