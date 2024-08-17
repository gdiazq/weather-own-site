import React, { useEffect, useState } from 'react';
import useGeolocation from '@/app/hook/useGeolocation';
import { getWeatherData } from '@/app/api/getWeatherCoords'; // Asegúrate de tener esta función para obtener el clima

const WeatherDisplay = () => {
  const { location, error } = useGeolocation();
  const [weatherData, setWeatherData] = useState<any>(null); // Ajusta el tipo según tu estructura de datos

  useEffect(() => {
    const fetchWeather = async () => {
      if (location) {
        const data = await getWeatherData(location.lat, location.lon);
        setWeatherData(data);
      }
    };
    fetchWeather();
  }, [location]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Obteniendo datos del clima...</div>;
  }

  return (
    <>
      <div className="text-center text-3xl p-2 text-black dark:text-white">{weatherData.city}</div>
      <div className="flex flex-col justify-center items-center">
        <img src={weatherData.img} width="80" height="80" alt="Condition" />
        <div className="text-6xl pb-2 text-black dark:text-white">
          <p>{weatherData.temp}°</p>
        </div>
        <div className="text-3xl pb-2 text-black dark:text-white">
          <p>{weatherData.time}</p>
        </div>
      </div>
      <div className="text-center text-black dark:text-white">{weatherData.condition}</div>
      <div className="flow-root p-2">
        <div className="float-left text-black dark:text-white">Humidity: {weatherData.humidity} %</div>
        <div className="float-right text-black dark:text-white">Wind: {weatherData.wind} kph</div>
        <div className="float-left text-black dark:text-white">Visibility: {weatherData.visibility} mi</div>
        <div className="float-right text-black dark:text-white">Gust: {weatherData.gust} kph</div>
      </div>
    </>
  );
};

export default WeatherDisplay;