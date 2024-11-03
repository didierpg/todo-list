import { useState } from "react";
import styles from "./styles.module.css";
import { TaskAdder } from "./TaskAdder";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import { faker } from "@faker-js/faker";
import { TaskProps } from "./TaskList/Task";

export function TaskContainer() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  function toggleCheckboxTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.map((previousTask) =>
        previousTask.id === id
          ? { ...previousTask, isDone: !previousTask.isDone }
          : previousTask
      )
    );
  }

  function onRemoveTask(id: number) {
    setTasks((previousTasks) => previousTasks.filter((task) => task.id !== id));
  }

  function onAddTask(description?: string) {
    const task: TaskProps = {
      id: faker.number.int(),
      description,
      isDone: false,
    };

    setTasks((previousTasks) => [...previousTasks, task]);
  }

  return (
    <div className={styles.taskcontainer}>
      <TaskAdder onAddTask={onAddTask} />
      <TaskSummary />
      <TaskList
        tasks={tasks}
        onCheckTask={toggleCheckboxTask}
        onRemoveTask={onRemoveTask}
      />
    </div>
  );
}
