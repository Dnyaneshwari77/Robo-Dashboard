import React, { useEffect, useState } from "react";
import SummaryInfo from "./SummaryInfo";
import { AiFillAlert } from "react-icons/ai";
import LineChart from "./Line";
import axios from "axios";

export default function SummaryContainer({ data }) {
  const [activeRobots, setActiveRobos] = useState(0);
  const [idleRobots, setIdleRobos] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/robots?operational_status=active"
        );
        const activeRobots = response.data.count;

        console.log("Fetched Active Robots Data:", activeRobots);

        setActiveRobos(activeRobots);

        const idleResponse = await axios.get(
          "http://localhost:5000/api/robots?operational_status=idle"
        );
        const idleRobots = idleResponse.data.count;

        console.log("Fetched Idle Robots Data:", idleRobots);

        setIdleRobos(idleRobots);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="outercontainer">
      <div className="bigConatiner">
        <div className="summaryConatiner">
          <SummaryInfo
            icon={<AiFillAlert />}
            text="Active"
            digit={activeRobots}
          />
          <SummaryInfo icon={<AiFillAlert />} text="Idle" digit={idleRobots} />
        </div>
        <SummaryInfo
          last={true}
          icon={<AiFillAlert />}
          text="Total No of Robo"
          digit={activeRobots + idleRobots}
        />
      </div>
      <div className="chart">
        <div>
          <LineChart chartData={data} />
        </div>
      </div>{" "}
    </div>
  );
}
