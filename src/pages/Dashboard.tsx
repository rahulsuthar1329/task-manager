import Sidebar from "./../components/Sidebar";
import TaskPanel from "./../components/TaskPanel";
const Dashboard = () => {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      <TaskPanel />
    </div>
  );
};

export default Dashboard;
