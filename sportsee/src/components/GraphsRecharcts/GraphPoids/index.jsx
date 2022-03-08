import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../../styles/barChartPoids.css";


const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p> {`${payload[0].value} kg`}</p>
        <p> {`${payload[1].value} kCal`}</p>
      </div>
    );
  }

  return null;
};

export default function GraphPoids({ data }) {

  const formatXAxis = (tickItem) => {
    return tickItem + 1;
  };

  return (

    
    <div className="WeightContainer">
    
    <div className="WeightLegend">
          <div className="WeightTitle">Activité quotidienne</div>
          <div className="WeightCircles">
            <div className="WeightCircle">
              <div className="weight-circle_black"></div>
              <p>Poids (kg)</p>
            </div>
            <div className="WeightCircle">
              <div className=" weight-circle_red"></div>
              <p>Calories brûlées (kCal)</p>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={data}
            margin={{
              top: 30,
              right: 50,
              left: 30,
              bottom: 30,
            }}
            barCategoryGap="25%"
            barGap={2}
          >
            <CartesianGrid
              strokeDasharray="2 5"
              vertical={false}
              stroke="#dedede"
            />
            <XAxis
              tickFormatter={formatXAxis}
              tick={{ fill: "#9b9eac" }}
              tickLine={false}
              stroke="#DEDEDE"
              padding={{ left: -47, right: -47 }}
              tickSize="25"
            />
            <YAxis yAxisId="left" orientation="left" hide={true} />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={["dataMin-10", "dataMax+2"]}
              axisLine={false}
              tickLine={false}
              tickSize="50"
            />
            <Tooltip
              position={{ y: 40 }}
              cursor={{
                fill: "#C4C4C4",
                fillOpacity: ".5",
              }}
              content={<CustomTooltip />}
            />
  
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill="black"
              radius={[50, 50, 0, 0]}
              maxBarSize={12}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill="#E60000"
              radius={[50, 50, 0, 0]}
              maxBarSize={12}
            />
          </BarChart>
        </ResponsiveContainer>
    </div>
  );
}

