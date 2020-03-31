import React from "react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = ({ schedule }) => {
  return (
    <div className="gridContainer">
      {schedule.map(day => (
        <ScheduleItem
          dayName={day.dayName}
          meals={day.meals}
          startTime={day.startTime}
          endTime={day.endTime}
        />
      ))}
    </div>
  );
};

export default ScheduleContainer;
