import React, { useState } from 'react';
import './Css/SecurityComponent.css';
import alarmSound from './assests/alarm.mp3';

function SecurityComponent() {
  const [isArmed, setIsArmed] = useState(false);
  const handleArmedClick = () => {
    setIsArmed(!isArmed);
    if (isArmed) {
      // Play alarm sound
      const audio = new Audio(alarmSound);
      audio.play();
    } else {
      // Stop alarm sound
      const audio = document.querySelector('#alarm-sound');
      audio.pause();
      audio.currentTime = -1;
    }
  };
  return (
    <div className="security-component">
      <h2>Security Component</h2>
      <button className={isArmed ? 'armed' : ''} onClick={handleArmedClick}>
        {isArmed ? 'Armed' : 'Disarmed'}
      </button>
      <audio id="alarm-sound" src={alarmSound} loop />
    </div>
  );
}

export default SecurityComponent;
