import { Link } from "react-router-dom";

import YogaIcon from "../../assets/yoga_icon.svg";
import SwimIcon from "../../assets/swim_icon.svg";
import BikeIcon from "../../assets/bike_icon.svg";
import GymIcon from "../../assets/gym_icon.svg";

import "../../styles/navigationLeft.css";


function NavLeft() {
  return (
    <div className="navigationLeftContainer">
      <nav className="navLeftContainer">
        <Link to="/" className="navLeft-link">
        <img src={YogaIcon} alt="SportSee" className="navLeftIcon" />
        </Link>
        <Link to="/" className="navLeft-link">
        <img src={SwimIcon} alt="SportSee" className="navLeftIcon" />
        </Link>
        <Link to="/" className="navLeft-link">
        <img src={BikeIcon} alt="SportSee" className="navLeftIcon" />
        </Link>
        <Link to="/" className="navLeft-link">
        <img src={GymIcon} alt="SportSee" className="navLeftIcon" />
        </Link>
      </nav>
      <Link to="/">
      <h3 className="navLeft-copy">Copyright, SportSee 2020</h3>
      </Link>
    </div>
  );
}

export default NavLeft;
