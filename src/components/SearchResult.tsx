import { Task as TaskType } from "../store/features/taskSlice";
import Task from "./Task";

interface SearchResultType {
  tasks: TaskType[];
}

const SearchResult: React.FC<SearchResultType> = ({ tasks }) => {
  return (
    <div className="task-container flex flex-col w-full bg-gray-800 py-2 justify-start items-center h-[calc(100vh-100px)] p-2 overflow-auto">
      {tasks.length ? (
        <div className="w-full flex flex-col gap-2">
          {tasks.map((task) => (
            <div key={task.id.toString()} className="snap-start">
              <Task
                id={task.id.toString()}
                title={task.title}
                priority={task.priority}
                category={task.category}
                remainingDays={task.remainingDays.toString()}
                description={task.description}
                status={task.status}
              />
            </div>
          ))}
        </div>
      ) : (
        <span className="text-gray-600 text-sm">
          Search with task ID, title, description and priority.
        </span>
      )}
    </div>
  );
};

export default SearchResult;
