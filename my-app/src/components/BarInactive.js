import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Colors } from "chart.js/auto";
import axios from "axios";

function BarChart({ chartData }) {
  const [transtionactive, setTansitionActive] = useState(null);
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
              label: "Active to Idel Mode changed",
              data: robots.map((robot) => robot.active_to_idle_transitions),
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

        setTansitionActive(chartData);
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
    <div
      className="chart-conatainer"
      style={{ width: "80%", minHeight: "100%" }}
    >
      <h2 style={{ color: "white", marginBottom: "10px" }}>
        Active to Idel Mode changed
      </h2>
      {transtionactive ? (
        <div className="dynamicChart">
          <Bar
            data={transtionactive}
            options={chartOptions}
            className="chart"
          />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

export default BarChart;
