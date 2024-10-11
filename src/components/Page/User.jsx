import React from "react";
import TaskManger from "../../components/Page/TaskManger";

const UserComponent = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">User Dashboard</h1>
      <TaskManger />
    </div>
  );
};

export default UserComponent;
