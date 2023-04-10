import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [high_school, setHighschool] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, high_school });
    setTitle("");
    setHighschool("");
  };

  return (
    <form
      className="bg-slate-950 text-center pt-4 text-white"
      onSubmit={handleSubmit}
    >
      <h1 className="font-extrabold text-4xl pt-7 pb-3">
        Añade Tus lenguajes
      </h1>
      <h1 className="font-extrabold text-4xl pb-3">De Programacion</h1>
      <input
        className="bg-slate-600 text-center pl-12 pr-12 p-4 rounded-md"
        type="text"
        placeholder="JS | CSS | HTML | C++ | C"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
      />

      <br />

      <textarea
        className="rounded-md bg-slate-600 mt-4 text-center"
        placeholder="Profesor"
        value={high_school}
        onChange={(e) => setHighschool(e.target.value)}
      ></textarea>
      <br />
      <button className="border-spacing-6 border-4 border-green-600 mt-2 mb-6 bg-green-600 pt-2 pr-3 pb-2 pl-3 rounded-full">
        Save
      </button>
    </form>
  );
}

export default TaskForm;
