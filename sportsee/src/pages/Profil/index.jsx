import NavLeft from "../../components/NavigationLeft";
import GraphPoids from "../../components/GraphPoids";
import GraphObjectif from "../../components/Objectif";
import GraphRadar from "../../components/Radar";
import GraphKpi from "../../components/KPI";

import CaloriesIcon from "../../assets/calories-icon.svg";
import ProteinesIcon from "../../assets/protein-icon.svg";
import CarbIcon from "../../assets/carbs-icon.svg";
import FatIcon from "../../assets/fat-icon.svg";


import dataUsers from "../../datas/USER_MAIN_DATA";
import "../../styles/profil.css";

console.log(dataUsers);



function Profil() {
  return (
    <div className="profilWrapper">
       <NavLeft />
      <div className="profilContainer">
              <div className="profilUser">
                      <h1>
                        Bonjour <span className="userName">USERNAME</span>
                        </h1>
                        <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
              </div>
              <div className="graphWrapper">
                  <div className="graphContainerLeft">
                    <GraphPoids/>
                    <div className="graphContainer">
                    <GraphObjectif/> 
                    <GraphRadar/> 
                    <GraphKpi/>   
                    </div>
                  </div>
                  <div className="graphContainerRight">
                  <div className="graphCalories">
                    <div className="caloriesIcon">
                      <img src={CaloriesIcon} alt="SportSee"  />
                    </div>
                    <div className="caloriesInfo">
                      <h2>1,930kc</h2>
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
              </div>
            
                            
      </div>
              


    </div>
 
 
  );
}

export default Profil;

// {/* function Profil() {
//   return (
//     <div className="homeWrapper">
//       <div className="homeContainer">
//         <NavLeft />
//         <div className="brandContainer">
//             {dataUsers.map((datauser) => {
//                 return (
//                   <div>

//                 </div>
//                 );
//               }
//         </div>
//       </div>
//     </div>

//   );
// } */}
// {/*
// //  <div>

// {/* <h1>
// Bonjour <span className="userName">USERNAme</span>
// </h1>
// <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
// </div> */}
// <div>
// OBJECTIFS
// </div>
// <div>
// RADAR
// </div>
// <div>
// KPI
// </div>