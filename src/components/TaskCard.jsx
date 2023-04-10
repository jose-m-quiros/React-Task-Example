import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    const result = window.confirm("¿Quieres Eliminar Lo Aprendido?");
    if (result) {
      setIsDeleting(true);
      setTimeout(() => {
        deleteTask(task.id);
        setIsDeleting(false);
        alert("Has Click en OK Para Eliminar Lo Aprendido");
      }, 900);
    } else {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-slate-950 text-center text-red-50 border-blue-500 border-4 mb-6">
      <h1 className="font-extrabold text-4xl pt-4 pb-2">{task.title}</h1>
      <p className="text-1xl">{task.high_school}</p>
      <button
        className="border-spacing-6 border-4 border-red-600 mt-6 mb-6 bg-red-600 rounded-xl p-2"
        onClick={handleDelete}
      >
        {isDeleting ? "Procesando..." : "Delete"}
      </button>
    </div>
  );
}

export default TaskCard;
