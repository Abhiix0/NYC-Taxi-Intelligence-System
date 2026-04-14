import HeroKPIs from "@/components/dashboard/HeroKPIs";
import CityRhythm from "@/components/dashboard/CityRhythm";
import WeeklyFlow from "@/components/dashboard/WeeklyFlow";
import ValueInsights from "@/components/dashboard/ValueInsights";
import HeroMap from "@/components/dashboard/HeroMap";
import InsightPanel from "@/components/dashboard/InsightPanel";
import { useAllData } from "@/hooks/useAllData";

const Index = () => {
  const { kpis, tripsHour, revenueHour, tripsDay, distFare, tipsDist, hotspots, isLoading } = useAllData();

  return (
    <div className="min-h-screen px-4 py-8 md:px-8 lg:px-16 max-w-7xl mx-auto">
      {/* SVG filter for sketch roughness */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <filter id="sketch-roughness">
            <feTurbulence type="turbulence" baseFrequency="0.03" numOctaves="4" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
          </filter>
        </defs>
      </svg>

      {/* Title */}
      <header className="mb-16 text-center relative">
        <div className="inline-block relative">
          <h1
            className="font-heading text-4xl md:text-6xl font-bold mb-3"
            style={{ transform: "rotate(-1.5deg)" }}
          >
            🚕 NYC Taxi Intelligence System
          </h1>
          <svg className="absolute -bottom-2 left-10 right-10 h-3 w-[80%]" viewBox="0 0 300 8" preserveAspectRatio="none">
            <path d="M 0 4 Q 30 0, 60 4 T 120 4 T 180 4 T 240 4 T 300 4" fill="none" stroke="hsl(0, 100%, 65%)" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
        <p
          className="font-body text-lg text-muted-foreground mt-4"
          style={{ transform: "rotate(0.8deg)" }}
        >
          A messy notebook of 12.4 million stories on wheels
        </p>
        <svg className="absolute -right-2 top-0 w-16 h-16 opacity-30 hidden lg:block" viewBox="0 0 60 60">
          <path d="M 10 50 Q 20 20, 50 10" fill="none" stroke="hsl(0 0% 18%)" strokeWidth="2" strokeDasharray="4 3" />
          <polygon points="48,6 54,12 46,14" fill="hsl(0 0% 18%)" />
        </svg>
      </header>

      <div style={{ marginTop: "-8px" }}>
        <HeroKPIs kpi={kpis[0]} />
      </div>

      <div className="section-divider" style={{ margin: "2rem auto", maxWidth: "60%" }} />

      <div style={{ marginTop: "6px" }}>
        <CityRhythm tripsData={tripsHour as any} revenueData={revenueHour as any} />
      </div>

      <div style={{ marginTop: "-4px" }}>
        <WeeklyFlow tripsData={tripsDay as any} />
      </div>

      <div className="section-divider" style={{ margin: "1.5rem auto", maxWidth: "45%", transform: "rotate(0.5deg)" }} />

      <div style={{ marginTop: "10px" }}>
        <ValueInsights distanceFare={distFare as any} tipsDist={tipsDist as any} />
      </div>

      <div style={{ marginTop: "-6px" }}>
        <HeroMap hotspots={hotspots} />
      </div>

      <div style={{ marginTop: "8px" }}>
        <InsightPanel />
      </div>

      <footer className="text-center py-8 font-body text-muted-foreground text-sm relative" style={{ transform: "rotate(-0.3deg)" }}>
        <svg className="mx-auto mb-2 w-24 h-2" viewBox="0 0 100 6">
          <path d="M 0 3 Q 15 0, 30 3 T 60 3 T 90 3 T 100 3" fill="none" stroke="hsl(0 0% 18% / 0.3)" strokeWidth="1.5" />
        </svg>
        ✏️ Sketched with data & curiosity
      </footer>
    </div>
  );
};

export default Index;
