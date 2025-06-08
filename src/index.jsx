import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from "react";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
