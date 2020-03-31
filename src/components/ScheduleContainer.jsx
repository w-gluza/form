import React from "react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = ({ schedule }) => {
  const datePlaceholder = "1970-01-01T";

  return (
    <div className="gridContainer">
      {schedule.map(day => (
        <ScheduleItem
          dayName={day.dayName}
          meals={day.meals}
          startTime={`${datePlaceholder}${day.startTime}`}
          endTime={`${datePlaceholder}${day.endTime}`}
          // onChange={value => handleChange(key, value)}
        />
      ))}
    </div>
  );
};

export default ScheduleContainer;
