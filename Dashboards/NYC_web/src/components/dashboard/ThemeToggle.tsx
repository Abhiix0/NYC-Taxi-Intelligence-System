import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="postit postit-yellow jiggle"
      style={{
        transform: "rotate(2deg)",
        borderRadius: "4px 10px 6px 12px",
        padding: "6px 14px",
        fontSize: "14px",
        fontFamily: "'Patrick Hand', cursive",
        cursor: "pointer",
        border: "2px solid hsl(var(--foreground))",
        boxShadow: "3px 3px 0 hsl(var(--foreground))",
        background: "hsl(var(--postit-yellow))",
        color: "hsl(var(--foreground))",
        transition: "all 0.12s ease-out",
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀️ light" : "🌙 dark"}
    </button>
  );
};

export default ThemeToggle;
