import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  title: string;
  description: string;
  remainingDays: number;
  priority: string;
  category: string;
  status: string;
}

interface TaskState {
  inprogress: Task[];
  onhold: Task[];
  completed: Task[];
}

const initialState: TaskState = {
  inprogress: [],
  onhold: [],
  completed: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state[
        action.payload.status.toLowerCase().replace(" ", "") as keyof TaskState
      ].push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const { id, status } = action.payload;

      const statusKey = status as keyof TaskState;
      const index = state[statusKey].findIndex((task) => task.id === id);

      if (index !== -1) {
        state[statusKey][index] = {
          ...state[statusKey][index],
          ...action.payload,
        };
      }
    },
    moveTask: (
      state,
      action: PayloadAction<{
        id: string;
        newStatus: string;
        position: number;
      }>
    ) => {
      const { id, newStatus, position } = action.payload;

      let taskToMove: Task | undefined;
      for (const key of Object.keys(state) as (keyof TaskState)[]) {
        const index = state[key].findIndex((task) => task.id === id);
        if (index !== -1) {
          [taskToMove] = state[key].splice(index, 1);
          break;
        }
      }

      if (taskToMove) {
        taskToMove.status = newStatus;
        state[newStatus as keyof TaskState].splice(position, 0, taskToMove);
      }
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      for (const key of Object.keys(state) as (keyof TaskState)[]) {
        state[key] = state[key].filter((task) => task.id !== action.payload);
      }
    },
    setTasks: (
      state,
      action: PayloadAction<{
        inprogress: Task[];
        onhold: Task[];
        completed: Task[];
      }>
    ) => {
      state.inprogress = action.payload.inprogress;
      state.onhold = action.payload.onhold;
      state.completed = action.payload.completed;
    },
  },
});

export const { addTask, updateTask, moveTask, deleteTask, setTasks } =
  taskSlice.actions;
export default taskSlice.reducer;
