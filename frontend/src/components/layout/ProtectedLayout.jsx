import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedLayout() {
  const isAuthenticated = true; // temporaire

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
