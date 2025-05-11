import { createBrowserRouter } from "react-router";
import RootLayout from "@/components/layouts/RootLayout";
import HomePage from "@/pages/Home";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
