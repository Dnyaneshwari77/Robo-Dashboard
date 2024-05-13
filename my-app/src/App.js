import ActiveRobotconatiner from "./components/ActiveRobotconatiner";
import SummaryContainer from "./components/SummaryContainer";
import RobotStatusChart from "./components/RobotStatusChart";
import "./index.css";
import { useDebugValue, useState } from "react";
import StatusDropdown from "./components/StatusDropdown";

import { UserData } from "./Data";
import ChartContainer from "./components/ChartContainer";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => {
          console.log(data.userGain);
          return data.userGain;
        }),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  console.log(userData);
  return (
    <div className="App">
      <SummaryContainer data={userData} />
   
      <ChartContainer data={userData} />
         <StatusDropdown />
      {/* <ActiveRobotconatiner /> */}
    </div>
  );
}

export default App;
