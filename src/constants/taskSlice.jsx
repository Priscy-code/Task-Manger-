import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  tasks: [],
};

const taskReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action) => {
        state.tasks.push(action.payload);
      },

      prepare: ({ title, description, dueDate }) => ({
        payload: {
          id: nanoid(),
          title,
          description,
          status: "todo",
          dueDate: dueDate || null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      }),
    },

    updateTask: (state, action) => {
      const { id, title, description, status, dueDate } = action.payload;
      const existingTask = state.tasks.find((task) => task.id === id);
      if (existingTask) {
        existingTask.title = title || existingTask.title;
        existingTask.description = description || existingTask.description;
        existingTask.status = status || existingTask.status;
        existingTask.dueDate = dueDate || existingTask.dueDate;
        existingTask.updateAt = new Date().toISOString();
      }
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});
export const { addTask, updateTask, deleteTask } = taskReducer.actions;
export default taskReducer.reducer;
