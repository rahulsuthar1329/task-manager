import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./utils/ProtectedRoute";
import { useAppDispatch } from "./store/hooks";
import { useEffect, useState } from "react";
import tasks from "./data/sampleTasks";
import { setTasks } from "./store/features/taskSlice";

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
    setIsDataLoaded(true);
  }, []);

  if (!isDataLoaded)
    return (
      <div className="h-full w-full bg-gray-700 flex justify-center items-center text-gray-400 text-2xl">
        <span>Loading...</span>
      </div>
    );
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<ProtectedRoute />}></Route> */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
