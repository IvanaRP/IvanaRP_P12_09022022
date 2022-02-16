import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

import "../../styles/radar.css";

const data = [
  {
    subject: "intensity",
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: "speed",
    A: 98,
    B: 130,
    fullMark: 150
  },
  {
    subject: "strength",
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: "endurance",
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: "energy",
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: "cardio",
    A: 65,
    B: 85,
    fullMark: 150
  }
];

export default function GraphRadar() {
  return (
    <div className="radarWrapper">
    <ResponsiveContainer width="100%" height="100%">
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius={150}
      width={258}
      height={263}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      
      <Radar
        name="Mike"
        dataKey="A"
        fill="#FF0101B2"
        fillOpacity={0.7}

      />
    </RadarChart>
    </ResponsiveContainer>
    </div>
  );
}

// import Radar from "../../assets/radar.svg";

// function GraphRadar() {
//     return (
//       <div className="homeWrapper">
//       <div>
//                         <img src={Radar} alt="SportSee"/>
//                       </div>
//       </div>
//     );
//   }

//   export default GraphRadar;
