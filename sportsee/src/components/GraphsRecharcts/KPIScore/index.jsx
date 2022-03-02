import React from "react";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

import "../../../styles/kpiScore.css";

export default function GraphKpiScore({ data }) {
  // const data01 = [{ name: "Group A", value: 100 }];
  const todayScore = data;
  const scorePerCent = todayScore * 100;
  const rest = 100 - scorePerCent;
  const score = [
    { name: "done", value: scorePerCent, fillColor: "#FF0000" },
    { name: "notdone", value: rest, fillColor: "#ffffff" },
  ];
  const renderLabel = score[0].value + "%";
  console.log(renderLabel);

  return (
    <div className="kpiWrapper">
      <div className="ScoreTitle">Score</div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          {/* <Pie
            dataKey="value"
            data={data01}
            innerRadius={0}
            outerRadius={80}
            fill="#58C22A"
            stroke="none"
          /> */}
          <Pie
            dataKey="value"
            data={score}
            innerRadius={70}
            outerRadius={80}
            startAngle={90}
            endAngle={450}
            fill="#FF0000"
          >
          {score.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.fillColor}
              cornerRadius="50%"
            />
          ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="ScoreLegend">
        <p className="renderLabel">{renderLabel}</p>
        <p>
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
}
