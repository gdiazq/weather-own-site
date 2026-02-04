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
    <div className="flex items-center gap-2">
      <input
        className="w-40 bg-transparent text-sm text-black placeholder:text-gray-500 focus:outline-none dark:text-white dark:placeholder:text-gray-400 sm:w-56"
        type="text"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyUp={(e) => handleKeyUp(e.key)}
        placeholder={t.searchPlaceholder}
      />
      <button
        className="grid h-8 w-8 place-items-center rounded-full bg-cyan-500 text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
        onClick={fetchWeather}
        aria-label="Search"
      >
        <GoSearch />
      </button>
    </div>
  );
};

export default SearchBar;
