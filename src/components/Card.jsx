import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = ({ title, current, previous, timeframe }) => {
  const [iconPath, setIconPath] = useState('');

  // Effect to dynamically import the icon image based on the title
  useEffect(() => {
    import(`../assets/images/${title}.svg`)
      .then(module => setIconPath(module.default)) // Set the icon path on successful import
      .catch(err => console.error('Image import error:', err)); 
  }, [title]); 

  // Function to determine the text to display based on the selected timeframe
  const getPreviousText = () => {
    switch (timeframe) {
      case 'daily':
        return 'Last Day'; 
      case 'weekly':
        return 'Last Week'; 
      case 'monthly':
        return 'Last Month'; 
      default:
        return ''; 
    }
  };

  return (
    <div className="card" style={{ backgroundColor: `var(--${title}-color)` }}>
      <div className="card-top" style={{ backgroundColor: `var(--${title}-color)` }}>
        {/* Display the icon if the path is set */}
        {iconPath && <img src={iconPath} alt={title} className="card-icon" />}
      </div>
      <div className="card-content" style={{ backgroundColor: `var(--card-background-color)` }}>
        <h2>{title}</h2>
        <p className="current-hours">
          <span className="current-hours-value">{current}</span> Completed
        </p>
        <p>{getPreviousText()}: {previous} Completed</p>
      </div>
    </div>
  );
};

export default Card;
