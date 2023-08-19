import React, { useState } from 'react';
import './Css/LightingComponent.css';

function LightingComponent() {
  const [isLightOn, setIsLightOn] = useState(false);

  const handleLightSwitch = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div className="lighting-container">
      <h2>Lighting Control</h2>
      <div className="light-switch">
        <label htmlFor="light-checkbox">Light:</label>
        <input 
          type="checkbox" 
          id="light-checkbox" 
          checked={isLightOn} 
          onChange={handleLightSwitch} 
        />
      </div>
    </div>
  );
}

export default LightingComponent;
