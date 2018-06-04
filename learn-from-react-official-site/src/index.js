import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Welcome from "./Welcome";
function tick() {
  ReactDOM.render(<Welcome name="Xiaoxi" />, document.getElementById("root"));
}

setInterval(tick, 500);
registerServiceWorker();
