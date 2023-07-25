import "./ChartBar.css";

import React from "react";

const ChartBar = (props) => {
  let barFillValue = "0%";

  if (props.maxValue > 0) {
    barFillValue = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillValue }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
