import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import styles from "./styles.module.css";

export interface TaskProps {
  id: number;
  description?: string;
  isDone: boolean;
}

interface TaskComponentProps extends TaskProps {
  onCheckTask: (id: number) => void;
  onRemoveTask: (id: number) => void;
}

export function Task({
  id,
  isDone,
  description,
  onCheckTask,
  onRemoveTask,
}: TaskComponentProps) {
  const toggleCheckboxTask = () => {
    onCheckTask(id);
  };

  const handleButtonRemoveTask = () => {
    onRemoveTask(id);
  };

  return (
    <div className={styles.task}>
      <button onClick={toggleCheckboxTask}>
        {isDone ? <CheckCircle weight="fill" /> : <Circle />}
      </button>
      <p className={isDone ? styles.done : ""}>{description}</p>
      <button onClick={handleButtonRemoveTask}>
        <Trash />
      </button>
    </div>
  );
}
