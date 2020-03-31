import React from "react";
import ScheduleContainer from "./components/ScheduleContainer";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "./App.css";

function App() {
  const schedule = [
    {
      dayName: "Monday",
      meals: 5,
      startTime: "15:15:00",
      endTime: "16:12:00"
    },
    {
      dayName: "Tuesday",
      meals: 21,
      startTime: "11:00:00",
      endTime: "11:45:00"
    },
    {
      dayName: "Wednesday",
      meals: 6,
      startTime: "15:12:00",
      endTime: "15:12:00"
    },
    {
      dayName: "Thursday",
      meals: 9,
      startTime: "15:12:00",
      endTime: "16:12:00"
    },
    {
      dayName: "Friday",
      meals: 12,
      startTime: "15:12:00",
      endTime: "16:11:00"
    },
    {
      dayName: "Saturday",
      meals: 2,
      startTime: "20:00:00",
      endTime: "22:00:00"
    },
    {
      dayName: "Sunday",
      meals: 10,
      startTime: "14:13:00",
      endTime: "16:13:00"
    }
  ];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <div className="appContainer">
        <ScheduleContainer schedule={schedule} />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
