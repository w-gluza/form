import React from "react";
import TextField from "@material-ui/core/TextField";
import { KeyboardTimePicker } from "@material-ui/pickers";
import { format } from "date-fns";

const ScheduleItem = ({ dayName, meals, startTime, endTime, onChange }) => {
  const removeKeyboardStyles = { disabled: true, style: { display: "none" } };
  return (
    <div className="grid">
      <h5>{dayName}</h5>
      <TextField
        className="field"
        defaultValue={meals}
        id="standard-number"
        type="number"
        onChange={e => onChange(dayName, "meals", e.target.value)}
      />
      <KeyboardTimePicker
        clearable
        ampm={false}
        value={startTime}
        onChange={value => onChange(dayName, "startTime", value)}
        KeyboardButtonProps={removeKeyboardStyles}
      />

      <KeyboardTimePicker
        clearable
        ampm={false}
        value={endTime}
        onChange={value => onChange(dayName, "endTime", value)}
        KeyboardButtonProps={removeKeyboardStyles}
      />
    </div>
  );
};

export default ScheduleItem;
