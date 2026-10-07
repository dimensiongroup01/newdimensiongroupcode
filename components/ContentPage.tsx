import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import TiltCard from "@/components/TiltCard";
import LazyScene from "@/components/LazyScene";
import type { SceneVariant } from "@/components/FinanceScene";

export type ContentLink = {
  label: string;
  href: string;
};

export type ContentTable = {
  title: string;
  columns: string[];
  rows: string[][];
};

export type ContentSection = {
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
  downloads?: ContentDownload[];
};

/** A downloadable file hosted on this site (under /public). */
export type DownloadFile = {
  href: string;
  /** Name the file is saved as on the visitor's device. */
  fileName: string;
  /** Human-readable size, e.g. "1.9 MB". */
  size: string;
};

/** One issuer's paperwork: interest-rate sheet (with preview) + application form. */
export type ContentDownload = {
  name: string;
  sheet: DownloadFile & { preview: string };
  form: DownloadFile;
};

export type PageData = {
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
  // Files hosted on this site download directly instead of opening a new page.
  const file = !external && isFile(href);
  const styles =
    variant === "dark"
      ? "glass-dark text-white hover:border-copper hover:text-copper"
      : "border border-ink/15 bg-white text-ink hover:border-cobalt hover:bg-cobalt hover:text-white hover:shadow-[0_12px_30px_-10px_rgba(0,180,216,0.7)]";

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={file ? "" : undefined}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${styles}`}
    >
      {file && <DownloadIcon />}
      {label}
      {!file && <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">↗</span>}
    </a>
  );
}

function isFile(href: string) {
  return /\.(pdf|jpe?g|png)$/i.test(href);
}

function DownloadIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={`shrink-0 transition-transform group-hover:translate-y-0.5 ${className}`}>
      <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Big, unmistakable download button: icon, label, then file type and size. */
function DownloadButton({ file, label, kind, primary = false }: { file: DownloadFile; label: string; kind: string; primary?: boolean }) {
  return (
    <a
      href={file.href}
      download={file.fileName}
      className={`group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 ${
        primary
          ? "bg-copper-deep hover:bg-[#B34300] text-white shadow-[0_14px_30px_-12px_rgba(255,105,0,0.7)]"
          : "border border-cobalt/30 bg-cobalt/5 text-ink hover:border-cobalt hover:bg-cobalt hover:text-white"
      }`}
    >
      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${primary ? "bg-white/20" : "bg-white text-cobalt-dim shadow-sm group-hover:text-cobalt-dim"}`}>
        <DownloadIcon className="!h-5 !w-5" />
      </span>
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block whitespace-nowrap text-sm font-semibold">{label}</span>
        <span className={`mt-0.5 block whitespace-nowrap font-mono text-[11px] ${primary ? "text-white/80" : "text-slate group-hover:text-white/80"}`}>
          {kind} · {file.size}
        </span>
      </span>
      <span aria-hidden="true" className="ml-auto text-xs font-semibold opacity-70 transition-opacity group-hover:opacity-100">Download</span>
    </a>
  );
}

