import React from "react";
import { FaBatteryHalf } from "react-icons/fa";

export default function RoboCard({ robot }) {
  const {
    name,
    batteryLevel,
    activeToIdleTransitions,
    idleToActiveTransitions,
    status,
    logs,
  } = robot;

  return (
    <div className="robot-card">
      <div className="robot-content">
        <h3 className="robot-heading">{name.toUpperCase()}</h3>
        <div className="robot-image">
          <img
            src="https://imgs.search.brave.com/h9a6CbdNXQsGq1bzykTAdsMa5JzgAScZaxbBW6nr0Ic/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9yb2JvdC10b3kt/aXNvbGF0ZWQtd2hp/dGUtYmFja2dyb3Vu/ZF8xMDg3NTgyLTcw/NTMuanBnP3NpemU9/NjI2JmV4dD1qcGc"
            alt="Robot"
          />
        </div>
        <div className="robot-details">
          <div className="status">
            <span className={`status-indicator ${status.toLowerCase}`}>
              {status}
            </span>

            <span>
              {batteryLevel}%
              <FaBatteryHalf style={{ marginLeft: "5px" }} />
            </span>
          </div>

          <div className="logs">
            <h3>Logs</h3>
            <ol>
              {logs &&
                logs.map((log) => {
                  return <li>{log.message}</li>;
                })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
