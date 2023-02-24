import React from "react";
import { Link } from "react-router-dom";
import NavLeft from "../../components/NavigationLeft";

import "../../styles/profil.css";

/**
 * This function display the page in construction
 * Link towards home page
 */

function Communaute() {
  return (
    <div className="profilWrapper">
      <NavLeft />
      <div className="profilContainer">
        <div className="profilUser">
          <h1>🏗️ Page en construction</h1>
          <Link to="/home" className="home-link">
            Retourner sur la page d’accueil !
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Communaute;
