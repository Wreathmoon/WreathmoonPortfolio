// import ReactDOM from "react-dom";
// import App from "./App"
// import "./index.css"

// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react'

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);