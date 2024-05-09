import { useState } from "react";
import "./App.css";
import { WEATHER_API_KEY, WEATHER_URL_API } from "./api";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import Forecast from "./components/forecast/forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const curWeatherFetch = fetch(
      `${WEATHER_URL_API}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_URL_API}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    Promise.all([curWeatherFetch, forecastFetch])
      .then(async (response) => {
        const wResponse = await response[0].json();
        const fResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...wResponse });
        setForecast({ city: searchData.label, ...fResponse });
      })
      .catch((err) => console.log("error"));
  };
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} className="search" />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
