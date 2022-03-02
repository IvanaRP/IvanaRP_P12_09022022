import NavLeft from "../../components/NavigationLeft";
// import GraphPoids from "../../components/GraphPoids";
// import GraphObjectif from "../../components/Objectif";
// import GraphRadar from "../../components/Radar";
// import GraphKpi from "../../components/KPI";
// import GraphCard from "../../components/GraphCard"
// import useFetchApi  from "../../utils/useFetchApi/useFetchApi";

import "../../styles/profil.css";

function Profil() {


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
