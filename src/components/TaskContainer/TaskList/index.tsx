import styles from "./styles.module.css";
import { Task } from "./Task";

export function TaskList() {
  return (
    <div className={styles.tasklist}>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}
