import { insights } from "@/data/taxiData";

const rotations = ["rotate(-3deg)", "rotate(2.2deg)", "rotate(-0.8deg)", "rotate(2.8deg)", "rotate(-1.8deg)"];
const bgs = ["postit-yellow", "postit-pink", "postit-blue", "postit-green", "postit-white"];
const offsets = ["0px", "12px", "-6px", "8px", "-10px"];
const borderRadii = [
  "3px 10px 5px 12px",
  "8px 4px 10px 6px",
  "5px 12px 3px 8px",
  "10px 6px 8px 4px",
  "4px 8px 6px 14px",
];
const decorations = ["tape-left", "pin", "tape", "pin", "tape-right"];

const InsightPanel = () => (
  <section className="mb-12 relative">
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2" style={{ transform: "rotate(0.7deg)" }}>
      🧠 Key Insights
    </h2>
    <p className="annotation-blue text-base mb-8" style={{ transform: "rotate(-0.3deg)" }}>
      things we noticed while digging through the data...
    </p>

    <div className="flex flex-wrap gap-6 justify-center">
      {insights.map((insight, i) => (
        <div
          key={i}
          className={`postit ${bgs[i]} jiggle w-52 relative`}
          style={{
            transform: rotations[i],
            borderRadius: borderRadii[i],
            marginTop: offsets[i],
          }}
        >
          <div className={decorations[i]} />
          {/* Decorative scribble on some cards */}
          {i === 1 && (
            <svg className="absolute top-2 right-2 w-6 h-6 opacity-20" viewBox="0 0 20 20">
              <path d="M 2 18 Q 10 2, 18 18" fill="none" stroke="#2d2d2d" strokeWidth="1.5" />
            </svg>
          )}
          {i === 3 && (
            <svg className="absolute bottom-2 left-2 w-8 h-5 opacity-20" viewBox="0 0 30 16">
              <path d="M 0 8 Q 8 2, 15 8 T 30 8" fill="none" stroke="#2d2d2d" strokeWidth="1.5" />
            </svg>
          )}
          <p className="font-body text-base mt-5 leading-relaxed">
            {insight.text.split(insight.highlight).map((part, j, arr) => (
              <span key={j}>
                {part}
                {j < arr.length - 1 && (
                  <span className={`font-heading font-bold ${insight.color === "accent" ? "text-accent" : "text-primary"} scribble-underline`}>
                    {insight.highlight}
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default InsightPanel;
