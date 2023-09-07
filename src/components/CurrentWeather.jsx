import React from "react";
import Icon from './Icon/Icon';

function CurrentWeather({ weatherData }) {
  if (!weatherData || !weatherData.weather || weatherData.weather.length === 0) {
    return <div>Weather data not available</div>;
  }

  return (
    <div className="current-weather-container">
      <Icon weatherId={weatherData.weather[0].id} />
      <h4>{weatherData.weather[0].description}</h4>
      <div style={{ color: 'white' }}><b style={{ color: 'blue' }}>Temperature</b> {weatherData.main.temp_min} to {weatherData.main.temp_max}°C</div>
      <div className="details">
        <div><b style={{ color: 'blue' }}>Humidity</b> {weatherData.main.humidity}</div>
        <div><b style={{ color: 'blue' }}>Pressure</b> {weatherData.main.pressure}</div>
      </div>
    </div>
  );
}

export default CurrentWeather;
