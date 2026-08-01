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
    <div className="border-y border-line bg-ink overflow-hidden">
      <div className="flex w-max animate-[ticker_34s_linear_infinite] hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className={`font-mono text-[11px] tracking-wider py-2.5 pr-12 whitespace-nowrap ${
              i % 2 === 0 ? "text-paper/70" : "text-copper"
            }`}
          >
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
