import React from "react";
import ScheduleContainer from "./components/ScheduleContainer";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function App() {
  const schedule = [
    {
      dayName: "Monday",
      meals: 5,
      startTime: "15:15",
      endTime: "16:12"
    },
    {
      dayName: "Tuesday",
      meals: 21,
      startTime: "11:00",
      endTime: "11:45"
    },
    {
      dayName: "Wednesday",
      meals: 6,
      startTime: "15:12",
      endTime: "15:12"
    },
    {
      dayName: "Thursday",
      meals: 9,
      startTime: "15:12",
      endTime: "16:12"
    },
    {
      dayName: "Friday",
      meals: 12,
      startTime: "15:12",
      endTime: "16:11"
    },
    {
      ayName: "Saturday",
      meals: 2,
      startTime: "20:00",
      endTime: "22:00"
    },
    {
      dayName: "Sunday",
      meals: 10,
      startTime: "14:13",
      endTime: "16:13"
    }
  ];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ScheduleContainer schedule={schedule} />
    </MuiPickersUtilsProvider>
  );
}

export default App;
