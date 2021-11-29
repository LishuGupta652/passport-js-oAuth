import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BlogProvider } from "./contextapi/BlogProvider";

ReactDOM.render(
  <BlogProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BlogProvider>,
  document.getElementById("root")
);
