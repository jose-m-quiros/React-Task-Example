import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../index.css";

function TaskList() {
  const { task } = useContext(TaskContext);

  if (task.length === 0) {
    return (
      <h1 className="bg-slate-950 text-center pt-4 text-white font-extrabold text-4xl pb-3">
        No hay Nada Aprendido. <br /> Vamos Si Se Puede!
      </h1>
    );
  }

  return (
    <div className="grid m-7">
      {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
