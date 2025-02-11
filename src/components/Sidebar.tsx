import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import Logo from "./Logo";
import SearchResult from "./SearchResult";
import { useAppSelector } from "../store/hooks";
import { selectFilteredTasks } from "../utils/filterTasks";
import { Task } from "../store/features/taskSlice";
const Sidebar = () => {
  const allTasks = useAppSelector((state) => state.tasks);
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (query === "") setTasks([]);
    else setTasks(selectFilteredTasks(allTasks, query));
  }, [query, allTasks]);

  return (
    <div className="sm:w-screen md:w-1/4 bg-gray-800 h-screen px-4 py-5">
      <div className="flex flex-col items-center space-y-2 h-full w-full">
        <Logo />
        <Searchbar query={query} setQuery={setQuery} />
        <SearchResult tasks={tasks} />
      </div>
    </div>
  );
};

export default Sidebar;
