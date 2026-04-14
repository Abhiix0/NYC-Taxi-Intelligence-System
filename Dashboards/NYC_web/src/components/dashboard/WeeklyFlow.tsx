import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import ChartSkeleton from "./ChartSkeleton";
import { tooltipStyle, fmtShort } from "@/lib/chartUtils";

interface DayRow { day_of_week: string; trip_count: number; }

interface WeeklyFlowProps {
  tripsData?: DayRow[];
}

const BUSY_DAYS = ["Thursday", "Friday", "Saturday"];

const WeeklyFlow = ({ tripsData = [] }: WeeklyFlowProps) => (
  <section className="mb-14 relative">
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2" style={{ transform: "rotate(-0.6deg)" }}>
      📅 Weekly Flow
    </h2>
    <p className="annotation text-lg mb-6" style={{ transform: "rotate(1deg)" }}>
      Weekend energy ↑↑↑
      <svg className="inline ml-2 w-8 h-4" viewBox="0 0 30 16">
        <path d="M 2 14 L 14 4 L 28 14" fill="none" stroke="hsl(0, 100%, 65%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </p>
    <div
      className="sketch-card sketch-animate-in chart-card-hover relative"
      style={{ transform: "rotate(0.4deg)" }}
    >
      <div className="tape" />
      <div className="h-72 mt-2 relative">
        {tripsData.length === 0 ? (
          <ChartSkeleton bars={7} />
        ) : (
          <div className="chart-loaded h-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tripsData} layout="vertical">
                <XAxis
                  type="number"
                  tick={{ fontFamily: "'JetBrains Mono'", fontSize: 11 }}
                  tickFormatter={fmtShort}
                />
                <YAxis
                  dataKey="day_of_week"
                  type="category"
                  tick={{ fontFamily: "'Patrick Hand'", fontSize: 14 }}
                  width={90}
                />
                <Tooltip
                  contentStyle={tooltipStyle}
                  formatter={(v: number) => [fmtShort(v), "Trips"]}
                  labelFormatter={(l) => `${l}`}
                />
                <Bar dataKey="trip_count" radius={[0, 4, 4, 0]}>
                  {tripsData.map((entry) => (
                    <Cell
                      key={entry.day_of_week}
                      fill={BUSY_DAYS.includes(entry.day_of_week) ? "#ff4d4d" : "hsl(214, 55%, 40%)"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <svg className="absolute right-4 top-16 w-8 h-24 opacity-50" viewBox="0 0 20 80">
        <path d="M 4 0 Q 16 10, 16 40 Q 16 70, 4 80" fill="none" stroke="hsl(0, 100%, 65%)" strokeWidth="2" />
        <text x="-30" y="12" fontFamily="'Kalam'" fontSize="10" fill="hsl(0, 100%, 65%)" transform="rotate(90, 10, 40)">busy!</text>
      </svg>
    </div>
  </section>
);

export default WeeklyFlow;
