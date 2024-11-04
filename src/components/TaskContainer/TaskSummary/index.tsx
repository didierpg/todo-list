import styles from "./styles.module.css";

interface TaskSummaryProps {
  tasksCount: number;
  completedTasksCount: number;
}

export function TaskSummary({
  tasksCount,
  completedTasksCount,
}: TaskSummaryProps) {
  return (
    <div className={styles.tasksummary}>
      <div className={styles.created}>
        <strong>Tarefas criadas</strong>
        <strong>{tasksCount}</strong>
      </div>
      <div className={styles.done}>
        <strong>Concluídas</strong>
        <strong>
          {tasksCount ? `${completedTasksCount} de ${tasksCount}` : tasksCount}
        </strong>
      </div>
    </div>
  );
}
