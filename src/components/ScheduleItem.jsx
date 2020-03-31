import React from "react";

const ScheduleItem = ({ dayName, meals, startTime, endTime }) => {
  return (
    <div className="grid">
      <h5>{dayName}</h5>
      <p>{meals}</p>
      <p>{startTime}</p>
      <p>{endTime}</p>
    </div>
  );
};

export default ScheduleItem;
