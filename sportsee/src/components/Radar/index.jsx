import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

import "../../styles/radar.css";

const data = [
  {
    subject: "intensity",
    value: 90,
    kind: 6,
  },
  {
    subject: "speed",
    value: 200,
    kind: 5,
  },
  {
    subject: "strength",
    value: 50,
    kind: 4,
  },
  {
    subject: "endurance",
    value: 120,
    kind: 2,
  },
  {
    subject: "energy",
    value: 80,
    kind: 1,
  },
  {
    subject: "cardio",
    value: 200,
    kind: 1,
  },
];

export default function GraphRadar() {
  return (
    <div className="radarWrapper">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          className="radar"
          cx="50%"
          cy="50%"
          outerRadius={90}
          width={258}
          height={263}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />

          <Radar
            dataKey="kind"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
