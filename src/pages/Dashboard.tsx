import { useEffect, useState } from "react";
import Sidebar from "./../components/Sidebar";
import TaskPanel from "./../components/TaskPanel";
import { setTasks, TaskState } from "../store/features/taskSlice";
import { useAppDispatch } from "../store/hooks";
import { useHttpClient } from "../hooks/HttpRequest";

const Dashboard = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const httpClient = useHttpClient();

  const fetchTasks = async () => {
    const data = await httpClient.get<TaskState>("/tasks");
    dispatch(setTasks(data));
    setIsDataLoaded(true);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (!isDataLoaded)
    return (
      <div className="h-full w-full bg-gray-700 flex justify-center items-center text-gray-400 text-2xl">
        <span>Loading...</span>
      </div>
    );
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <TaskPanel />
    </div>
  );
};

export default Dashboard;
