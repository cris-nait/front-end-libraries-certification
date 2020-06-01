import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./css/main.css";
import Footer from "./components/Footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
