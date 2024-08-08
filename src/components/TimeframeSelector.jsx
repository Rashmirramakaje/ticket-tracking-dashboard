import React from 'react';

const TimeframeSelector = ({ selectedTimeframe, setSelectedTimeframe }) => {
  const timeframes = ['daily', 'weekly', 'monthly'];

  return (
    <div className="timeframe-selector">
       {timeframes.map((timeframe) => (
        <div
          key={timeframe} 
          className={`timeframe-item ${selectedTimeframe === timeframe ? 'active' : ''}`}
          onClick={() => setSelectedTimeframe(timeframe)} 
        >
          {/* Capitalize the first letter of the timeframe and display */}
          {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
        </div>
      ))}
    </div>
  );
};

export default TimeframeSelector;
