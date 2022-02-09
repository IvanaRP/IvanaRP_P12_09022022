import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headContainer">
      <Link to="/">header LOGO</Link>
      <nav className="navContainer">
        <Link to="/" className="header-link">
          Accueil
        </Link>
        <Link to="/profil" className="header-link">
          Profil
        </Link>
        <Link to="/settings" className="header-link">
          Reglage
        </Link>
        <Link to="/community" className="header-link">
          Communaute
        </Link>
      </nav>
    </div>
  );
}

export default Header;
