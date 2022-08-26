import React from "react";
import reactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";

reactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    , document.getElementById("root"));
