import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="theme-toggle">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme} 
          checked={isDarkMode}   
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeToggle;
