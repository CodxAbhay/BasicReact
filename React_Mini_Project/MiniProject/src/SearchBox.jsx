import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
  const GEO_API_URL = "http://api.openweathermap.org/geo/1.0/direct";
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "63bbf4ac04e8734b859eb79624860e66";

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      // Fetch city coordinates
      const geoResponse = await fetch(`${GEO_API_URL}?q=${city}&limit=1&appid=${API_KEY}`);
      if (!geoResponse.ok) throw new Error("Failed to fetch location data");

      const geoData = await geoResponse.json();
      if (geoData.length === 0) {
        alert("City not found!");
        return;
      }

      const { lat, lon } = geoData[0];

      // Fetch weather data using coordinates
      const weatherResponse = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
      if (!weatherResponse.ok) throw new Error("Failed to fetch weather data");

      const weatherData = await weatherResponse.json();
      setWeather(weatherData); // Store weather data in state

    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Error fetching data. Please try again.");
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      alert("Please enter a city name.");
      return;
    }
    getWeather();
    // <InfoBox/>
    setCity("");
  };

  return (
    <div>
      <h5>Search for the weather</h5>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="standard"
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" color="success" type="submit">
          Search
        </Button>
      </form>

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h4>Weather in {weather.name}</h4>
          <p>🌡️ Temperature: {weather.main.temp}°C</p>
          <p>🌥️ Condition: {weather.weather[0].description}</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}
