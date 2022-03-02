import NavLeft from "../../components/NavigationLeft";
import { Link } from "react-router-dom";
// import ManIcon from "../../assets/man_icon.svg";
// import WomanIcon from "../../assets/woman_icon.svg";

import "../../styles/home.css";

function Home() {
  return (
    <div className="homeWrapper">
      <div className="homeContainer">
        <NavLeft />
        <div className="brandContainer">
          <h1>Bienvenue sur SportSee!</h1>
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

// function Home() {
//   return (
//     <div className="homeWrapper">
//       <div className="homeContainer">
//         <NavLeft />
//         <div className="brandContainer">
//           <h1>Bonjour, sélectionnez un profil!</h1>
//           <Link to="/" className="navLeft-link">
//             <img src={ManIcon} alt="SportSee" className="manIcon" />
//           </Link>
//           <Link to="/" className="navLeft-link">
//             <img src={WomanIcon} alt="SportSee" className="womanIcon" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Home;
