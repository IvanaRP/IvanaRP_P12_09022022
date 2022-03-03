import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/logo.svg";

import "../../styles/header.css";


function Header() {
  return (
    <div className="headContainer">
      <Link to="/">
      <img src={HeaderLogo} alt="SportSee" className="headLogo" />
      </Link>
      <nav className="navContainer">
        <Link to="/" className="header-link">
          Accueil
        </Link>
        <Link to="/" className="header-link">
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
