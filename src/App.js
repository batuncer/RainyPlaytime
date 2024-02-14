import "./App.scss";
import React, { useState, useEffect } from "react";

import FutureWeather from "./components/FutureWeather";
import CurrentWeather from "./components/CurrentWeather";
import Search from "./components/Search";
import axios from "axios";

// Configurations
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "BAKI Weather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [futureWeather, setFutureWeather] = useState([]);

  // Fetching current weather data on component mount
  useEffect(() => {
    fetchCurrentWeather();
    fetchFutureWeather();
  }, []);

  // Function to fetch current weather data
  const fetchCurrentWeather = () => {
    axios
      .get("https://weather1-ekob.onrender.com/currentWeather")
      .then((response) => {
        setCurrentWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching current weather data:", error);
      });
  };

  const fetchFutureWeather = () => {
    axios
      .get("https://weather1-ekob.onrender.com/futureWeather?cnt=8")
      .then((response) => {
        setFutureWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching future weather data:", error);
      });
  };
  // Function to handle search
  const handleSearch = (place) => {
    axios
      .get(`https://weather1-ekob.onrender.com/search/${place}`)
      .then((response) => {
        setCurrentWeather(response.data.currentWeather);
        setFutureWeather(response.data.futureWeather);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <main className="c-site-main" tabIndex="0">
        {currentWeather ? (
          <CurrentWeather weatherData={currentWeather} />
        ) : (
          <p>Loading current weather...</p>
        )}
        {futureWeather.length > 0 ? (
          <FutureWeather futureWeatherData={futureWeather} />
        ) : (
          <p>Loading future weather...</p>
        )}
      </main>
    </div>
  );
}

export default App;
