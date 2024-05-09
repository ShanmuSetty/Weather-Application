export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "maps-data.p.rapidapi.com",
  },
};

export const GEO_URL_API =
  "https://maps-data.p.rapidapi.com/searchmaps.php?query=";

export const WEATHER_URL_API = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
