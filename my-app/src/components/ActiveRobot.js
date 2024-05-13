import React from 'react'

export default function ActiveRobot({robot}) {
  return (
    <div>
      <div className="robot-info-container">
      <h2>{robot.name}</h2>
      <p>Status: {robot.status}</p>
      <p>Battery Level: {robot.batteryLevel}%</p>
      {/* Add more details as needed */}
    </div>
    </div>
  )
}
