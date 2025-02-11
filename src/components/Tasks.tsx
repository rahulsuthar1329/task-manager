import TaskColumn from "./TaskColumn";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { moveTask } from "../store/features/taskSlice";

const Tasks = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const tasks = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();

  const onDrop = (status: string, position: number) => {
    if (!activeCard) return;

    const allTasks = [...tasks.completed, ...tasks.inprogress, ...tasks.onhold];

    const taskToMove = allTasks.find(
      (task) => task.id.toString() === activeCard
    );

    if (!taskToMove) return;

    console.log(
      `${activeCard} is going from ${taskToMove.status} to ${status} and at the position ${position}`
    );

    dispatch(moveTask({ id: taskToMove.id, newStatus: status, position }));
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
