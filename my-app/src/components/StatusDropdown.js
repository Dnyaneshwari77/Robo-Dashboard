import React, { useState } from "react";
import ActiveRobotContainer from "./ActiveRobotconatiner";

const StatusDropdown = () => {
  const [selectedStatus, setSelectedStatus] = useState("active"); // Initial selected status

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  return (
    <>
      <div className="status-dropdown">
        <div className="dropdown">
          <button className="dropbtn">
            {selectedStatus === "active" ? "Active" : "Inactive"}
          </button>
          <div className="dropdown-content">
            <button onClick={() => handleStatusChange("active")}>Active</button>
            <button onClick={() => handleStatusChange("idle")}>idle</button>
          </div>
        </div>
      </div>
      <ActiveRobotContainer status={selectedStatus} />
    </>
  );
};

export default StatusDropdown;
