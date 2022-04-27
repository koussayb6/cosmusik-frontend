import React from "react";
import ReactDOM from "react-dom";

import "./main.scss";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { App } from "./App";
import { ToastContainer } from "react-toastify";
import Allchats from "./pages/Allchats";
import Groups from "./pages/Groups";

function Root() {
  return (
    <>
      <Router basename={"/"}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/chat" element={<Allchats />} />
          <Route exact path="/groups" element={<Groups />} />

          <Route exact path="*" element={<App />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
