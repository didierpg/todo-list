import styles from "./styles.module.css";
import { TaskAdder } from "./TaskAdder";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";

export function TaskContainer() {
  return (
    <div className={styles.taskcontainer}>
      <TaskAdder />
      <TaskSummary />
      <TaskList />
    </div>
  );
}
