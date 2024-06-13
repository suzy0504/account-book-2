import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import QueryClintSetup from "./pages/QueryClientSetup.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <QueryClintSetup>
      <App />
    </QueryClintSetup>
  </>
);
