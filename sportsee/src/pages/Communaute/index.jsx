import React from "react";
import { Link } from "react-router-dom";
import NavLeft from "../../components/NavigationLeft";


import "../../styles/profil.css";

function Communaute() {
  return (
    <div className="profilWrapper">
      <NavLeft />
      <div className="profilContainer">
        <div className="profilUser">
          <h1>page en construction</h1>
          <Link to="/" className="home-link">
            Retourner sur la page d’accueil!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Communaute;
