import React from "react";
import { login } from "@/service/login";
import store from "@/store";
import { storageLogin } from "@/store/login";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";

const rootRender = () => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

window.onload = () => {
  if (process.env.NODE_ENV === "development") {
    login()
      .then((res) => {
        console.log(res);
        store.dispatch(
          storageLogin({ token: "Zoho-oauthtoken " + res.data.access_token })
        );

        rootRender();
      })
      .catch((err) => {
        console.log(err);
      });
  } else if (process.env.NODE_ENV === "production") {
    ZOHO.CREATOR.init().then(() => {
      rootRender();
    });
  }
};
