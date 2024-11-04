import { useState } from "react";
import styles from "./styles.module.css";
import { TaskAdder } from "./TaskAdder";
import { TaskList } from "./TaskList";
import { TaskSummary } from "./TaskSummary";
import { faker } from "@faker-js/faker";
import { TaskProps } from "./TaskList/Task";

export function TaskContainer() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [tasksCount, setTasksCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  function countCompletedTasks(tasks: TaskProps[]) {
    return tasks.reduce((count, task) => (task.isDone ? count + 1 : count), 0);
  }

  function toggleCheckboxTask(id: number) {
    setTasks((previousTasks) => {
      const updatedTasks = previousTasks.map((previousTask) =>
        previousTask.id === id
          ? { ...previousTask, isDone: !previousTask.isDone }
          : previousTask
      );

      setCompletedTasksCount(countCompletedTasks(updatedTasks));

      return updatedTasks;
    });
  }

  function onRemoveTask(id: number) {
    setTasks((previousTasks) => {
      const updatedTasks = previousTasks.filter((task) => task.id !== id);
      setTasksCount(updatedTasks.length);

      setCompletedTasksCount(countCompletedTasks(updatedTasks));

      return updatedTasks;
    });
  }

  function onAddTask(description?: string) {
    const task: TaskProps = {
      id: faker.number.int(),
      description,
      isDone: false,
    };

    setTasks((previousTasks) => {
      const updatedTasks = [...previousTasks, task];
      setTasksCount(updatedTasks.length);
      return updatedTasks;
    });
  }

  return (
    <div className={styles.taskcontainer}>
      <TaskAdder onAddTask={onAddTask} />
      <TaskSummary
        tasksCount={tasksCount}
        completedTasksCount={completedTasksCount}
      />
      <TaskList
        tasks={tasks}
        onCheckTask={toggleCheckboxTask}
        onRemoveTask={onRemoveTask}
      />
    </div>
  );
}
