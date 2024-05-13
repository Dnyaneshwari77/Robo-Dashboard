import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

function LineChart() {
  const [averageBattery, setAverageBattery] = useState(0);
  const [data, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/robots");
        const robots = response.data.data;

        console.log("Fetched Robots Data:", robots);

        // Prepare data for Chart.js
        const chartData = {
          labels: robots.map((robot) => robot.robot_id),
          datasets: [
            {
              label: "Battery Life",
              data: robots.map((robot) => robot.battery_level),
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
              pointRadius: 5,
              pointHoverRadius: 8,
            },
          ],
        };

        console.log("Prepared Chart Data:", chartData);

        // Calculate average battery life
        const totalBattery = robots.reduce(
          (acc, robot) => acc + robot.battery_level,
          0
        );
        const avgBattery = totalBattery / robots.length;
        setAverageBattery(avgBattery);

        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        ticks: {
          stepSize: 20,
          callback: function (value) {
            return value; // Ensure ticks display actual values
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Battery Level: ${tooltipItem.raw}`;
          },
        },
      },
    },
  };

  return (
    <div className="line-chart-container " style={{ width: "80%" }}>
      <h2>Robots Battery Life</h2>
      {data ? (
        <div className="dynamicChartLine ">
          <Line data={data} options={chartOptions} className="chartLine" />
          <p>Average Battery Life: {averageBattery.toFixed(2)}</p>
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

export default LineChart;
