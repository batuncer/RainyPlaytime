import React from "react";
import Icon from "./Icon/Icon";
function FutureWeather({ futureWeatherData }) {
  return (
    <div className="future-weather-container">
   
      {futureWeatherData.map((forecast, index) => (
          <div key={index} className="future-weather-item">
            <div className="forecast-date">{forecast.dt_txt.split(" ")[1].slice(0, 5)}</div>
            <Icon name={forecast.weather[0].main.toLowerCase()} />
            <div className="forecast-temperature">{forecast.main.temp}°C</div>
          </div>
        ))}
    </div>
  );
}

export default FutureWeather;