function DownloadCard({ item, index }: { item: ContentDownload; index: number }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-[0_24px_50px_-30px_rgba(15,23,42,0.35)] transition-shadow hover:shadow-[0_30px_60px_-25px_rgba(0,122,150,0.45)]">
      <div className="flex min-h-[80px] items-center gap-3 border-b border-line px-5 py-4">
        <span className={`tile-3d h-10 w-10 shrink-0 rounded-xl font-mono text-sm font-bold ${index % 2 ? "tile-orange" : ""}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="font-display text-base font-semibold leading-snug text-ink">{item.name}</h3>
      </div>

      {/* Preview of the interest-rate table; click opens the full sheet */}
      <a
        href={item.sheet.href}
        target="_blank"
        rel="noreferrer"
        className="group relative block overflow-hidden bg-slate-50"
        aria-label={`View full interest sheet for ${item.name}`}
      >
        <img
          src={item.sheet.preview}
          alt={`Interest rate sheet — ${item.name}`}
          width={720}
          height={576}
          loading="lazy"
          decoding="async"
          className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent" />
        <span className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink/85 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur transition group-hover:bg-cobalt-dim">
          View full interest sheet ↗
        </span>
      </a>

      <div className="mt-auto grid gap-2.5 p-4">
        <DownloadButton file={item.sheet} label="Interest Sheet" kind="JPG" />
        <DownloadButton file={item.form} label="FD Form" kind="PDF" primary />
      </div>
    </article>
  );
}

function PageSection({ section, index }: { section: ContentSection; index: number }) {
  const orange = index % 2 === 1;
  return (
    <Reveal delay={60}>
      <section className="relative py-10 sm:py-14">
        <div className="grid gap-6 lg:gap-12 lg:grid-cols-[0.34fr_0.66fr]">
          <div className="lg:sticky lg:top-28 self-start">
            <div className="flex items-center gap-4 lg:block">
              <span className={`tile-3d h-14 w-14 shrink-0 font-mono text-base font-bold lg:mb-6 ${orange ? "tile-orange" : ""}`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight">{section.title}</h2>
            </div>
            <span aria-hidden="true" className="mt-6 hidden h-1 w-16 rounded-full bg-gradient-to-r from-cobalt to-copper lg:block" />
          </div>

          <div className="relative rounded-[28px] border border-line bg-white p-6 sm:p-9 shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)]">
            <div className="space-y-6">
              {section.image && (
                <TiltCard className="mx-auto max-w-xs rounded-3xl">
                  <div className="overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white to-slate-50 p-8 shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)]">
                    <img src={section.image} alt={section.imageAlt ?? section.title} width={320} height={80} loading="lazy" decoding="async" className="mx-auto h-20 w-auto object-contain" />
                  </div>
                </TiltCard>
              )}

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="text-base leading-relaxed text-slate">
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul className="grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-slate transition hover:border-cobalt/40 hover:bg-white">
                      <span className={`mt-2 h-2.5 w-2.5 shrink-0 rotate-45 rounded-[3px] ${orange ? "bg-copper" : "bg-cobalt"}`} />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.cards && (
                <div className="grid gap-5 md:grid-cols-2">
                  {section.cards.map((card, i) => (
                    <TiltCard key={card.title} className="group h-full rounded-3xl" max={6}>
                      <article className="border-glow relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-white to-paper p-6 transition-shadow hover:shadow-[0_30px_60px_-25px_rgba(0,122,150,0.45)]">
                        <span aria-hidden="true" className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl ${i % 2 ? "bg-copper/20" : "bg-cobalt/20"}`} />
                        <h3 className="relative mb-3 font-display text-xl font-semibold text-ink">{card.title}</h3>
                        <div className="relative space-y-2.5">
                          {card.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-sm leading-relaxed text-slate">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {card.link && (
                          <div className="relative mt-auto pt-5">
                            <ActionLink label={card.link.label} href={card.link.href} />
                          </div>
                        )}
                      </article>
                    </TiltCard>
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

              {section.downloads && (
                <div className="grid gap-5 md:grid-cols-2">
                  {section.downloads.map((item, i) => (
                    <DownloadCard key={item.name} item={item} index={i} />
                  ))}
                </div>
              )}

              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-line bg-white">
                  <table className="min-w-full text-left text-sm">
                    <caption className="sr-only">{section.table.title}</caption>
                    <thead className="bg-gradient-to-r from-ink to-[#10233F] text-paper">
                      <tr>
                        {section.table.columns.map((column) => (
                          <th key={column} className="px-4 py-3.5 font-mono text-[11px] uppercase tracking-wide">
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line">
                      {section.table.rows.map((row, rowIndex) => (
                        <tr key={`${section.table?.title}-${rowIndex}`} className="transition-colors odd:bg-white even:bg-paper hover:bg-cobalt/5">
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
        </div>
      </section>
    </Reveal>
  );
}

export default function ContentPage({ page, scene }: { page: PageData; scene: SceneVariant }) {
  return (
    <main>
      <Nav />
      <section className="stage-dark relative overflow-hidden">
        <div className="aurora -right-24 -top-10 h-[26rem] w-[26rem] bg-cobalt/30" />
        <div className="aurora -left-24 bottom-0 h-80 w-80 bg-copper/20 [animation-delay:-6s]" />
        <div className="grid-floor" />
        <div className="noise absolute inset-0" />

        <div className="relative mx-auto max-w-[90vw] px-2 sm:px-6 lg:px-10 pt-28 sm:pt-36 pb-12 lg:pb-16">
          <div className="grid items-center gap-4 lg:grid-cols-[0.56fr_0.44fr]">
            <Reveal className="max-w-3xl relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 font-mono text-[11px] tracking-[0.25em] text-white/50">
                <a href="/" className="transition hover:text-white">
                  HOME
                </a>
                <span>/</span>
                <span className="text-copper">{page.eyebrow.toUpperCase()}</span>
              </div>

              <p className="mb-5 flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-copper">
                <span className="h-2 w-2 rotate-45 bg-copper" />
                {page.eyebrow.toUpperCase()}
                <span className="h-px w-10 bg-copper/60" />
              </p>

              <h1 className="mb-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.04] tracking-tight text-white">
                {page.title}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-white/70">{page.intro}</p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-copper-deep hover:bg-[#B34300] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(255,105,0,0.7)] transition hover:-translate-y-0.5"
                >
                  Get a proposal
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1">
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

            <div className="relative h-[300px] sm:h-[380px] lg:h-[460px]">
              <LazyScene variant={scene} priority />
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-grid-fade opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
        <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-cobalt/10 blur-3xl" />
        <div className="relative mx-auto max-w-[90vw] px-2 sm:px-6 lg:px-10 py-8 sm:py-12">
          {page.sections.map((section, index) => (
            <PageSection key={section.title} section={section} index={index} />
          ))}
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
