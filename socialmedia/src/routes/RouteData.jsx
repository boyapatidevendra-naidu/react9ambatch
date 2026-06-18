import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/auth/login/Login";
import Register from "../components/auth/register/Register";

let RouteData = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
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
