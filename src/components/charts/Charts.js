import "./Charts.css";

import React from "react";
import ChartBar from "./ChartBar";

const Charts = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  console.log(
    props.dataPoints.map((dataPoint) => console.log(dataPoint.value))
  );

  const maxValue = Math.max(...dataPointValues);

  console.log("maxvalue:" + maxValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
