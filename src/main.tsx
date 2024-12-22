import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { UserAvatarProvider } from "./context/UserAvatarContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UserAvatarProvider>
      <App />
    </UserAvatarProvider>
  </BrowserRouter>,
);
