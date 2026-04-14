interface KpiProp {
  total_trips: number;
  total_revenue: number;
  avg_fare: number;
  tip_rate: number;
}

interface HeroKPIsProps {
  kpi?: KpiProp;
}

const borderRadii = [
  "2px 8px 4px 10px",
  "6px 3px 10px 5px",
  "4px 10px 2px 8px",
  "8px 4px 6px 12px",
];

// Safe numeric coercion — guards against undefined, null, NaN, and non-finite values
function safeNum(v: unknown): number | null {
  const n = Number(v);
  return isFinite(n) ? n : null;
}

const HeroKPIs = ({ kpi }: HeroKPIsProps) => {
  const trips   = safeNum(kpi?.total_trips);
  const revenue = safeNum(kpi?.total_revenue);
  const fare    = safeNum(kpi?.avg_fare);
  const tip     = safeNum(kpi?.tip_rate);

  const totalTrips   = trips   !== null ? `${(trips / 1_000_000).toFixed(1)}M`   : "—";
  const totalRevenue = revenue !== null ? `$${(revenue / 1_000_000).toFixed(1)}M` : "—";
  const avgFare      = fare    !== null ? `$${fare.toFixed(2)}`                   : "—";
  const tipRate      = tip     !== null ? `${tip.toFixed(1)}%`                    : "—";

  const cards = [
    { label: "Total Trips",   value: totalTrips,   bg: "postit-yellow", rotation: "rotate(-2.5deg)", decoration: "tape",      offset: "0px"  },
    { label: "Total Revenue", value: totalRevenue, bg: "postit-white",  rotation: "rotate(1.8deg)",  decoration: "pin",       offset: "8px"  },
    { label: "Avg Fare",      value: avgFare,      bg: "postit-blue",   rotation: "rotate(-1deg)",   decoration: "tape-left", offset: "-5px" },
    { label: "Tip Rate",      value: tipRate,      bg: "postit-pink",   rotation: "rotate(2.5deg)",  decoration: "pin",       offset: "12px" },
  ];

  return (
    <section className="mb-14 relative">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8" style={{ transform: "rotate(-1deg)" }}>
        📌 The Big Numbers
      </h2>
      {/* Decorative scribble */}
      <svg className="absolute top-2 right-0 w-12 h-12 opacity-20" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="15" fill="none" stroke="hsl(0 0% 18%)" strokeWidth="1.5" strokeDasharray="3 4" />
        <circle cx="20" cy="20" r="8" fill="none" stroke="hsl(0 0% 18%)" strokeWidth="1" />
      </svg>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {cards.map((card, i) => (
          <div
            key={card.label}
            className={`postit ${card.bg} jiggle relative`}
            style={{
              transform: card.rotation,
              borderRadius: borderRadii[i],
              marginTop: card.offset,
            }}
          >
            <div className={card.decoration} />
            <p className="font-body text-sm text-muted-foreground mt-3">{card.label}</p>
            <p className="font-mono-data text-3xl md:text-4xl font-bold mt-1">{card.value}</p>
            {i === 0 && (
              <svg className="absolute -bottom-4 -right-3 w-10 h-10 opacity-40" viewBox="0 0 40 40">
                <path d="M 5 5 Q 15 20, 30 30" fill="none" stroke="hsl(0, 100%, 65%)" strokeWidth="2" />
                <polygon points="28,26 34,34 24,32" fill="hsl(0, 100%, 65%)" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroKPIs;
