import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Route_Home, Route_Profil, Route_Settings, Route_Communaute } from "./Utils/router"

import Home from "./pages/Home";
import Error from "./components/Error";
import Profil from "./pages/Profil";
import Setting from "./pages/Settings";
import Communaute from "./pages/Communaute";

import Header from "./components/Header";

import "./styles/index.css";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path={Route_Home} element={<Home />} />
        <Route exact path={Route_Profil} element={<Profil />} />
        <Route exact path={Route_Settings} element={<Setting />} />
        <Route exact path={Route_Communaute} element={<Communaute />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
