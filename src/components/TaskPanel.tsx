import Filters from "./Filters";
import Tasks from "./Tasks";
const TaskPanel = () => {
  return (
    <div className="w-full h-screen">
      <Filters />
      <Tasks />
    </div>
  );
};

export default TaskPanel;
