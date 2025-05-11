import { useAuthStore } from "@/store";
import { Navigate, Outlet } from "react-router";

export default function AuthLayout() {
  const { authUser } = useAuthStore();

  if (authUser) return <Navigate to={"/dashboard"} />;
  return <Outlet />;
}
