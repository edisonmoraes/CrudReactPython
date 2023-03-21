import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App.js";
import "./styles.css";

//ReactDOM.render(<App />, document.getElementById("root"));
const root = createRoot(document.getElementById("root"));
root.render(<App />);
