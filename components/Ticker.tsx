const ITEMS = [
  "PROVIDENT FUND · GOVT-MANAGED · LONG TERM",
  "BONDS & DEBENTURES · FIXED INCOME · GOI & CORPORATE",
  "MUTUAL FUNDS · EQUITY / DEBT / MONEY MARKET",
  "FIXED DEPOSITS · ASSURED RETURNS · TOP CORPORATES",
  "END-TO-END ADVISORY · DELHI NCR",
];

export default function Ticker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-[#060D1F] via-[#0B1B33] to-[#060D1F]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#060D1F] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#060D1F] to-transparent" />
      <div className="flex w-max animate-[ticker_34s_linear_infinite] hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-4 font-mono text-[11px] tracking-wider py-3.5 pr-12 whitespace-nowrap ${
              i % 2 === 0 ? "text-paper/70" : "text-copper"
            }`}
          >
            <span aria-hidden="true" className={`h-1.5 w-1.5 rotate-45 ${i % 2 === 0 ? "bg-cobalt" : "bg-copper"}`} />
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
