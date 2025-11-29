import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const [theme, setTheme] = useState(() => {
    // Load previously saved theme, or default to light
    return localStorage.getItem("theme") || "light";
  });

  // Whenever theme changes → save to localStorage + apply to body
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#121212";
    document.body.style.color = theme === "light" ? "#000" : "#fff";
  }, [theme]);

  return (
    <div style={{ padding: "10px" }}>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          padding: "8px 12px",
          borderRadius: "6px",
          backgroundColor: theme === "light" ? "#000" : "#fff",
          color: theme === "light" ? "#fff" : "#e9bbbbff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
}
