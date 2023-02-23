import React from "react";
import ReactDOM from "react-dom";

import "styles/reset.css";
import "styles/layout.css";
import Home from "views/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
