import TaskColumn from "./TaskColumn";
import tasks from "../data/sampleTasks";
import { useState } from "react";

const Tasks = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const onDrop = (status: string, position: number) => {
    if (!activeCard) return;

    const allTasks = [...tasks.completed, ...tasks.inprogress, ...tasks.onhold];

    const taskToMove = allTasks.find(
      (task) => task.taskId.toString() === activeCard
    );

    if (!taskToMove) return;

    console.log(
      `${activeCard} is going from ${taskToMove.status} to ${status} and at the position ${position}`
    );

    const statusKey = taskToMove?.status as keyof typeof tasks;
    tasks[statusKey] = tasks[statusKey].filter(
      (task) => task.taskId !== taskToMove?.taskId
    );

    taskToMove.status = status;

    tasks[status as keyof typeof tasks].splice(position, 0, taskToMove);
  };

  return (
    <div className="flex w-full justify-between px-4 space-x-5 text-[#f1f1f1] mt-5">
      <TaskColumn
        label="In Progress"
        tasks={tasks.inprogress}
        setActiveCard={setActiveCard}
        status={"inprogress"}
        onDrop={onDrop}
      />
      <TaskColumn
        label="On Hold"
        tasks={tasks.onhold}
        setActiveCard={setActiveCard}
        status={"onhold"}
        onDrop={onDrop}
      />
      <TaskColumn
        label="Completed"
        tasks={tasks.completed}
        setActiveCard={setActiveCard}
        status={"completed"}
        onDrop={onDrop}
      />
    </div>
  );
};

export default Tasks;
