// Icon.js
import React from 'react';
import storm from '../../img/weather-icons/storm.svg';
import drizzle from '../../img/weather-icons/drizzle.svg';
import rain from '../../img/weather-icons/rain.svg';
import snow from '../../img/weather-icons/snow.svg';
import fog from '../../img/weather-icons/fog.svg';
import clear from '../../img/weather-icons/clear.svg';
import partlycloudy from '../../img/weather-icons/partlycloudy.svg';
import mostlycloudy from '../../img/weather-icons/mostlycloudy.svg';
import unknown from '../../img/weather-icons/unknown.svg';

function Icon({ weatherId }) {
  const getWeatherIcon = (id) => {
    if (id < 300) {
      return storm;
    } else if (id >= 300 && id < 500) {
      return drizzle;
    } else if (id >= 500 && id < 600) {
      return rain;
    } else if (id >= 600 && id < 700) {
      return snow;
    } else if (id >= 700 && id < 800) {
      return fog;
    } else if (id === 800) {
      return clear;
    } else if (id === 801) {
      return partlycloudy;
    } else if (id > 801 && id <= 805) {
      return mostlycloudy;
    } else {
      return unknown;
    }
  };

  const icon = getWeatherIcon(weatherId);

  return <img src={icon} alt="weather-icon" />;
}



export default Icon;
