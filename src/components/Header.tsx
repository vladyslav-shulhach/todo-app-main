import styles from "./Header.module.scss";

function Header() {
  return (
    <header className="header">
      <h1 className={styles.header}>Todo App</h1>
    </header>
  );
}

export default Header;
