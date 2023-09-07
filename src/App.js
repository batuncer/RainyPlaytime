import "./App.scss";
import React, { useState,useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FutureWeather from "./components/FutureWeather";
import CurrentWeather from './components/CurrentWeather';
import Search from "./components/Search";
import axios from "axios"; 

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "BAKI Weather";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [futureWeather, setFutureWeather] = useState([]);
  useEffect(() => {
    // London weather data as default
    const apiKey = "7dd92de43fabf8d0a9cd1233f6fd8115"; 
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {

        // Update state with fetched data
        setCurrentWeather(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
          const futureWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=${apiKey}`;

          axios
            .get(futureWeatherUrl)
            .then((response) => {
              setFutureWeather(response.data.list);
            })
            .catch((error) => {
              console.error("Error fetching future weather data:", error);
            });
  }, []); 

  const handleSearch = (place) => {
    const apiKey = "7dd92de43fabf8d0a9cd1233f6fd8115";
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${place}&cnt=8&units=metric&appid=${apiKey}`;
    //  the API call to fetch weather data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // TO Extract the current weather data (first item in the list)
        const currentWeatherData = data.list[0];

        // TO Extract the future weather data (remaining items in the list)
        const futureWeatherData = data.list.slice(1, 6);

        // Update state with fetched data
        setCurrentWeather(currentWeatherData);
        setFutureWeather(futureWeatherData);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
        // Handle error 
      });
  };

  return (
    <div className="App">
      <Header title={siteTitle} />
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

      <Footer />
    </div>
  );
}

export default App;
