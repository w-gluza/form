import React, { useState } from "react";
import ScheduleItem from "./ScheduleItem";

const ScheduleContainer = props => {
  const [schedule, setSchedule] = useState(props.schedule);

  const datePlaceholder = "1970-01-01T";

  const handleChange = (editedName, editedKey, editedValue) => {
    // if (isUpdatePending) return;
    setSchedule(
      schedule.map(day =>
        day.dayName === editedName ? { ...day, [editedKey]: editedValue } : day
      )
    );
  };

  console.log(schedule);
  return (
    <div className="gridContainer">
      {schedule.map(day => (
        <ScheduleItem
          key={day.dayName}
          dayName={day.dayName}
          meals={day.meals}
          startTime={day.startTime}
          endTime={`${datePlaceholder}${day.endTime}`}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default ScheduleContainer;
