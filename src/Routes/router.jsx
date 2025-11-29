import { createBrowserRouter } from "react-router";
import Home from "../components/Home/Home";
import RootLayout from "../Layout/RootLayout";
import AllProducts from "../components/AllProducts/AllProducts";
import Login from "../Pages/Login/Login";
import RegisterPage from "../Pages/Register/RegisterPage";
import MyProducts from "../Pages/MyProducts/MyProducts";
import MyBids from "../Pages/MyBids/MyBids";
import PrivateRoute from "../Private/PrivateRoute";

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
      {
        path: "myProducts",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>,
          </PrivateRoute>
        ),
      },
      {
        path: "myBids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "register",
    Component: RegisterPage,
  },
  {
    path: "login",
    Component: Login,
  },
]);

export default router;
