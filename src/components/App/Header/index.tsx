import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src="src/assets/rocket.svg" />
      <strong>
        <span>to</span>
        <span>do</span>
      </strong>
    </header>
  );
}
