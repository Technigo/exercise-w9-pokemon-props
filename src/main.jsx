import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // idk if was a mistake but there were curly brackets around App and i was having a error so I removed it
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
