import { ReactNode } from "react";

export default function ServiceCard({
  id,
  label,
  title,
  description,
  icon,
  href = "#",
}: {
  id?: string;
  label: string;
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
}) {
  return (
    <div
      id={id}
      className="group bg-white border border-line rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-cobalt hover:shadow-[0_20px_40px_-18px_rgba(36,83,255,0.25)]"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-[11px] tracking-widest text-cobalt">{label}</span>
        <div className="text-copper">{icon}</div>
      </div>
      <h3 className="font-display font-semibold text-2xl text-ink mb-3">{title}</h3>
      <p className="text-slate leading-relaxed mb-6">{description}</p>
      <a href={href} className="text-cobalt font-semibold text-sm hover:underline">
        More information
      </a>
    </div>
  );
}
