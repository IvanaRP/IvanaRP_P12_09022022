import React from "react";
import { Link } from "react-router-dom";
import "../../styles/error.css";

import NavLeft from "../../components/NavigationLeft";

function Error() {
  return (
    <div className="errorWrapper">
      <NavLeft />
      <div className="errorContainer">
        <div className="errorUser">
          <h1 className="error404">404</h1>
          <h2 className="error-message">
            Oups! La page que vous demandez n'existe pas.
          </h2>
          <Link to="/" className="home-link">
            Retourner sur la page d’accueil!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error;
