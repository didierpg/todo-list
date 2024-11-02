import { Circle, Trash } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <button>
        <Circle />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash />
      </button>
    </div>
  );
}
