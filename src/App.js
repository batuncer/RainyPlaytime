import "./App.scss";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FutureWeather from "./components/FutureWeather";
import CurrentWeather from './components/CurrentWeather';
import Search from "./components/Search";
import FakeWeatherData from "./FakeWeatherData.json";

//configs
const siteTitle = process.env.REACT_APP_SITE_TITLE ?? "BAKI Weather";

function App() {

    const [currentWeather, setCurrentWeather] = useState(FakeWeatherData.list[0]);
    const [futureWeather, setFutureWeather] = useState([]);

    const handleSearch = (place) => {
    const apiKey = "7dd92de43fabf8d0a9cd1233f6fd8115";
    const apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${place}&cnt=8&units=metric&appid=${apiKey}`;;
    //  the API call to fetch weather data
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
    // TO Extract the current weather data (first item in the list)
    const currentWeatherData = data.list[0];

    // TO Extract the future weather data (remaining items in the list)
    const futureWeatherData = data.list.slice(1, 6); // Get next 5 entries

    // Update state with fetched data
    setCurrentWeather(currentWeatherData);
    setFutureWeather(futureWeatherData);
    })
    .catch((error) => {
    console.error("Error fetching weather data:", error);
    // Handle error (an error message FOR the user)
    });
    }


  return (
    <div className="App">
      <Header title={siteTitle} />
      <main className="c-site-main" tabIndex="0">
        <Search onSearch={handleSearch} />
        <CurrentWeather weatherData={currentWeather} />
        <FutureWeather futureWeatherData={futureWeather} /> 
      </main>

      <Footer />
    </div>
  );
}

export default App;
