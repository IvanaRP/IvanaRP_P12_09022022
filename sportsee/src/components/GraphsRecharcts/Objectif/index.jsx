import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../../styles/objectif.css";


/**
 * This function display the GraphObjectif LineChart 
 * @returns the component recharts LineChart
 */


export default function GraphObjectif({ data: { sessions } }) {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip_goals">
          <p> {`${payload[0].value} `}min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="GoalsContainer">
      <div className="GoalsTitle"> 
       Durée moyenne des
        <br />
        sessions</div>
  
        <ResponsiveContainer width="100%" height="100%" padding={5}>
          <LineChart
            data={sessions}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 12,
            }}
          >
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              padding={{ left: 10, right: 10 }}
              tick={false}
              
            />
            <YAxis
             dataKey="sessionLength"
              hide={true}
              domain={[0, "dataMax + 60"]}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "black",
                strokeOpacity: 0.05,
                strokeWidth: 30,
              }}
            />
            <Line
              type="monotone"
              dataKey="sessionLength"
              stroke="rgba(255, 255, 255, 0.9)"
              strokeWidth={2}
              dot={false}
              activeDot={{
                stroke: "white",
                strokeOpacity: 0.2,
                fill: "white",
                strokeWidth: 15,
                r: 5,
              }}
             
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="formatXAxis">
          <div>L</div>
          <div>M</div>
          <div>M</div>
          <div>J</div>
          <div>V</div>
          <div>S</div>
          <div>D</div>
        </div>
    
    </div>
  );
}

GraphObjectif.propTypes = {
  data:PropTypes.object.isRequired,
};