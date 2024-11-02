import styles from "./styles.module.css";

export function TaskSummary() {
  return (
    <div className={styles.tasksummary}>
      <div className={styles.created}>
        <strong>Tarefas criadas</strong>
        <strong>5</strong>
      </div>
      <div className={styles.done}>
        <strong>Concluídas</strong>
        <strong>2 de 5</strong>
      </div>
    </div>
  );
}
