import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//reduction
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import balanceReducer from "./reducers/balanceReducer";
import loanReducer from "./reducers/loanReducer";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({ balanceReducer, loanReducer }),
  applyMiddleware(thunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
