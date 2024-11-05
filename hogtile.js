// src/components/HogTile.js

import React, { useState } from 'react';

const HogTile = ({ hog }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="ui eight wide column" onClick={handleToggleDetails}>
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <a className="header">{hog.name}</a>
        </div>
        {showDetails && (
          <div className="extra content">
            <p>Specialty: {hog.specialty}</p>
            <p>Weight: {hog.weight} lbs</p>
            <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {hog.highestMedalAchieved}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HogTile;
