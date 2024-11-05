// src/App.js

import React, { useState } from 'react';
import hogs from './porker_data'; // Correctly import hogs
import Nav from './components/nav';
import HogList from './components/hoglist';
import FilterSort from './components/filtersort';
import AddHogForm from './components/addhogform';

const App = () => {
  const [hogData, setHogData] = useState(hogs); // Initialize with hogs array
  const [filterGreased, setFilterGreased] = useState(false);
  const [sortOption, setSortOption] = useState('');

  // Log to debug the contents of hogData
  console.log(hogData); // Check if this is an array

  // Filter hogs based on greased status
  const filteredHogs = hogData.filter(hog => !filterGreased || hog.greased);

  // Sort hogs based on selected option
  const sortedHogs = filteredHogs.sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'weight') {
      return a.weight - b.weight;
    }
    return 0; // Default case: no sorting
  });

  // Function to add a new hog to the list
  const addHog = (newHog) => {
    setHogData([...hogData, newHog]); // Ensure this creates a new array
  };

  return (
    <div>
      <Nav />
      <FilterSort 
        setFilterGreased={setFilterGreased} 
        setSortOption={setSortOption} 
      />
      <HogList hogs={sortedHogs} />
      <AddHogForm addHog={addHog} />
    </div>
  );
};

export default App;
