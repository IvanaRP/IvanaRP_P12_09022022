import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import "../../styles/objectif.css";

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function GraphObjectif() {
  const renderLegend = () => {
    
    return (
        <div className="custom-legend">
            <p>Durée moyenne des sessions</p>
        </div>
    )
}
    return (
      <div className="objectifWrapper"> 
      <ResponsiveContainer  width="100%" height="100%" >
        <LineChart
      
           width={258}
           height={263}
          data={data}
          margin={{
            top: 0,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend  verticalAlign="top" align="left" content={renderLegend}/>
          <Line type="monotone" dataKey="pv"  strokeDashArray="0" strokeWidth={2} stroke="white" animationBegin={0} activeDot={{ stroke: 'white', strokeWidth: 2, fill: 'white', r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }




// import Objectif from "../../assets/objectifs.svg";


// function GraphObjectif() {
//     return (
//       <div className="homeWrapper">
//       <div>
//                         <img src={Objectif} alt="SportSee"/>
//                       </div>
//       </div>
//     );
//   }
  
//   export default GraphObjectif;