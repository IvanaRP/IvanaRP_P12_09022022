import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/logo.svg";

import "../../styles/header.css";

/**
 * This function display the header of the website
 * @returns The different part of the header :
 * - the SportSee logo
 * - the component Navigation for displaying the different navigation's link
 */

function Header() {
  return (
    <div className="headContainer">
      <Link to="home">
        <img src={HeaderLogo} alt="SportSee" className="headLogo" />
      </Link>
      <nav className="navContainer">
        <Link to="/home" className="header-link">
          Accueil
        </Link>
        <Link to="/home" className="header-link">
          Profil
        </Link>
        <Link to="/settings" className="header-link">
          Réglage
        </Link>
        <Link to="/community" className="header-link">
          Communaute
        </Link>
      </nav>
    </div>
  );
}

export default Header;
