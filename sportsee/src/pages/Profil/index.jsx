// nabvigation left
import NavLeft from "../../components/NavigationLeft";

// import keydata
import KeyData from "../../components/KeyData";
// import img for keydata
import CaloriesIcon from "../../assets/calories-icon.svg";
import ProteinesIcon from "../../assets/protein-icon.svg";
import CarbIcon from "../../assets/carbs-icon.svg";
import FatIcon from "../../assets/fat-icon.svg";


// import GRAPHS as component
import GraphKpiScore from "../../components/GraphsRecharcts/KPIScore";
import GraphPoids from "../../components/GraphsRecharcts/GraphPoids";
import GraphRadar from "../../components/GraphsRecharcts/Radar";


// import GraphObjectif from "../../components/Objectif";


// import GraphCard from "../../components/GraphCard"

import "../../styles/profil.css";

// import DATA from fetch
import FetchData from "../../fetchData/fetchData";
// import useParams to match the parameter from home page
import { useParams } from "react-router-dom";
// import useEffect and useState
import { useEffect, useState } from "react";

function Profil() {
  const param = useParams();
  const userId = param.id;
  console.log(userId);

  // constant user and activity
  const [user, setUser] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  
  console.log(user);
  console.log(userActivity);
  console.log(userAverageSessions);

  // useEffect
  useEffect(getAllData, [userId]);
  
  // get data form api
  function getAllData() {
    const datas = new FetchData();
    datas.getInfo(userId).then((data) => setUser(data));
    datas.getActivity(userId).then((data) => setUserActivity(data));
    datas.getAverageSessions(userId).then((data) => setUserAverageSessions(data));
  }

  return (
    <div className="profilWrapper">
      <NavLeft />
      <div className="profilContainer">
        <div className="profilUser">
          <h1>
            Bonjour{" "}
            <span className="userName">{user?.userInfos?.firstName}</span>
          </h1>
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
        <GraphPoids data={userActivity?.sessions}/>
        <GraphKpiScore data={user?.todayScore}/>
        <GraphRadar />
        <div className="keyDataWrapper">
          <KeyData
            image={CaloriesIcon}
            title="Calories" value={user?.keyData?.calorieCount}
            unit="kCal"
          />
             <KeyData
            image={ProteinesIcon}
            title="Proteines" value={user?.keyData?.proteinCount}
            unit="g"
          />
             <KeyData
            image={CarbIcon}
            title="Glucides" value={user?.keyData?.carbohydrateCount}
            unit="g"
          />
             <KeyData
            image={FatIcon}
            title="Lipides" value={user?.keyData?.lipidCount}
            unit="g"
          />
        </div>
      </div>
    </div>
  );
}

export default Profil;
