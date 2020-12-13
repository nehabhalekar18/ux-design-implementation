import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ShelfContainer from "./components/ShelfContainer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import configureStore from "./store";
ReactDOM.render(
  <Provider store={configureStore()}>
    <ShelfContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
