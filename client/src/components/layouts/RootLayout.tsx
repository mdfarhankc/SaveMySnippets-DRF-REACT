import { Outlet } from "react-router";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Outlet />
      <Footer />
    </div>
  );
}
