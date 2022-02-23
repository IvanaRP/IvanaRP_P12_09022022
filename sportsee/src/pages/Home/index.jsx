import NavLeft from "../../components/NavigationLeft";
import { Link } from "react-router-dom";

import   PassParam from "../Profil/parFetch";

import "../../styles/home.css";
// import MyComponent from "../../utils/useFetchApi/useFetchId";

console.log(PassParam);

function Home() {

  const { data,  error } = PassParam

  const idUser = data?.idUser 

  if (error) {
      return <span>Oups il y a eu un problème</span>
  }  

  return (

    <div className="homeWrapper">
        <div className="homeContainer">
          <NavLeft  idUser={idUser}     />
          <div className="brandContainer">
          {/* <h1>Bienvenue sur SportSee!</h1>
              <h2>Bonjour, sélectionnez un profil!</h2>
              { isLoading  ? (
                      <div>Chargement en cours...</div>
              ) : (    
                  <div className="cardWrapper">                 */}
                      {/* {users && users.map((user, index)=>                        
                          <div className="cardUser">
                              <div>
                                  <Link key={`${user.id}-${index}`} to={`/Profile/${user.id}`} className="linkUser">
                                                                  
                                  </Link> 
                                  <h2>{user.firstName} {user.lastName}</h2>
                              </div>                                
                          </div>
                      )} */}
                  {/* </div>                    
              )} */}
          </div>
        </div>
    </div>
  )
}




// import NavLeft from "../../components/NavigationLeft";
// import { Link } from "react-router-dom";
// import ManIcon from "../../assets/man_icon.svg";
// import WomanIcon from "../../assets/woman_icon.svg";

// import dataUsers from "../../datas/home.json";

// import "../../styles/home.css";
// import MyComponent from "../../utils/useFetchApi/useFetchId";

// console.log(MyComponent);

// function Home() {

//   const { data, isLoading, error } = dataUsers

//   const users = data?.users 

//   if (error) {
//       return <span>Oups il y a eu un problème</span>
//   }  

//   return (

//     <div className="homeWrapper">
//         <div className="homeContainer">
//           <NavLeft />
//           <div className="brandContainer">
//           <h1>Bienvenue sur SportSee!</h1>
//               <h2>Bonjour, sélectionnez un profil!</h2>
//               { isLoading  ? (
//                       <div>Chargement en cours...</div>
//               ) : (    
//                   <div className="cardWrapper">                
//                       {users && users.map((user, index)=>                        
//                           <div className="cardUser">
//                               <div>
//                                   <Link key={`${user.id}-${index}`} to={`/Profile/${user.id}`} className="linkUser">
//                                       <img src={user.gender==="W" ? WomanIcon : ManIcon } alt="Profil avatar" />                                   
//                                   </Link> 
//                                   <h2>{user.firstName} {user.lastName}</h2>
//                               </div>                                
//                           </div>
//                       )}
//                   </div>                    
//               )}
//           </div>
//         </div>
//     </div>
//   )
// }



// function Home() {
//   return (
//     <div className="homeWrapper">
//       <div className="homeContainer">
//         <NavLeft />
//         <div className="brandContainer">
//           <h1>Bonjour, sélectionnez un profil!</h1>
//           <Link to="/" className="navLeft-link">
//             <img src={ManIcon} alt="SportSee" className="manIcon" />
//           </Link>
//           <Link to="/" className="navLeft-link">
//             <img src={WomanIcon} alt="SportSee" className="womanIcon" />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Home;
