import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Business Partner Programs | Dimension Group",
  description:
    "Become a business partner with Dimension Group. Explore partnership opportunities in financial advisory, bonds distribution, and investment services.",
  keywords: [
    "business partner",
    "partnership program",
    "financial partner",
    "distribution partner",
    "bond partner",
  ],
  openGraph: {
    title: "Business Partner Programs | Dimension Group",
    description:
      "Partnership opportunities in financial services, bond distribution, and investment advisory.",
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

const asset = (path: string) => `https://dimensiongroup.co.in/${path.replace(/^\.?\//, "")}`;

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
  eyebrow: "Business Partners",
  title: "Business Partners",
  intro:
    "Become a Dimension Group business partner and build an independent financial services practice with support from a diversified financial group.",
  sourceUrl: "https://dimensiongroup.co.in/business-partner.html",
  sections: [
    {
      title: "Start Your Own Business",
      paragraphs: [
        "What if you could start your own business where you have the freedom to make your own business decisions, where your clients benefit and you get to focus on what you enjoy?",
        "Becoming Dimension Group's Business Partner can bring you a new level of freedom.",
      ],
    },
    {
      title: "Why Partner With Us?",
      bullets: [
        "We are known for life-long and steady relationships with our Business Partners/Associates.",
        "We believe in long-term commitment & association that plays a vital role in the growth of the business.",
        "We believe in growing with our Business Partners/Associates.",
        "To be most trusted & preferred diversified financial services provider.",
        "We provide the most appropriate and reliable Financial Services through well informed & knowledgeable resource, committed employees & Innovation.",
      ],
    },
    {
      title: "Empanelment Form",
      paragraphs: [
        "Fill out the form and send a scanned copy at the given email: debt@dimensiongroup.co.in.",
        "You can fill out the form and we will be in touch once verified.",
      ],
      links: [
        { label: "Email debt@dimensiongroup.co.in", href: "mailto:debt@dimensiongroup.co.in" },
        {
          label: "Download Business Partner Form",
          href: asset("wp-content/uploads/2019/05/Associate-empanelment-form.pdf"),
        },
      ],
    },
    {
      title: "Form Details Requested",
      bullets: [
        "Name: first, middle and last",
        "Postal address: address lines, city, state or province, postal code and country",
        "Phone and email",
        "Tax status: Individual, Sole Proprietorship, Partnership Firm, Pvt. Ltd. Company, Public Ltd. Company, Society/Trust or Others",
        "Bank account details for brokerage or other payments: beneficiary name, bank name, branch, city, account number, MICR code, IFSC code and account type",
        "Payment mode: warrant couriered to the address or direct credit where available",
        "Document uploads: Aadhar, Driving Licence, Passport, Voter ID, PAN, cancelled cheque and GST certificate if any",
        "Reference and additional information",
      ],
    },
  ],
};

export default function BusinessPartnerPage() {
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
