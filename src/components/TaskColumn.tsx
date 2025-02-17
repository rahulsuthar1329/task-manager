import { Fragment, Dispatch, FC, SetStateAction } from "react";
import Task from "./Task";
import DropArea from "./DropArea";

interface Task {
  id: string;
  title: string;
  description: string;
  remainingDays: number;
  priority: string;
  category: string;
  status: string;
}

interface TaskSectionProps {
  label: string;
  tasks: Task[];
  status: string;
  setActiveCard: Dispatch<SetStateAction<string | null>>;
  onDrop: (status: string, position: number) => void;
}

const TaskColumn: FC<TaskSectionProps> = ({
  label,
  tasks,
  status,
  setActiveCard,
  onDrop,
}) => {
  return (
    <div className="w-1/3 px-2">
      <h4 className="pl-2">
        {label} ({tasks?.length})
      </h4>
      <article className="task-container flex flex-col max-h-full h-[83vh] overflow-y-auto px-2 mt-2">
        <DropArea onDrop={() => onDrop(status, 0)} />
        {tasks?.map((task, index) => (
          <Fragment key={task.id}>
            <Task
              id={task.id.toString()}
              title={task.title}
              priority={task.priority}
              category={task.category}
              remainingDays={task.remainingDays.toString()}
              description={task.description}
              status={task.status}
              setActiveCard={setActiveCard}
            />
            <DropArea onDrop={() => onDrop(status, index + 1)} />
          </Fragment>
        ))}
      </article>
    </div>
  );
};

export default TaskColumn;
