import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const isAuthenticated = true; // temporary, use the one below later on
  // const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
