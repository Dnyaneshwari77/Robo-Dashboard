import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";

function PieChart() {
  const [activeRobotsCount, setActiveRobotsCount] = useState(0);
  const [idleRobotsCount, setIdleRobotsCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/robots?operational_status=active"
        );
        const activeRobots = response.data.count;

        console.log("Fetched Active Robots Data:", activeRobots);

        // const activeCount = activeRobots.length;
        setActiveRobotsCount(activeRobots);

        // Fetch idle robots count separately (you may adjust the URL accordingly)
        const idleResponse = await axios.get(
          "http://localhost:5000/api/robots?operational_status=idle"
        );
        const idleRobots = idleResponse.data.count;

        console.log("Fetched Idle Robots Data:", idleRobots);

        // const idleCount = idleRobots.length;
        setIdleRobotsCount(idleRobots);

        const chartData = {
          labels: ["Active Robots", "Idle Robots"],
          datasets: [
            {
              label: "Robots by Operational Status",
              data: [activeRobots, idleRobots],
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        };

        console.log("Prepared Pie Chart Data:", chartData);

        setData(chartData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="chart-conatainer"
      style={{ width: "80%", minHeight: "400px" }}
    >
      <h2>Robots by Operational Status</h2>
      {data ? (
        <div className="dynamicChart">
          <Pie data={data} />
        
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

export default PieChart;
