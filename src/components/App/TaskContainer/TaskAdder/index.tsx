import { PlusCircle } from "@phosphor-icons/react";
import styles from "./styles.module.css";
import { useState } from "react";

interface TaskAdderProps {
  onAddTask: (description?: string) => void;
}

export function TaskAdder({ onAddTask }: TaskAdderProps) {
  const [task, setTask] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTask(task);
    setTask("");
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.taskadder}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={handleChange}
        required
      />
      <button disabled={!task} type="submit">
        <strong>Criar</strong>
        <PlusCircle weight="bold" />
      </button>
    </form>
  );
}
