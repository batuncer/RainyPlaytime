import React from "react";
import Icon from './Icon/Icon';

function CurrentWeather({ weatherData }) {
  return (
    <div className="current-weather-container">
      <Icon name={weatherData.weather[0].main.toLowerCase()} />
      <div className="temperature">{weatherData.main.temp}°F</div>
      <div className="description">{weatherData.weather[0].description}</div>
    </div>
  );
}

export default CurrentWeather;