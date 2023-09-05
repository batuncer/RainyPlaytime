import React, { useState } from 'react';

function Search ({onSearch}){
const [place, setPlace] = useState('');
const handleSearch = () => {
    onSearch(place);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a location"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;