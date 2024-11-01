import { PlusCircle } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export function TaskAdder() {
  return (
    <form className={styles.taskadder}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        <strong>Criar</strong>
        <PlusCircle weight="bold" />
      </button>
    </form>
  );
}
