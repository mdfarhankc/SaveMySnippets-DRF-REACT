import { Outlet } from "react-router";
import Header from "./Header";
import { Toaster } from "../ui/sonner";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Toaster richColors />
    </div>
  );
}
