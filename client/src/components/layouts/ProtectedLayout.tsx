import { useAuthStore } from "@/store";
import { Navigate, Outlet } from "react-router";

export default function ProtectedLayout() {
  const { authUser } = useAuthStore();

  if (!authUser) return <Navigate to={"/sign-in"} />;
  return <Outlet />;
}
