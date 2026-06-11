import { createRoot } from "react-dom/client";
import App from "./App";
import MessageProvider from "./context/MesgContext";
import NetworkProvider from "./context/NetworkProvider";
import ThemeProvider from "./context/ThemeContext";
import ProductProvider from "./context/ProductContext";

createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <ThemeProvider>
      <NetworkProvider>
        <MessageProvider>
          <App />
        </MessageProvider>
      </NetworkProvider>
    </ThemeProvider>
  </ProductProvider>,
);
