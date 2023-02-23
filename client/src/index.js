import React from "react";
import ReactDOM from "react-dom";

import "styles/reset.css";
import "styles/layout.css";
import Home from "views/Home/Home";

/**
 * 
 * In a more complex system, React Router should be used to dynamically
 * include the relevant "view" component instead of just always using the
 * "Home" view component as it is below.
 * 
 **/

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
