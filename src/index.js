import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";
import App from "./App";
import InlineStyleComponent from "./script";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <>
    <InlineStyleComponent />
    <Provider store={store}>
      <Router basename='/'>
        <App />
      </Router>
    </Provider>
  </>
  //</React.StrictMode>
);
