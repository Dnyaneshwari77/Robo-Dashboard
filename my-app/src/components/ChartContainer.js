import React from "react";
import LineChart from "./Line";
import BarChartActive from "./BarActive";
import BarChartInactive from "./BarInactive";
import PieChart from "./Pie";
import DoughnutChart from "./Doughnut";

export default function ChartContainer({ data }) {
  return (
    <div className="chartContainer">
      <div>
        <BarChartInactive chartData={data} />
      </div>
      <div>
        <PieChart chartData={data} />
      </div>
      <div>
        <BarChartActive chartData={data} />
      </div>
    </div>
  );
}
