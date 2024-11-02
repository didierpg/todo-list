import styles from "./styles.module.css";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";

export function TaskContainer() {
  return (
    <div className={styles.taskcontainer}>
      <TaskSummary />
      <TaskList />
    </div>
  );
}
