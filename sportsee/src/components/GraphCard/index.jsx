import CaloriesIcon from "../../assets/calories-icon.svg";
import ProteinesIcon from "../../assets/protein-icon.svg";
import CarbIcon from "../../assets/carbs-icon.svg";
import FatIcon from "../../assets/fat-icon.svg";

import "../../styles/graphCard.css";
 import dataUsers from "../../datas/USER_MAIN_DATA";
 console.log(dataUsers);


 

function GraphCard() {
    return (
        <div className="graphContainerRight">
        <div className="graphCalories">
          <div className="caloriesIcon">
            <img src={CaloriesIcon} alt="SportSee"  />
          </div>
          <div className="caloriesInfo">
            <h2>22002kc</h2>
            <h3>Calories</h3>
          </div>
        </div>
        <div className="graphCalories">
          <div className="caloriesIcon">
            <img src={ProteinesIcon} alt="SportSee"  />
          </div>
          <div className="caloriesInfo">
            <h2>1,930kc</h2>
            <h3>Calories</h3>
          </div>
        </div>
        <div className="graphCalories">
          <div className="caloriesIcon">
            <img src={CarbIcon} alt="SportSee"  />
          </div>
          <div className="caloriesInfo">
            <h2>1,930kc</h2>
            <h3>Calories</h3>
          </div>
        </div>
        <div className="graphCalories">
          <div className="caloriesIcon">
            <img src={FatIcon} alt="SportSee"  />
          </div>
          <div className="caloriesInfo">
            <h2>1,930kc</h2>
            <h3>Calories</h3>
          </div>
        </div>
        </div>
    );
  }
  
  export default GraphCard;