import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";

window.onload = () => {
  ZOHO.CREATOR.init().then(() => {
    const initparams = ZOHO.CREATOR.UTIL.getInitParams();
    console.log("ZOHO.CREATOR.UTIL", initparams)

    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
};