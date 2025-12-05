import { Outlet } from "react-router";
import Header from "./Header";
import { Toaster } from "../ui/sonner";
import { useAuthUser } from "@/hooks/auth/useAuthUser";
import { useEffect } from "react";
import { useAuthStore } from "@/store";
import Loading from "../common/Loading";

export default function RootLayout() {
  const { authUser, isPending, isError } = useAuthUser();
  const setAuthUser = useAuthStore((s) => s.setAuthUser);

  useEffect(() => {
    if (authUser && !isPending && !isError) {
      setAuthUser(authUser);
    }
  }, [isPending, isError, authUser, setAuthUser]);

  if (isPending && !isError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Toaster richColors />
    </div>
  );
}
