import GetData from "../../utils/fetchApi";

// import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function Settings() {

  console.log({id});
    console.log(userId);
    const [user, updateUser] = useState({});
   
    useEffect(getAllData, [userId]);
  
    /**
     * @description gets all the data from mocked data or API
     */
  
    function getAllData() {
      const datas = new GetData();
  
      datas.getInfo(userId).then((data) => updateUser(data));
      
    }
  

  return (

      <div className="homeWrapper">
   userName={user?.userInfos?.firstName}
        
      </div>
  )
}

export default Settings; 

// import { useParams } from "react-router-dom";
// import { useFetchApi } from "../../utils/useFetchApi/useFetchApi";



// function Settings() {

//     const { idUser } = useParams()
//     const { error } = useFetchApi(idUser,'')

//   if (error) {
//       return <span>Oups il y a eu un problème</span>
//   }  

//   return (

//       <div className="homeWrapper">
//           idUser={idUser}
        
//       </div>
//   )
// }

// export default Settings; 








// import { useState, useEffect } from "react";

// const API_SERVER = 'http://localhost:3000/';



// const useFetchApi = () => {
//     const [dataUser, setDataUser] = useState([]);

//     useEffect(() => {
//         // const url = "https://api.adviceslip.com/advice";

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(API_SERVER);
//                 const json = await response.json();
//                 console.log(json);
//                 setDataUser(json);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);

//     return {dataUser}
// };

// export default useFetchApi;

// import axios from "axios";
// import React from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export default function useAPI() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }






// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import dataUsers from "../../datas/home.json";

// import ManIcon from "../../assets/man_icon.svg";
// import WomanIcon from "../../assets/woman_icon.svg";

// function Settings() {

//   const { data, isLoading, error } = dataUsers

//   const users = data?.users 

//   if (error) {
//       return <span>Oups il y a eu un problème</span>
//   }  

//   return (

//       <div className="homeWrapper">
//           <div className="homeContainer">
//               <h1>Bonjour, sélectionnez un profil!</h1>
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
//       </div>
//   )
// }

// export default Settings; 


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
