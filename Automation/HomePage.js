import React, { useEffect, useState } from 'react';
import LightingComponent from './LightingComponenet';
import SecurityComponent from './SecurityComponent';
import TemperatureComponent from './TempratureComponent';
import './Css/HomePage.css';

function HomePage() {
  const [selectedComponent, setSelectedComponent] = useState('lighting');

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };
   useEffect(()=>{
     localStorage.setItem('selectedcomponent',selectedComponent);
   });
  return (
    <div>
      <h1>Welcome to your Home Automation System</h1>
      <nav>
        <ul>
          <li
            className={selectedComponent === 'lighting' ? 'selected' : ''}
            onClick={() => handleComponentChange('lighting')}
          >
            Lighting
          </li>
          <li
            className={selectedComponent === 'security' ? 'selected' : ''}
            onClick={() => handleComponentChange('security')}
          >
            Security
          </li>
          <li
            className={selectedComponent === 'temperature' ? 'selected' : ''}
            onClick={() => handleComponentChange('temperature')}
          >
            Temperature
          </li>
        </ul>
      </nav>
      <div className="component-container">
        {selectedComponent === 'lighting' && <LightingComponent />}
        {selectedComponent === 'security' && <SecurityComponent />}
        {selectedComponent === 'temperature' && <TemperatureComponent />}
      </div>
    </div>
  );
}

export default HomePage;
