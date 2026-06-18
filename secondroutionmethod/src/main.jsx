import { createRoot } from "react-dom/client";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/route";
import ProductProvider from "./context/ProductContext";
createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </ProductProvider>,
);
