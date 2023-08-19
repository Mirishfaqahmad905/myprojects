import React, { useState } from 'react';

function TemperatureComponent() {
  const [currentTemp, setCurrentTemp] = useState(20);
  const [targetTemp, setTargetTemp] = useState(20);

  const handleTempChange = (event) => {
    setTargetTemp(event.target.value);
  };

  const handleTempSubmit = (event) => {
    event.preventDefault();
    setCurrentTemp(targetTemp);
  };

  return (
    <div>
      <h2>Temperature Control</h2>
      <p>The current temperature is {currentTemp}&#8451;</p>
      <form onSubmit={handleTempSubmit}>
        <label htmlFor="target-temp">Set Target Temperature:</label>
        <input
          id="target-temp"
          type="number"
          value={targetTemp}
          onChange={handleTempChange}
        />
        <button type="submit">Set</button>
      </form>
    </div>
  );
}

export default TemperatureComponent;
