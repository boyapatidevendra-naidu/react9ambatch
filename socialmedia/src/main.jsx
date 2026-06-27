import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import RouteData from "./routes/RouteData";
import AuthProvider from "./context/AuthContext";
import PostProvider from "./context/PostContext";
createRoot(document.getElementById("root")).render(
  <PostProvider>
    <AuthProvider>
      <RouterProvider router={RouteData}>
        <App />
      </RouterProvider>
    </AuthProvider>
  </PostProvider>,
);
