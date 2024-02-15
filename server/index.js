const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 5000;

const apiKey = "7dd92de43fabf8d0a9cd1233f6fd8115";
app.use(cors());
// API endpoints
app.get("/currentWeather", async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching current weather data:", error);
    res.status(500).json({ error: "Error fetching current weather data" });
  }
});

app.get("/futureWeather", async (req, res) => {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=8&units=metric&appid=${apiKey}`
    );
    res.json(response.data.list);
  } catch (error) {
    console.error("Error fetching future weather data:", error);
    res.status(500).json({ error: "Error fetching future weather data" });
  }
});

app.get("/search/:place", async (req, res) => {
  const place = req.params.place;
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${place}&cnt=7&units=metric&appid=${apiKey}`
    );
    res.json({
      currentWeather: response.data.list[0],
      futureWeather: response.data.list.slice(1, 6),
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
