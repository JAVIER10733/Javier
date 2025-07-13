import axios from 'axios';

const WEATHER_KEY = process.env.OPENWEATHER_API_KEY;

export const getWeather = async (city) => {
  const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric&lang=es`);
  const data = res.data;
  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    wind: data.wind.speed
  };
};