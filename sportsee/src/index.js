import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Profil from "./pages/Profil";
import Setting from "./pages/Settings";
import Communaute from "./pages/Communaute";
import Api from "./pages/Api";

import Header from "./components/Header";

import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/profil" element={<Profil/>}/>
          <Route exact path="/settings" element={<Setting/>}/>
          <Route exact path="/community" element={<Communaute/>}/>
          <Route exact path="/componentapi" element={<Api/>}/>

          <Route path="*" element={<Error/>}/>
   
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
