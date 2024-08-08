import React, { useState, useEffect } from 'react';
import './styles/App.css';
import TimeframeSelector from './components/TimeframeSelector';
import Card from './components/Card';
import { timeframes } from './data/timeframes';
import avatar from './assets/images/avatar.png';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('daily');
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="app">
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <div className="main-content">
        <div className="left-sidebar">
          <div className="report-box">
            <div className="profile-picture">
              <img src={avatar} alt="Profile" />
            </div>
            <h4>Report for</h4>
            <h2>Stacey Castillo</h2>
          </div>

          <TimeframeSelector 
            selectedTimeframe={selectedTimeframe} 
            setSelectedTimeframe={setSelectedTimeframe} 
          />
        </div>

        <div className="cards-container">
          <div className="top-row">
            {timeframes.slice(0, 3).map((item) => (
              <Card
                key={item.title} 
                title={item.title}
                current={item.timeframes[selectedTimeframe].current}
                previous={item.timeframes[selectedTimeframe].previous}
                timeframe={selectedTimeframe}
              />
            ))}
          </div>

          <div className="bottom-row">
            {timeframes.slice(3).map((item) => (
              <Card
                key={item.title} 
                title={item.title}
                current={item.timeframes[selectedTimeframe].current}
                previous={item.timeframes[selectedTimeframe].previous}
                timeframe={selectedTimeframe}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
