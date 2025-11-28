import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import RootLayout from "../Layout/RootLayout";
import AllProducts from "../components/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: AllProducts,
      },
    ],
  },
]);

export default router;
