// import React from "react";


// class useFetch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("http://localhost:3000/user/12")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.items
//           });
//         },
//         // Remarque : il est important de traiter les erreurs ici
//         // au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
//         // des exceptions provenant de réels bugs du composant.
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Erreur : {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Chargement…</div>;
//     } else {
//       return (
//         <ul>
//           {items.map(item => (
//             <li key={item.name}>
//               {item.name} {item.price}
//             </li>
//           ))}
//         </ul>
//       );
//     }
//   }
// }
// export default useFetch;

import  { useState, useEffect } from 'react';

export const useFetch = () => {

  const url = "http://localhost:3000/user/12";

  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  const getDatas = async () => {
    const response = await fetch(url);
    const datas = await response.json();
    setDatas(datas.json);
    setLoading(false);
  };

  useEffect(() => {
    getDatas();
  }, [url]);

  return { loading, datas };
};