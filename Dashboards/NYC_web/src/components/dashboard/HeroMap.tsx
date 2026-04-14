interface HotspotRow {
  pickup_latitude: number;
  pickup_longitude: number;
  trip_count: number;
}

interface HeroMapProps {
  hotspots?: HotspotRow[];
}

const MAP_WIDTH = 800;
const MAP_HEIGHT = 500;

const project = (lat: number, lng: number) => {
  const minLat = 40.55, maxLat = 40.85, minLng = -74.05, maxLng = -73.75;
  const x = ((lng - minLng) / (maxLng - minLng)) * MAP_WIDTH;
  const y = ((maxLat - lat) / (maxLat - minLat)) * MAP_HEIGHT;
  return { x, y };
};

const HeroMap = ({ hotspots = [] }: HeroMapProps) => {
  const maxCount = Math.max(...hotspots.map(h => h.trip_count), 1);

  return (
    <section className="mb-14 relative">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2" style={{ transform: "rotate(-0.5deg)" }}>
        🗺️ Where NYC Moves
      </h2>
      <p className="annotation text-base mb-6" style={{ transform: "rotate(0.7deg)" }}>
        the city never sleeps — here's proof ↓
      </p>

      <div className="relative" style={{ transform: "rotate(0.3deg)" }}>
        {/* Thick hand-drawn outer frame */}
        <div
          className="border-[3px] border-foreground p-2 relative"
          style={{
            borderRadius: "4px 12px 6px 16px",
            boxShadow: "5px 5px 0px hsl(0 0% 18%), 6px 6px 0px hsl(0 0% 18% / 0.3)",
          }}
        >
          {/* Corner marks */}
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-[3px] border-l-[3px] border-foreground" style={{ borderRadius: "2px 0 0 0" }} />
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-[3px] border-r-[3px] border-foreground" style={{ borderRadius: "0 2px 0 0" }} />
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-[3px] border-l-[3px] border-foreground" style={{ borderRadius: "0 0 0 2px" }} />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-[3px] border-r-[3px] border-foreground" style={{ borderRadius: "0 0 2px 0" }} />

          {/* Tape decorations */}
          <div className="tape-left" style={{ top: '-10px', left: '20px' }} />
          <div className="tape-right" style={{ top: '-10px', right: '20px' }} />

          {/* Pin on top center */}
          <div className="pin" style={{ top: '-10px' }} />

          <div className="p-3">
            <svg
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="w-full h-auto"
              style={{ minHeight: 300, maxHeight: 500 }}
            >
              {/* Paper background */}
              <rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} fill="hsl(34, 18%, 92%)" stroke="none" />

              {/* Grid lines (notebook style) */}
              {Array.from({ length: 11 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 50} x2={MAP_WIDTH} y2={i * 50} stroke="#2d2d2d" strokeOpacity="0.06" strokeWidth="1" />
              ))}
              {Array.from({ length: 17 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2={MAP_HEIGHT} stroke="#2d2d2d" strokeOpacity="0.06" strokeWidth="1" />
              ))}

              {/* Water areas (hand-drawn style) */}
              <path d="M 0 200 Q 40 175 80 210 Q 60 250 100 280 L 100 500 L 0 500 Z" fill="hsl(210, 60%, 92%)" stroke="hsl(214, 55%, 40%)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
              <path d="M 700 0 Q 740 40 720 140 Q 770 190 800 280 L 800 0 Z" fill="hsl(210, 60%, 92%)" stroke="hsl(214, 55%, 40%)" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.7" />
              <path d="M 350 450 Q 400 430 500 460 Q 550 470 600 450 L 600 500 L 350 500 Z" fill="hsl(210, 60%, 92%)" stroke="hsl(214, 55%, 40%)" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />

              {/* Hotspots from CSV data */}
              {hotspots.map((spot, i) => {
                const { x, y } = project(spot.pickup_latitude, spot.pickup_longitude);
                const intensity = spot.trip_count / maxCount;
                const r = intensity * 28 + 8;
                return (
                  <g key={i}>
                    {/* Outer glow */}
                    <circle cx={x} cy={y} r={r + 4} fill="#ff4d4d" fillOpacity={0.08} />
                    {/* Main circle */}
                    <circle cx={x} cy={y} r={r} fill="#ff4d4d" fillOpacity={0.2} stroke="#ff4d4d" strokeWidth="2" strokeDasharray={intensity > 0.7 ? "0" : "4 3"} />
                    {/* Center dot */}
                    <circle cx={x} cy={y} r={4} fill="#ff4d4d" stroke="#2d2d2d" strokeWidth="1.5" />
                  </g>
                );
              })}

              {/* Hand-drawn annotations */}
              <g>
                <path d="M 450 70 Q 430 95 420 125" fill="none" stroke="#ff4d4d" strokeWidth="2" />
                <polygon points="415,120 420,132 425,120" fill="#ff4d4d" />
                <text x="435" y="60" fontFamily="'Kalam'" fontSize="14" fill="#ff4d4d" fontWeight="bold">Hotspot!</text>
              </g>

              {/* Compass doodle */}
              <g transform="translate(720, 420)">
                <circle cx="0" cy="0" r="20" fill="none" stroke="#2d2d2d" strokeWidth="1.5" opacity="0.3" />
                <text x="-3" y="-10" fontFamily="'Kalam'" fontSize="10" fill="#2d2d2d" opacity="0.4">N</text>
                <line x1="0" y1="-6" x2="0" y2="6" stroke="#2d2d2d" strokeWidth="1.5" opacity="0.3" />
                <line x1="-6" y1="0" x2="6" y2="0" stroke="#2d2d2d" strokeWidth="1.5" opacity="0.3" />
              </g>

              {/* Scale bar */}
              <g transform="translate(30, 470)">
                <line x1="0" y1="0" x2="60" y2="0" stroke="#2d2d2d" strokeWidth="1.5" opacity="0.3" />
                <line x1="0" y1="-4" x2="0" y2="4" stroke="#2d2d2d" strokeWidth="1" opacity="0.3" />
                <line x1="60" y1="-4" x2="60" y2="4" stroke="#2d2d2d" strokeWidth="1" opacity="0.3" />
                <text x="15" y="14" fontFamily="'Patrick Hand'" fontSize="10" fill="#2d2d2d" opacity="0.3">~2 mi</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMap;
