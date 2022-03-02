import NavLeft from "../../components/NavigationLeft";
// import GraphPoids from "../../components/GraphPoids";
// import GraphObjectif from "../../components/Objectif";
// import GraphRadar from "../../components/Radar";
// import GraphKpi from "../../components/KPI";
// import GraphCard from "../../components/GraphCard"
// import useFetchApi  from "../../utils/useFetchApi/useFetchApi";

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
  console.log(user);

  // useEffect
  useEffect(getAllData, [userId]);
  // get data form api
  function getAllData() {
    const datas = new FetchData();
    datas.getInfo(userId).then((data) => setUser(data));
  }



  return (
    <div className="profilWrapper">
      <NavLeft />
      <div className="profilContainer">
        <div className="profilUser">
          <h1>
            Bonjour <span className="userName">{user?.userInfos?.firstName}</span>
          </h1>
          <p>Félicitation! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
      </div>
    </div>
  );
}

export default Profil;
