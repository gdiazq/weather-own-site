'use client';

import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { i18n, Language } from '@/app/i18n';
import { WeatherResponse } from '@/app/types/weather';

interface SearchBarProps {
  setWeather: (weather: WeatherResponse | null) => void;
  lang: Language;
}

const SearchBar: React.FC<SearchBarProps> = ({ setWeather, lang }) => {
  const [location, setLocation] = useState('');
  const t = i18n[lang];

  const handleKeyUp = (key: string) => {
    if (key === 'Enter') {
      fetchWeather();
    }
  };

  const fetchWeather = async () => {
    if (!location.trim()) return;

    const res = await fetch(`/api/getWeatherTime?location=${encodeURIComponent(location)}`);
    if (!res.ok) return;

    const weatherData = (await res.json()) as WeatherResponse;
    if (weatherData) {
      setWeather(weatherData);
      setLocation('');
    }
  };

  return (
    <div className="flex items-center justify-center gap-x-4">
      <input
        className="p-2 rounded-md border text-black dark:text-white border-gray-300 focus:outline-none focus:ring focus:ring-blue-500"
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e.key)}
        placeholder={t.searchPlaceholder}
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
