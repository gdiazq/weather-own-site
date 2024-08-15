'use client'

import { useState } from 'react';
import { getWeather } from '@/app/api/getWeatherTime';
import { GoSearch } from "react-icons/go";

interface SearchBarProps {
    setWeather: (weather: JSX.Element) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setWeather }) => {
  const [location, setLocation] = useState('');

  const handleKeyUp = (key: string) => {
    if (key === 'Enter') {
      fetchWeather();
    }
  };

  const fetchWeather = async () => {
    const weatherData = await getWeather(location);
    if (weatherData) {
      setWeather(
        <>
          <div className="text-center text-2xl p-2 text-black dark:text-white">{weatherData.city}</div>
          <div className="flex justify-center">
            <div className="flow-root">
              <div className="float-left">
                <img src={weatherData.img} width="80" height="80" alt="Condition" />
              </div>
              <div className="float-left text-6xl degrees text-black dark:text-white">{weatherData.temp}</div>
            </div>
          </div>
          <div className="text-center text-gray-600">{weatherData.condition}</div>
          <div className="flow-root p-2">
            <div className="float-left text-gray-600">Humidity: {weatherData.humidity} %</div>
            <div className="float-right text-gray-600">Wind: {weatherData.wind} mph</div>
            <div className="float-left text-gray-600">Visibility: {weatherData.visibility} mi</div>
            <div className="float-right text-gray-600">Gust: {weatherData.gust} mph</div>
          </div>
        </>
      );
      setLocation('');
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-4">
      <input
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e.key)}
        placeholder="Location (ie. Paris)"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-2 p-2.5 rounded-lg"
        onClick={fetchWeather}
      >
        <GoSearch />
      </button>
    </div>
  );
};

export default SearchBar;