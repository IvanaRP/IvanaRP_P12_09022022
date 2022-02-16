// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import dataUsers from "../../datas/home.json";

import ManIcon from "../../assets/man_icon.svg";
import WomanIcon from "../../assets/woman_icon.svg";

function Settings() {

  const { data, isLoading, error } = dataUsers

  const users = data?.users 

  if (error) {
      return <span>Oups il y a eu un problème</span>
  }  

  return (

      <div className="homeWrapper">
          <div className="homeContainer">
              <h1>Bonjour, sélectionnez un profil!</h1>
              { isLoading  ? (
                      <div>Chargement en cours...</div>
              ) : (    
                  <div className="cardWrapper">                
                      {users && users.map((user, index)=>                        
                          <div className="cardUser">
                              <div>
                                  <Link key={`${user.id}-${index}`} to={`/Profile/${user.id}`} className="linkUser">
                                      <img src={user.gender==="W" ? WomanIcon : ManIcon } alt="Profil avatar" />                                   
                                  </Link> 
                                  <h2>{user.firstName} {user.lastName}</h2>
                              </div>                                
                          </div>
                      )}
                  </div>                    
              )}
          </div>
      </div>
  )
}

export default Settings; 


// function Settings() {
//   const idUser  = useParams()
// console.log(idUser)


//   const dataUser = dataUsers
//   const users = dataUsers?.users 

// console.log(dataUser)

// // const users = dataUsers
//   return (
//     <div className="cardWrapper">                
//     {users && users.map((user, index)=>                        
//         <div className="cardUser">
//             <div key={`${user.id}-${index}`}>
//                 <Link key={`${user.id}-${index}`} to={`/Profile/${user.id}`} className="linkUser">
//                     blah                                 
//                 </Link> 
//                 <h2>{user.firstName} {user.lastName}</h2>
//             </div>                                
//         </div>
//     )}
// </div>    
//   );
// }

// function Settings() {

//   const myLocation = dataUsers;

//   return (
//     <div className="locationWrapper">
//       {myLocation &&
//         myLocation.map((location, index) => (
//           <div key={`${location.id}-${index}`} className="locationContainer">

//             <div className="location-header">
//               <div className="location-header-info">
//                 <h1>{location.id}</h1>
//                 <h1>{location.todayScore}</h1>
//               </div>
//             </div>

//           </div>
//         ))}
//     </div>
//   );

// }

// export default Settings;
