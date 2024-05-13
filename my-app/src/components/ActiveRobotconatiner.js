import React, { useState, useEffect } from "react";
import axios from "axios";
import RoboCard from "./RoboCard";
import StatusDropdown from "./StatusDropdown";

export default function ActiveRobotContainer({ status }) {
  const [robots, setRobots] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/robots?operational_status=${status}`
        );
        const fetchedRobots = response.data.data;
        console.log("Fetched Robots Data Active:", fetchedRobots);
        setRobots(fetchedRobots);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [status]);

  return (
    <>
      <div className="robot-container">
        {robots ? (
          robots.map((robot) => (
            <RoboCard
              key={robot._id}
              robot={{
                name: robot.robot_id,
                status: robot.operational_status,
                batteryLevel: robot.battery_level,
                logs: robot.logs,
                idleToActiveTransitions: robot.idle_to_active_transitions,
                activeToIdleTransitions: robot.active_to_idle_transitions,
              }}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </>
  );
}
