import { ReactNode } from "react";
import TiltCard from "./TiltCard";

export default function ServiceCard({
  id,
  label,
  title,
  description,
  icon,
  href = "#",
  index = 0,
  featured = false,
}: {
  id?: string;
  label: string;
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
  index?: number;
  featured?: boolean;
}) {
  const orange = index % 2 === 1;
  return (
    <TiltCard className="group h-full rounded-[28px]">
      <div
        id={id}
        className={`border-glow relative flex h-full flex-col overflow-hidden rounded-[28px] border border-line p-7 sm:p-9 transition-shadow duration-300 hover:shadow-[0_40px_80px_-30px_rgba(0,122,150,0.45)] ${
          featured ? "bg-gradient-to-br from-white via-white to-cobalt/[0.07]" : "bg-white"
        }`}
      >
        {/* oversized ghost icon + index for depth */}
        <div aria-hidden="true" className={`pointer-events-none absolute -right-6 -top-6 scale-[5] opacity-[0.05] ${orange ? "text-copper" : "text-cobalt"}`}>
          {icon}
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-4 right-6 font-display text-[88px] font-bold leading-none text-slate-100 transition-colors duration-300 group-hover:text-cobalt/10">
          0{index + 1}
        </span>

        <div className="relative flex items-start justify-between gap-4 mb-8">
          <div className={`tile-3d h-16 w-16 ${orange ? "tile-orange" : ""}`}>{icon}</div>
          <span className="rounded-full border border-cobalt/20 bg-cobalt/5 px-3 py-1.5 font-mono text-[10px] tracking-widest text-cobalt-dim">
            {label}
          </span>
        </div>
        <h3 className={`relative font-display font-semibold text-ink mb-3 ${featured ? "text-2xl sm:text-3xl max-w-md" : "text-2xl"}`}>{title}</h3>
        <p className={`relative text-slate leading-relaxed mb-8 ${featured ? "max-w-xl" : ""}`}>{description}</p>
        <a
          href={href}
          className="relative mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-cobalt-dim group-hover:gap-3"
        >
          More information
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </TiltCard>
  );
}
