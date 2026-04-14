import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import ChartSkeleton from "./ChartSkeleton";
import { tooltipStyle, fmtShort, fmtDollar } from "@/lib/chartUtils";

interface DistanceFareRow { distance_range: string; avg_fare: number; }
interface TipsDistRow     { tip_category: string;   trip_count: number; }

interface ValueInsightsProps {
  distanceFare?: DistanceFareRow[];
  tipsDist?:     TipsDistRow[];
}

const ValueInsights = ({ distanceFare = [], tipsDist = [] }: ValueInsightsProps) => (
  <section className="mb-14 relative">
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2" style={{ transform: "rotate(0.8deg)" }}>
      💰 Value Insights
    </h2>
    <p className="annotation-blue text-base mb-8" style={{ transform: "rotate(-0.4deg)" }}>
      follow the money trail...
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Distance vs Avg Fare */}
      <div
        className="sketch-border-dashed sketch-animate-in chart-card-hover relative coffee-stain"
        style={{ transform: "rotate(-1deg)", marginTop: "5px" }}
      >
        <div className="pin" />
        <h3 className="font-heading text-xl font-bold mb-1 mt-3">Distance vs Avg Fare</h3>
        <p className="annotation-blue mb-4">
          Longer rides = more fare
          <svg className="inline ml-1 w-6 h-3" viewBox="0 0 24 12">
            <path d="M 0 6 L 18 6" fill="none" stroke="hsl(214, 55%, 40%)" strokeWidth="2" />
            <polygon points="16,2 22,6 16,10" fill="hsl(214, 55%, 40%)" />
          </svg>
        </p>
        <div className="h-64 relative">
          {distanceFare.length === 0 ? (
            <ChartSkeleton bars={10} />
          ) : (
            <div className="chart-loaded h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={distanceFare}>
                  <XAxis
                    dataKey="distance_range"
                    tick={{ fontFamily: "'Patrick Hand'", fontSize: 12 }}
                    label={{ value: "miles", fontFamily: "'Patrick Hand'", position: "insideBottom", offset: -2 }}
                  />
                  <YAxis
                    tick={{ fontFamily: "'JetBrains Mono'", fontSize: 11 }}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v: number) => [fmtDollar(v), "Avg Fare"]}
                    labelFormatter={(l) => `${l}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="avg_fare"
                    stroke="hsl(214, 55%, 40%)"
                    strokeWidth={3}
                    strokeDasharray="8 3"
                    dot={{ r: 5, fill: "hsl(214, 55%, 40%)", stroke: "#2d2d2d", strokeWidth: 2 }}
                    activeDot={{ r: 7, stroke: "#2d2d2d", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>

      {/* Tips Distribution */}
      <div
        className="sketch-border-dashed sketch-animate-in chart-card-hover relative"
        style={{ transform: "rotate(1.5deg)", marginTop: "-8px" }}
      >
        <div className="tape-right" />
        <h3 className="font-heading text-xl font-bold mb-1 mt-3">Tips Distribution</h3>
        <p className="annotation mb-4">Most people don't tip 😤</p>
        <div className="h-64 relative">
          {tipsDist.length === 0 ? (
            <ChartSkeleton bars={4} />
          ) : (
            <div className="chart-loaded h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tipsDist}>
                  <XAxis dataKey="tip_category" tick={{ fontFamily: "'Patrick Hand'", fontSize: 12 }} />
                  <YAxis
                    tick={{ fontFamily: "'JetBrains Mono'", fontSize: 11 }}
                    tickFormatter={fmtShort}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v: number) => [fmtShort(v), "Trips"]}
                    labelFormatter={(l) => `Tip: ${l}`}
                  />
                  <ReferenceLine
                    y={0}
                    stroke="#ff4d4d"
                    strokeDasharray="4 4"
                    label={{ value: "← Low tips zone", fontFamily: "'Kalam'", fill: "#ff4d4d", fontSize: 12, position: "right" }}
                  />
                  <Bar dataKey="trip_count" fill="#ff4d4d" radius={[3, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <svg className="absolute top-20 left-8 w-12 h-16 opacity-40" viewBox="0 0 40 60">
          <path d="M 20 0 Q 10 20, 20 40 Q 25 50, 20 58" fill="none" stroke="hsl(0 0% 18%)" strokeWidth="1.5" />
          <polygon points="16,55 20,62 24,55" fill="hsl(0 0% 18%)" />
        </svg>
      </div>
    </div>
  </section>
);

export default ValueInsights;
