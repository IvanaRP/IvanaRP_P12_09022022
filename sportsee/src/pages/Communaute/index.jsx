import React  from "react";
// import useFetch from "../../Util/customHook/useFetch";
import { useState, useEffect } from "react";


function Communaute() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setDatas] = useState([]);

  // Remarque : le tableau vide de dépendances [] indique
  // que useEffect ne s’exécutera qu’une fois, un peu comme
  // componentDidMount()
  useEffect(() => {
    fetch("http://localhost:3000/user/12/perfomance")
      .then(response => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDatas(result.data);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.id} 
          </li>
        ))}
      </ul>
    );
  }
}

export default Communaute;
