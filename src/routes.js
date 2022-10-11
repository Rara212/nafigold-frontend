import { useRoutes } from "react-router-dom";
import DashboardLayout from "./layout/dashboard";
import Home from "./pages/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
    },
  ]);
}
