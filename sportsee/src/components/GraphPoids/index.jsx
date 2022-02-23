
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import "../../styles/barChartPoids.css";



const data = [
  {
    day: '2020-07-01',
    kilogram: 80,
    calories: 240
  },
  {
    day: '2020-07-02',
    kilogram: 80,
    calories: 220
  },
  {
    day: '2020-07-03',
    kilogram: 81,
    calories: 280
  },
  {
    day: '2020-07-04',
    kilogram: 81,
    calories: 290
  },
  {
    day: '2020-07-05',
    kilogram: 80,
    calories: 160
  },
  {
    day: '2020-07-06',
    kilogram: 78,
    calories: 162
  },
  {
    day: '2020-07-07',
    kilogram: 76,
    calories: 390
  },
];

export default function GraphPoids() {
    return (

<div className="poidsWrapper">
      <ResponsiveContainer >
        <BarChart
          width={200}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis yAxisId="0" dataKey="kilogram" />
          <YAxis yAxisId="1" dataKey="calories" />
          <Tooltip />
          <Legend verticalAlign="top" align="right" width={270} heigth={50} iconSize={8} iconType="circle" />
          <Bar  yAxisId="0" dataKey="kilogram" fill=" #282D30" background={{ fill: '#eee' }} barSize={10} radius={[10, 10, 0, 0]}/>
          <Bar yAxisId="1" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>

      </div>
    );
  }





// import Poids from "../../assets/poids.svg";


// function GraphPoids() {
//     return (
//       <div className="homeWrapper">
//       <div>
//                         <img src={Poids} alt="SportSee"/>
//                       </div>
//       </div>
//     );
//   }
  
//   export default GraphPoids;