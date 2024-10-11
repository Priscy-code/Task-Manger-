import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, updateTask } from "../../constants/taskSlice";
import { removerUser, changeUserRole } from "../../constants/userSlice";

const AdminComponents = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const users = useSelector((state) => state.auth.users);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleUpdateTask = (id, status) => {
    dispatch(updateTask, { id, status });
  };

  const handleDeleteUser = (userId) => {
    dispatch(removerUser(userId));
  };

  const handleChangeRole = (userId, newRole) => {
    dispatch(changeUserRole({ userId, newRole }));
  };
  return (
    <div className="min-h-screen items-center justify-center flex">
      <div className="bg-grayy shadow-lg max-w-md mx-auto mt-20 p-6">
        <h1 className="text-center font-bold text-xl">Admin Dashboard</h1>
        <div>
          <h2 className="font-semibold mt-4">Manage Task</h2>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <h3 className="p-2">Title:{task.title}</h3>
                <p className="p-2 ">Description:{task.description}</p>
                <p className="p-2">Status:{task.status}</p>
                <p className="p-2">Due: {task.dueDate || "No due date"}</p>

                <div className="flex space-x-4 p-4">
                  <button
                    className="bg-yellow-500 rounded w-24 border text-white "
                    onClick={() => handleUpdateTask(task.id, "in progress")}
                  >
                    Mark In Progress
                  </button>

                  <button
                    className="bg-green-500 rounded w-24 boreder text-white"
                    onClick={() => handleUpdateTask(task.id, "done")}
                  >
                    Mark Done
                  </button>

                  <button
                    className="bg-red-500 border rounded-lg w-24"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete Task
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-center ">Manage Users</h2>
          <ul>
            {Array.isArray(users) && users.length > 0 ? (
              users.map((user) => (
                <li key={user.id}>
                  <p className="text-xl font-semibold">{user.name}</p>
                  <p>Role:{user.role}</p>

                  <div className="space-x-4 flex">
                    <button
                      className="bg-green-500 rounded-lg border text-white"
                      onClick={() => handleChangeRole(user.id, "admin")}
                    >
                      Promote to Admin
                    </button>

                    <button
                      className="bg-yellow text-white rounded-lg border "
                      onClick={() => handleChangeRole(user.id, "user")}
                    >
                      Demote to User
                    </button>

                    <button
                      className="bg-red-800 text-white rounded-lg border "
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      Delete User
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>No Users available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default AdminComponents;
