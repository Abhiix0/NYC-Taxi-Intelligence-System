/**
 * Sketch-styled loading skeleton that matches the hand-drawn card aesthetic.
 * Used as a drop-in replacement for plain "Loading..." text.
 */
const ChartSkeleton = ({ bars = 8 }: { bars?: number }) => (
  <div className="h-full flex flex-col justify-end gap-1 px-2 pb-2 animate-pulse">
    {/* Fake y-axis line */}
    <div className="absolute left-6 top-2 bottom-8 w-px bg-foreground/10" />
    {/* Fake x-axis line */}
    <div className="absolute left-6 right-2 bottom-8 h-px bg-foreground/10" />
    <div className="flex items-end justify-around h-full gap-1 pt-4">
      {Array.from({ length: bars }).map((_, i) => {
        // Vary heights to look like a real bar chart silhouette
        const heights = [40, 55, 35, 70, 85, 95, 80, 60, 45, 30, 50, 65];
        const h = heights[i % heights.length];
        return (
          <div
            key={i}
            className="flex-1 rounded-sm bg-foreground/8"
            style={{
              height: `${h}%`,
              borderRadius: "2px 4px 0 0",
              background: `hsl(0 0% 18% / ${0.05 + (i % 3) * 0.02})`,
            }}
          />
        );
      })}
    </div>
    {/* Fake x-axis labels */}
    <div className="flex justify-around px-1 mt-1">
      {Array.from({ length: Math.min(bars, 6) }).map((_, i) => (
        <div key={i} className="h-2 w-4 rounded bg-foreground/8" />
      ))}
    </div>
  </div>
);

export default ChartSkeleton;
