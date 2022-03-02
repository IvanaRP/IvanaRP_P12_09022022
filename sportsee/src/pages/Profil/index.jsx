import NavLeft from "../../components/NavigationLeft";
// import GraphPoids from "../../components/GraphPoids";
// import GraphObjectif from "../../components/Objectif";
// import GraphRadar from "../../components/Radar";
// import GraphKpi from "../../components/KPI";
// import GraphCard from "../../components/GraphCard"
// import useFetchApi  from "../../utils/useFetchApi/useFetchApi";

import "../../styles/profil.css";

// import DATA from fetch
// import FetchData  from "../../fetchData/fetchData";
// import useParams to match the parameter from home page
import { useParams } from "react-router-dom";


function Profil() {
  const param = useParams();
  const userId = param.id;

console.log(userId);

  return (
    <div className="profilWrapper">
      <NavLeft />
      <div className="profilContainer">
        <div className="profilUser">
          <h1>
            Bonjour <span className="userName">username</span>
          </h1>
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
      </div>
    </div>
  );
}

export default Profil;
