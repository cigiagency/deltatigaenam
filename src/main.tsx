import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// The initial loading is now handled by index.html
// We just need to render the App component
createRoot(document.getElementById("root")!).render(<App />);
