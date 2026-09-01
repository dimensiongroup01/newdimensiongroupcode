import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Code of Conduct | Dimension Group",
  description:
    "Code of conduct and ethical guidelines for Dimension Financial Solutions Pvt Ltd employees and partners.",
  keywords: [
    "code of conduct",
    "ethics",
    "compliance",
    "corporate governance",
  ],
  openGraph: {
    title: "Code of Conduct | Dimension Group",
    description: "Ethical guidelines and code of conduct standards.",
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

const page: PageData = {
  eyebrow: "Investor Corner",
  title: "Code of Conduct",
  intro:
    "Dimension Group, a website of M/s Dimension Financial Solutions Private Limited, follows the Code of Conduct as per Schedule II of Securities and Exchange Board of India (Stock-Brokers) Regulations, 1992, amended from time to time.",
  sourceUrl: "https://dimensiongroup.co.in/codeofconduct.html",
  sections: [
    {
      title: "General",
      bullets: [
        "Integrity: A stock-broker shall maintain high standards of integrity, promptitude and fairness in the conduct of all his business.",
        "Exercise of due skill and care: A stock-broker shall act with due skill, care and diligence in the conduct of all his business.",
        "Manipulation: A stock-broker shall not indulge in manipulative, fraudulent or deceptive transactions or schemes or spread rumours with a view to distorting market equilibrium or making personal gains.",
        "Malpractices: A stock-broker shall not create false market either singly or in concert with others or indulge in any act detrimental to the investors interest or which leads to interference with the fair and smooth functioning of the market.",
        "Compliance with statutory requirements: A stock-broker shall abide by all provisions of the Act and the rules and regulations issued by the Government, the Board and the Stock Exchange from time to time as applicable.",
      ],
    },
    {
      title: "Duty To The Investor",
      bullets: [
        "Execution of Orders: A stock-broker shall faithfully execute orders for buying and selling securities at the best available market price and shall promptly inform clients about execution or non-execution.",
        "Issue of Contract Note: A stock-broker shall issue without delay to his client, or client of the sub-broker as the case may be, a contract note for all transactions in the form specified by the stock exchange.",
        "Breach of Trust: A stock-broker shall not disclose, discuss, or make improper use of confidential client information learned through the business relationship.",
        "Business and Commission: A stock-broker shall not encourage sales or purchases solely to generate brokerage or commission, and shall not furnish false or misleading quotations, advice or information.",
        "Business of Defaulting Clients: A stock-broker shall not knowingly deal or transact business for a client who has failed to carry out commitments in relation to securities with another stock-broker.",
        "Fairness to Clients: A stock-broker shall disclose whether acting as principal or agent, ensure no conflict of interest arises, and, where a conflict occurs, inform the client and avoid personal advantage.",
        "Investment Advice: A stock-broker shall not recommend acquiring, disposing of, or retaining securities unless he has reasonable grounds for believing the recommendation is suitable based on client holdings, financial situation and objectives.",
        "Investment advice in publicly accessible media requires disclosure of interest, including long or short positions of the stock broker, employee, dependent family members and employer, as applicable.",
        "Competence of Stock-Broker: A stock-broker should have adequately trained staff and arrangements to render fair, prompt and competent services to clients.",
      ],
    },
    {
      title: "Stock-Brokers Vis-a-Vis Other Stock-Brokers",
      bullets: [
        "Conduct of Dealings: A stock-broker shall cooperate with the other contracting party in comparing unmatched transactions and replacing documents declared as bad delivery.",
        "Protection of Clients Interests: A stock-broker shall extend fullest cooperation to other stock-brokers in protecting client rights to dividends, bonus shares, right shares and any other right related to securities.",
        "Transactions with Stock-Brokers: A stock-broker shall carry out transactions with other stock-brokers and comply with settlement obligations.",
        "Advertisement and Publicity: A stock-broker shall not advertise his business publicly unless permitted by the stock exchange.",
        "Inducement of Clients: A stock-broker shall not resort to unfair means of inducing clients from other stock-brokers.",
        "False or Misleading Returns: A stock-broker shall not neglect, fail or refuse to submit required returns and shall not make false or misleading statements on returns required by the Board and stock exchange.",
      ],
    },
    {
      title: "Stock Broker Acting As Underwriter",
      bullets: [
        "A Stock Broker shall make all efforts to protect the interests of its clients.",
        "A Stock Broker shall ensure that it and its personnel act ethically in all dealings with an issuer.",
        "A Stock Broker shall not make any oral or written statement that misrepresents services it can perform, services rendered to another issuer company, or its underwriting commitment.",
        "A Stock Broker shall avoid conflicts of interest and make adequate disclosure of its interest.",
        "A Stock Broker shall put in place a mechanism to resolve conflict of interest situations in an equitable manner.",
        "A Stock Broker shall make appropriate disclosure to the client of possible sources or potential areas of conflict that would impair fair, objective and unbiased services while acting as underwriter.",
        "A Stock Broker shall not divulge confidential issuer-company information to other issuers, press or any party, and shall not deal in securities of an issuer company without required disclosures.",
        "A Stock Broker shall promptly inform clients of any change in registration status, penal action by the Board, or material financial change that may adversely affect client or investor interests.",
        "A Stock Broker or its employees shall not render public investment advice about any security unless required disclosures of interest, including long or short positions, have been made.",
        "A Stock Broker, its directors, partners or managers shall not indulge in insider trading through their own accounts or through associates, family members, relatives or friends.",
        "A Stock Broker acting as an underwriter shall not indulge in unfair competition likely to harm other underwriters or place them at a disadvantage.",
        "An underwriter shall not be party to creation of false market, price rigging or manipulation, or passing unpublished price-sensitive information for securities listed or proposed to be listed on any stock exchange.",
      ],
    },
  ],
};

export default function CodeOfConductPage() {
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

        <div className="relative mx-auto max-w-[90vw] px-6 py-20 lg:px-10 lg:py-28">
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

      <div className="mx-auto max-w-[90vw] px-6 py-10 lg:px-10">
        {page.sections.map((section, index) => (
          <PageSection key={section.title} section={section} index={index} />
        ))}
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}