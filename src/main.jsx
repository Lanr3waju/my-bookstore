import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import store from "./redux/configureStore";
import StoreContext from "./redux/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider context={StoreContext} store={store()}>
    <App />
  </Provider>

);
