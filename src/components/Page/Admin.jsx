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
    <div className="min-h-screen p-6">
      <div className="bg-grayy shadow-lg max-w-md mx-auto mt-20 p-6 rounded ">
        <h1 className="text-center font-bold text-3xl text=gray-800 mb-8 ">
          Admin Dashboard
        </h1>

        <div className="mb-12">
          <h2 className=" text-2xl font-semibold text-gray-700 mb-4">
            Manage Task
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <li className="bg=white p-4 rounded-lg shadow-md" key={task.id}>
                <h3 className="text-xl font-bold mb-2">Title:{task.title}</h3>
                <p className="text-gray-600 mb-2 ">
                  Description:{task.description}
                </p>
                <p className="text-sm text-gray-500">Status:{task.status}</p>
                <p className="text-sm text-gray-500 mb-4">
                  Due: {task.dueDate || "No due date"}
                </p>

                <div className="flex justify-between">
                  <button
                    className="bg-yellow-500 rounded w-24 border text-white px-3 py-2 text-white text-sm "
                    onClick={() => handleUpdateTask(task.id, "in progress")}
                  >
                    Mark In Progress
                  </button>

                  <button
                    className="bg-green-500 rounded-md text-sm w-24 boreder text-white px-3 py-2"
                    onClick={() => handleUpdateTask(task.id, "done")}
                  >
                    Mark Done
                  </button>

                  <button
                    className="bg-red-500 border rounded-md text-sm w-24 px-3 py-2 text-white"
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
