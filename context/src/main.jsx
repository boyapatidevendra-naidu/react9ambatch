import { createRoot } from "react-dom/client";
import App from "./App";
import MessageProvider from "./context/MesgContext";
import NetworkProvider from "./context/NetworkProvider";

createRoot(document.getElementById("root")).render(
  <NetworkProvider>
    <MessageProvider>
      <App />
    </MessageProvider>
  </NetworkProvider>,
);
