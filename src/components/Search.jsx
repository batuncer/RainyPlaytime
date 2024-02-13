import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Textarea from '@mui/joy/Textarea';
function Search({ onSearch }) {
  const [place, setPlace] = useState('');
  const handleSearch = () => {
    onSearch(place);
  };

  return (
    <Grid sx={{ display: 'flex', justifyContent: 'space-between', padding: '20px', backgroundColor: "#0530ad" }}>
      <h2 style={{ color: "white", backgroundColor: "#0530ad" }}>BMT WEATHER</h2>
      <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Textarea
          type="text"
          placeholder="Enter a location"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          minRows={1} />
        <Button sx={{ marginLeft: "10px" }} variant="contained" color="success" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

export default Search;