import NavLeft from "../../components/NavigationLeft";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/logo.svg";

import "../../styles/home.css";

/**
 * This Function display a temporary user profile selection for testing the profil's page and the API calls
 * A  selection with 2 choices 
 * And redirecting to the right user profil's page
 * It also display a Left Navigation <NavLeft />
 */


function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <NavLeft />
        <div className="brandContainer">
          <h1 className="brandText">Bienvenue sur  <img src={HeaderLogo} alt="SportSee" className="headLogo" /> </h1>
          <h2>Choisi votre profil</h2>
          <Link className="btn" to="/user/12">
            <div>Profil 12</div>
          </Link>
          <Link className="btn" to="/user/18">
            <div>Profil 18</div>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Home;
