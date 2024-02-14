import React from "react";
import Icon from "./Icon/Icon";
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

function CurrentWeather({ weatherData }) {
  if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
    return <div>Weather data not available</div>;
  }

  const isCloudy = weatherData.weather[0].main === "Clouds";

  return (
    <Stack className="current-weather-container" spacing={2} sx={{ backgroundColor: "transparent", }}>
      <h3 style={{ color: "white" }}>{weatherData.name}</h3>
      <Icon weatherId={weatherData.weather[0].id} />
      <h4>{weatherData.weather[0].description}</h4>
      <Grid style={{ color: 'inherit' }}><b style={{ color: 'black' }}>Temperature: </b> {weatherData.main.temp_min} to {weatherData.main.temp_max}°C</Grid>

      <div style={{ display: "flex", gap: "20px" }}>
        <Grid style={{ color: 'inherit' }}><b style={{ color: 'black' }}>Humidity: </b> {weatherData.main.humidity}</Grid>
        <Grid style={{ color: 'inherit' }}> <div><b style={{ color: 'black' }}>Pressure: </b> {weatherData.main.pressure}</div>
        </Grid>
      </div>
    </Stack >
  );
}

export default CurrentWeather;
