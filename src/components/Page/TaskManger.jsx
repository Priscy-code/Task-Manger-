import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, deleteTask } from "../../constants/taskSlice";

const TaskManger = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddtask = () => {
    if (!title || !description || !dueDate) {
      alert("please fill in all fields");
      return;
    }
    dispatch(addTask({ title, description, dueDate }));
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  const handleUpdateTask = (id, status) => {
    dispatch(updateTask({ id, status }));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-grayy shadow-lg max-w-md mt-20 items-center p-6 w-full rounded-lg ">
        <h1 className="text-center font-bold text-3xl">User Dashboard</h1>
        <h1 className="text-center font-bold ">Task Manager</h1>

        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border border-black p-4 mt-4 rounded-lg"
        />

        <textarea
          rows="4"
          cols="50"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-black mt-4 rounded"
        ></textarea>

        <input
          type="date"
          value={dueDate}
          className="w-24 mt-2"
          onChange={(e) => setDueDate(e.target.value)}
        />

        <div className=" flex justify-center items-center ">
          <button
            onClick={handleAddtask}
            className="bg-purple text-white font-bold py-2 px-4 rounded"
          >
            Add Task
          </button>
        </div>

        <h2 className="font-semibold text-xl mt-8 mb-4 ">Your Tasks</h2>
        <ul className="w-full max-w-md bg-white">
          {tasks.map((task) => (
            <li key={task.id} className="border p-4 mb-4 rounder shadow">
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p> Due: {task.dueDate || "No due date"}</p>

              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => handleUpdateTask(task.id, "in progress")}
                  className="bg-yellow-500 text-white font-bold py-1 px-3 rounded hover:bg-yellow-600"
                >
                  Mark as In progress
                </button>
                <button
                  onClick={() => handleUpdateTask(task.id, "done")}
                  className="bg-green-500 text-white font-bold py-1 px-3 rounded hover:bg-green-600"
                >
                  Mark done
                </button>
                <button
                  className="bg-red-500 text-white font-bold py-1 px-3 rounded hover:bg-red-600"
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete Task
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskManger;
