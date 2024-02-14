import React from "react";
import Icon from "./Icon/Icon";
import Grid from '@mui/material/Grid';

function FutureWeather({ futureWeatherData }) {
  return (
    <Grid className="future-weather-container" spacing={2} sx={{ backgroundColor: "rgba(0, 102, 178, 0.5)", width: "57%", borderRadius: "10px", padding: "30px", marginTop: "20px" }}>
      {futureWeatherData.map((forecast, index) => (
        <Grid key={index} className="future-weather-item">
          <div className="forecast-date" style={{ color: "white" }}>{forecast.dt_txt.split(" ")[1].slice(0, 5)}</div>
          <Icon weatherId={forecast.weather[0].id} />
          <div className="forecast-temperature" style={{ color: "white" }}>{forecast.main.temp}°C</div>
        </Grid>
      ))}
    </Grid>
  );
}

export default FutureWeather;
