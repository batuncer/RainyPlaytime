import React, { useState } from 'react';

function Search ({onSearch}){
const [place, setPlace] = useState('');
const handleSearch = () => {
    onSearch(place);
  };

  return (
    <div className="search-container">
      <div className='search'>
        <input
        type="text"
        placeholder="Enter a location"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        />
        <button className="button-10" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Search;