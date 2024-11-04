import styles from "./styles.module.css";
import clipboardImage from "src/assets/clipboard.svg";
export function EmptyList() {
  return (
    <div className={styles.emptylist}>
      <img src={clipboardImage} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  );
}
