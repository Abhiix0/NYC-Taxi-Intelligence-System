import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import ChartSkeleton from "./ChartSkeleton";

interface HotspotRow {
  pickup_latitude: number;
  pickup_longitude: number;
  trip_count?: number;
}

interface HeroMapProps {
  hotspots?: HotspotRow[];
}

const HeroMap = ({ hotspots = [] }: HeroMapProps) => {
  const sorted = hotspots.slice(0, 500);
  const maxCount = sorted.reduce((m, r) => Math.max(m, r.trip_count ?? 1), 1);

  return (
    <section className="mb-14 relative">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 rotate-[-0.5deg]">
        🗺️ Where NYC Moves
      </h2>
      <p className="annotation text-base mb-6 rotate-[0.7deg]">
        the city never sleeps — here's proof ↓
      </p>

      <div className="relative rotate-[0.3deg]">
        <div
          className="border-[3px] border-foreground p-2 relative"
          style={{
            borderRadius: "6px 14px 8px 18px",
            boxShadow: "6px 6px 0px #2d2d2d",
          }}
        >
          <div className="tape-left" style={{ top: "-10px", left: "20px" }} />
          <div className="tape-right" style={{ top: "-10px", right: "20px" }} />
          <div className="pin" style={{ top: "-10px" }} />

          <div className="p-3">
            {hotspots.length === 0 ? (
              <div style={{ minHeight: 300 }}>
                <ChartSkeleton bars={12} />
              </div>
            ) : (
              <div
                className="h-[500px] w-full rounded-md overflow-hidden"
                style={{ filter: "grayscale(0.3) contrast(1.1)" }}
              >
                <MapContainer
                  center={[40.7128, -74.006]}
                  zoom={11}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                    attribution="© OpenStreetMap"
                  />
                  {sorted.map((spot, i) => {
                    const norm = (spot.trip_count ?? 1) / maxCount;
                    const radius = 4 + norm * 12;
                    const fillOpacity = 0.2 + norm * 0.5;
                    return (
                      <CircleMarker
                        key={i}
                        center={[spot.pickup_latitude, spot.pickup_longitude]}
                        radius={radius}
                        color="#ff4d4d"
                        fillColor="#ff4d4d"
                        fillOpacity={fillOpacity}
                        weight={0}
                      />
                    );
                  })}
                </MapContainer>
              </div>
            )}

            <div className="flex items-center gap-3 text-xs opacity-70 mt-2">
              <span>low</span>
              {[0.2, 0.4, 0.6, 0.8, 1].map((v, i) => (
                <div
                  key={i}
                  style={{
                    width: v * 18,
                    height: v * 18,
                    borderRadius: "50%",
                    background: "#ff4d4d",
                    opacity: 0.2 + v * 0.6,
                  }}
                />
              ))}
              <span>high</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMap;
