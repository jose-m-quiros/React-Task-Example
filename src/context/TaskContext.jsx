import { task as data } from "../data/task";
import { useState, useEffect, createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(tasks) {
    setTask([
      ...task,
      {
        title: tasks.title,
        id: task.length,
        high_school: tasks.high_school,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTask(task.filter((tasks) => tasks.id !== taskId));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        deleteTask
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
