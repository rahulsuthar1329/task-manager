import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
import ToastComponent from "./components/ToastComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastComponent />
    </Router>
  );
}

export default App;
