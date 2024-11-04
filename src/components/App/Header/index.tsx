import styles from "./styles.module.css";
import rocketImage from "src/assets/rocket.svg";
export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketImage} />
      <strong>
        <span>to</span>
        <span>do</span>
      </strong>
    </header>
  );
}
