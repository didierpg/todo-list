import styles from "./styles.module.css";
import { Task, TaskProps } from "./Task";
import { EmptyList } from "./EmptyList";

interface TaskListProps {
  tasks: TaskProps[];
  onCheckTask: (id: number) => void; // Função para remover tarefas
  onRemoveTask: (id: number) => void; // Função para remover tarefas
}

export function TaskList({
  tasks = [],
  onCheckTask,
  onRemoveTask,
}: TaskListProps) {
  return (
    <div className={styles.tasklist}>
      {tasks.length > 0 ? (
        tasks.map(({ id, description, isDone }) => (
          <Task
            key={id}
            id={id}
            description={description}
            isDone={isDone}
            onCheckTask={onCheckTask}
            onRemoveTask={onRemoveTask} // Passe `onRemoveTask` como `taskRemover`
          />
        ))
      ) : (
        <EmptyList />
      )}
    </div>
  );
}
