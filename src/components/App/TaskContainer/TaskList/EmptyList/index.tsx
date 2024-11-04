import styles from "./styles.module.css";

export function EmptyList() {
  return (
    <div className={styles.emptylist}>
      <img src="src/assets/clipboard.svg" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
