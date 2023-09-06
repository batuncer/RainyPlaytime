import React from "react";
import Icon from './Icon/Icon';

function CurrentWeather({ weatherData }) {
  //a conditional class name
  const weatherClass = weatherData.weather[0].main.toLowerCase() === 'clear' ? 'clear-weather' : ''
  return (
    <div className={`current-weather-container ${weatherClass}`}>
      <Icon name={weatherData.weather[0].main.toLowerCase()} />
      <h4>{weatherData.weather[0].description}</h4>
      <div >Temperature {weatherData.main.temp_min} to {weatherData.main.temp_max}°C</div>
      <div className="details">   
      <div >Humidity {weatherData.main.humidity}</div>
      <div >Pressure {weatherData.main.pressure}</div>
      </div>
   
    </div>
  );
}

export default CurrentWeather;