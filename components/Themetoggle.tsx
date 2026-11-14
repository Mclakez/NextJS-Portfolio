// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { LuMoon, LuMonitor, LuSun } from "react-icons/lu";

type Theme = "dark" | "system" | "light";

const options = [
  { value: "dark", label: "Dark", icon: LuMoon },
  { value: "system", label: "System", icon: LuMonitor },
  { value: "light", label: "Light", icon: LuSun },
] as const;

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  // Read the saved choice after the first render
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") setTheme(saved);
  }, []);

  function choose(next: Theme) {
    const html = document.documentElement;
    html.classList.remove("light", "dark");

    if (next === "system") {
      localStorage.removeItem("theme");
    } else {
      html.classList.add(next);
      localStorage.setItem("theme", next);
    }
    setTheme(next);
  }

  return (
    <div
      role="group"
      aria-label="Theme"
      className="inline-flex rounded-full border border-line bg-surface-accent p-1"
    >
      {options.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() => choose(value)}
          aria-label={label}
          aria-pressed={theme === value}
          className={`cursor-pointer rounded-full p-2 transition-colors ${
            theme === value
              ? "bg-surface text-ink shadow-sm"
              : "text-ink-muted hover:text-ink"
          }`}
        >
          <Icon className="size-4" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}