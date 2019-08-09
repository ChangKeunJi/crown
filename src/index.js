import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// Simply Component which wrap around App Component
//

import "./index.css";
import App from "./App";

ReactDOM.render(
  // By Wrapping around, App has access to all the functionality
  // Provided by React Router.
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
