import React from "react";
import TextField from "@material-ui/core/TextField";
import { KeyboardTimePicker } from "@material-ui/pickers";

const ScheduleItem = ({ dayName, meals, startTime, endTime, onChange }) => {
  const removeKeyboardStyles = { disabled: true, style: { display: "none" } };

  const handleChange = (name, value) => {
    // if (isDisabled) return;

    onChange({
      [name]: value
    });
  };

  return (
    <div className="grid">
      <h5>{dayName}</h5>
      <TextField
        className="field"
        defaultValue={meals}
        id="standard-number"
        type="number"
        onChange={handleChange}
      />

      <KeyboardTimePicker
        // clearable
        ampm={false}
        value={startTime}
        // onChange={value => handleChange("startTime", value)}
        KeyboardButtonProps={removeKeyboardStyles}
      />

      <KeyboardTimePicker
        // clearable
        ampm={false}
        value={endTime}
        // value={`${datePlaceholder}${endTime}`}
        // onChange={value => handleChange("endTime", value)}
        KeyboardButtonProps={removeKeyboardStyles}
      />
    </div>
  );
};

export default ScheduleItem;
