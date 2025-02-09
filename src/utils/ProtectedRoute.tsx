import { useAppSelector } from "../store/hooks";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useAppSelector((state) => state.auth.user);
  const token = useAppSelector((state) => state.auth.token);

  return user && token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
