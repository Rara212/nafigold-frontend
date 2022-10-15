import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import PurchaseForm from "./sections/@product/Form/purchaseform";
import Productdetails from "./sections/@product/productdetails";

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
    {
      path: "/productdetails",
      element: <Productdetails/>,
    },
    {
      path: "/purchaseform",
      element: <PurchaseForm/>,
    },
  ]);
}
