import { TaskState } from "../store/features/taskSlice";

export const selectFilteredTasks = (tasks: TaskState, query: string) => {
  const allTasks = [...tasks.completed, ...tasks.inprogress, ...tasks.onhold];

  if (!query) return allTasks;

  const lowerQuery = query.toLowerCase();
  return allTasks.filter((task) =>
    [task.id, task.title, task.description, task.priority].some((field) =>
      field.toLowerCase().includes(lowerQuery)
    )
  );
};
