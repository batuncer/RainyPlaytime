import React from "react";
import Icon from "./Icon/Icon";
function FutureWeather({ futureWeatherData }) {
  return (
    <div className="future-weather-container">
      <h2>Future Weather</h2>
      {futureWeatherData.map((forecast, index) => (
          <div key={index} className="future-weather-item">
            <div className="forecast-date">{forecast.dt_txt}</div>
            <div className="forecast-temperature">{forecast.main.temp}°C</div>
            <div className="forecast-description">{forecast.weather[0].description}</div>
            <Icon name={forecast.weather[0].main.toLowerCase()} />
          </div>
        ))}
    </div>
  );
}

export default FutureWeather;
