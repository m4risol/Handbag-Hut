import React from "react";
import ReactDOM from "react-dom";
import App from "@components/app";
import { Provider } from "react-redux";
import store from "@store";
import './scss/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
