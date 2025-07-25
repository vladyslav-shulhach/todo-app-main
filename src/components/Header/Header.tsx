import styles from "./Header.module.scss";
import SunIcon from "../../assets/images/icon-sun.svg";
import MoonIcon from "../../assets/images/icon-moon.svg";

type Props = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

function Header({ theme, toggleTheme }: Props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Todo</h1>
      <button
        className={styles.toggleButton}
        onClick={toggleTheme}
        aria-label="Toggle Theme"
      >
        <span className={styles.icon}>
          {theme === "light" ? (
            <img src={SunIcon} alt="Light mode" width={24} height={24} />
          ) : (
            <img src={MoonIcon} alt="Dark mode" width={24} height={24} />
          )}
        </span>
      </button>
    </header>
  );
}

export default Header;
