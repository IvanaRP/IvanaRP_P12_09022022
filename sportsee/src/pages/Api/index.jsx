// import React,{useState,useEffect} from 'react';


// function Api() {
//   const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('http://localhost:3000/user/12'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])

//   return (
//     <div className="App">
//      {
//        data && data.length>0 && data.map((item)=><p>{item.userInfos.firstName}</p>)
//      }
//     </div>
//   );
// }

// export default Api;


import React, { Component } from "react";

class Api extends Component {
  state = {
    data: [],
    isLoaded: false,
  };

  async componentDidMount() {
    // fetch('http://localhost:3000/user/12')
    //     .then((response) => response.json())
    //     .then((data) => console.log(data));

    try {
      const response = await fetch(`http://localhost:3000/user/12`);
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/posts"
    //   );
      const data = await response.json();
      console.log(response);
      console.log(JSON.stringify(data));
      this.setState({ data, isLoaded: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log("render method called");

    console.log(this.state);


    

    const { isLoaded } = this.state;
    console.log(this.state.data.data);

const info = this.state.data.data;

    return (
      <div>
        app component
        {!isLoaded ? (
          <div> Loading ...</div>
        ) : ( 
        <div> 
          <p>{info.id} </p>
          <p>{info.todayScore} </p>
          <p>{info.keyData.calorieCount} </p>
          <p>{info.keyData.carbohydrateCount} </p>
          <p>{info.keyData.lipidCount} </p>
          <p>{info.userInfos.age} </p>
          <p>{info.userInfos.firstName} </p>
          <p>{info.userInfos.lastName} </p>
        </div>

          
          // <ul>
           
          //   { indo && info.map((item) => {
          //   //   return <li key={item.id}>{item.body}</li>;
          //       return <li key={item.id}>{item.data}</li>;
          //   })}
          // </ul>
        )}
      </div>
    );
  }
}

export default Api;
