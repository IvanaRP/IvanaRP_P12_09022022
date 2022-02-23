// import React from "react";
// import { useState, useEffect } from "react";

// function Dog() {
//   let [data, setData] = useState(null);

//   // 3. Create out useEffect function
//   useEffect(() => {
//     fetch(`http://localhost:3000/user/${id}`)
//       .then((response) => response.json())
//       // 4. Setting *dogImage* to the image url that we received from the response above
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <ul>
//           {data.map(dat => (
//             <li key={dat.userID}>
//               {dat.userID} {dat.kind}
//             </li>
//           ))}
//         </ul>
//   );
// }

// export default Dog;
