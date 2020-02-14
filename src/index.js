import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
// import "bootstrap/dist/css/bootstrap.min.css";

const data = {
  company: "Vebkomas",
  created: new Date()
};

ReactDOM.render(<App data={data} />, document.getElementById("app"));
