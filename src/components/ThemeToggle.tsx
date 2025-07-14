import styles from "./ThemeToggle.module.scss";
import { useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  }

  return (
    <button
      className={styles.toggleButton}
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      <span className={styles.icon}>{theme === "light" ? "🌞" : "🌜"}</span>
    </button>
  );
}

export default ThemeToggle;
