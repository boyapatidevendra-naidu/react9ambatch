import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import RouteData from "./routes/RouteData";
createRoot(document.getElementById("root")).render(
  <RouterProvider router={RouteData}>
    <App />
  </RouterProvider>,
);
