import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/produk-kami",
      element: <Products />,
    },
  ]);
}
