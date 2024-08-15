'use client'

import { useState } from 'react';
import { getWeather } from '@/app/api/getWeatherTime';

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
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        className="block bg-slate-700 text-white rounded-lg opacity-70 pl-10 p-2"
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
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">GO</span>
      </button>
    </div>
  );
};

export default SearchBar;