import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import ChartSkeleton from "./ChartSkeleton";
import { tooltipStyle, fmtShort, fmtDollar } from "@/lib/chartUtils";

interface TripRow    { pickup_hour: number; trip_count: number; }
interface RevenueRow { pickup_hour: number; total_revenue: number; }

interface CityRhythmProps {
  tripsData?:  TripRow[];
  revenueData?: RevenueRow[];
}

const CityRhythm = ({ tripsData = [], revenueData = [] }: CityRhythmProps) => {
  const peakHour = tripsData.length > 0
    ? tripsData.reduce((max, row) => row.trip_count > max.trip_count ? row : max, tripsData[0]).pickup_hour
    : 18;
  const revPeakHour = revenueData.length > 0
    ? revenueData.reduce((max, row) => row.total_revenue > max.total_revenue ? row : max, revenueData[0]).pickup_hour
    : 18;
  return (
  <section className="mb-14 relative">
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2" style={{ transform: "rotate(0.5deg)" }}>
      ⏰ City Rhythm
    </h2>
    <p className="annotation text-base mb-6" style={{ transform: "rotate(-0.5deg)" }}>
      ← when does the city <span className="scribble-underline">really</span> move? →
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Trips by Hour */}
      <div
        className="sketch-card sketch-animate-in chart-card-hover relative"
        style={{ transform: "rotate(-0.8deg)", marginTop: "6px" }}
      >
        <div className="tape-left" />
        <h3 className="font-heading text-xl font-bold mb-1 mt-2">Trips by Hour</h3>
        <p className="annotation mb-4">
          <svg className="inline w-5 h-4 mr-1" viewBox="0 0 20 16">
            <path d="M 2 12 Q 6 4, 12 8 T 18 4" fill="none" stroke="hsl(0, 100%, 65%)" strokeWidth="2" />
            <polygon points="16,2 20,4 16,6" fill="hsl(0, 100%, 65%)" />
          </svg>
          Peak here!
        </p>
        <div className="h-64 relative">
          {tripsData.length === 0 ? (
            <ChartSkeleton bars={24} />
          ) : (
            <div className="chart-loaded h-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tripsData}>
                  <XAxis dataKey="pickup_hour" tick={{ fontFamily: "'Patrick Hand'", fontSize: 11 }} interval={3} />
                  <YAxis tick={{ fontFamily: "'JetBrains Mono'", fontSize: 10 }} tickFormatter={fmtShort} />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v: number) => [fmtShort(v), "Trips"]}
                    labelFormatter={(l) => `Hour: ${l}:00`}
                  />
                  <ReferenceLine x={peakHour} stroke="#ff4d4d" strokeDasharray="5 5" label={{ value: `🔥 Peak!`, fontFamily: "'Kalam'", fill: "#ff4d4d", fontSize: 14 }} />
                  <Bar dataKey="trip_count" fill="hsl(214, 55%, 40%)" radius={[2, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <span className="margin-note">trips go brrr →</span>
      </div>

      {/* Revenue by Hour */}
      <div
        className="sketch-card sketch-animate-in chart-card-hover relative"
        style={{ transform: "rotate(1.2deg)", marginTop: "-4px" }}
      >
        <div className="tape-right" />
        <h3 className="font-heading text-xl font-bold mb-1 mt-2">Revenue by Hour</h3>
        <p className="annotation-blue mb-4">💰 Money follows the rush</p>
        <div className="h-64 relative">
          {revenueData.length === 0 ? (
            <ChartSkeleton bars={24} />
          ) : (
            <div className="chart-loaded h-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <XAxis dataKey="pickup_hour" tick={{ fontFamily: "'Patrick Hand'", fontSize: 11 }} interval={3} />
                  <YAxis tick={{ fontFamily: "'JetBrains Mono'", fontSize: 10 }} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v: number) => [fmtDollar(v), "Revenue"]}
                    labelFormatter={(l) => `Hour: ${l}:00`}
                  />
                  <ReferenceLine x={revPeakHour} stroke="hsl(214, 55%, 40%)" strokeDasharray="4 4" label={{ value: "💸", fontSize: 16 }} />
                  <Line type="monotone" dataKey="total_revenue" stroke="#ff4d4d" strokeWidth={3} dot={{ r: 3, fill: "#ff4d4d", stroke: "#2d2d2d", strokeWidth: 1.5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
        <svg className="absolute bottom-6 right-6 w-20 h-8 opacity-50" viewBox="0 0 80 30">
          <path d="M 0 20 Q 20 5, 40 15 T 80 8" fill="none" stroke="hsl(0 0% 18%)" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="10" y="28" fontFamily="'Kalam'" fontSize="9" fill="hsl(0 0% 18%)">same pattern!</text>
        </svg>
      </div>
    </div>
  </section>
  );
};

export default CityRhythm;
