import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Textarea from '@mui/joy/Textarea';

function Search({ onSearch }) {
  const [place, setPlace] = useState('');

  // Function to handle search
  const handleSearch = () => {
    onSearch(place);
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Grid sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: " rgb(72, 168, 247)" }}>
      <h2 style={{ color: "white", backgroundColor: "rgb(72, 168, 247)" }}>BMT WEATHER</h2>
      <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Textarea
          type="text"
          placeholder="Enter a location"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          minRows={1}
          onKeyPress={handleKeyPress}
        />
        <Button sx={{ marginLeft: "10px" }} variant="contained" color="success" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default Search;
