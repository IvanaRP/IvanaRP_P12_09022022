import NavLeft from "../../components/NavigationLeft";
import GraphPoids from "../../components/GraphPoids";
import GraphObjectif from "../../components/Objectif";
import GraphRadar from "../../components/Radar";
import GraphKpi from "../../components/KPI";
import GraphCard from "../../components/GraphCard"



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
                  <GraphCard/> 
                  
                
              </div>
            
                            
      </div>
              


    </div>
 
 
  );
}

export default Profil;

