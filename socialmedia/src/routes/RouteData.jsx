import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";
import HomePage from "../components/homepage/HomePage";

let RouteData = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);
export default RouteData;
