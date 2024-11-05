// src/components/HogList.js

import React from 'react';
import HogTile from './hogtile';

const HogList = ({ hogs }) => {
  return (
    <div className="ui grid container">
      {hogs.map((hog, index) => (
        <HogTile key={index} hog={hog} />
      ))}
    </div>
  );
};

export default HogList;
