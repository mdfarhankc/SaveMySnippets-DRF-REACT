import { createBrowserRouter } from "react-router";
import RootLayout from "@/components/layouts/RootLayout";
import HomePage from "@/pages/Home";
import AuthLayout from "@/components/layouts/AuthLayout";
import LoginPage from "@/pages/(auth)/Login";
import RegisterPage from "@/pages/(auth)/Register";
import ProtectedLayout from "@/components/layouts/ProtectedLayout";
import DashboardPage from "@/pages/(main)/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // Home
      {
        index: true,
        element: <HomePage />,
      },
      //   Auth Pages
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/sign-in",
            element: <LoginPage />,
          },
          {
            path: "/sign-up",
            element: <RegisterPage />,
          },
        ],
      },
      //   Protected Pages
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);
