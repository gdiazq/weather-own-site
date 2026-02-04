'use client';

import React, { useEffect, useState } from 'react';
import useGeolocation from '@/app/hook/useGeolocation';
import WeatherCard from '@/components/ui/WeatherCard';
import { i18n, Language } from '@/app/i18n';
import { WeatherResponse } from '@/app/types/weather';

type WeatherDisplayProps = {
  lang: Language;
};

const WeatherDisplay = ({ lang }: WeatherDisplayProps) => {
  const { location, error } = useGeolocation();
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const t = i18n[lang];

  useEffect(() => {
    const fetchWeather = async () => {
      if (location) {
        const res = await fetch(
          `/api/getWeatherCoords?lat=${encodeURIComponent(location.lat)}&lon=${encodeURIComponent(
            location.lon
          )}`
        );
        if (!res.ok) return;
        const data = (await res.json()) as WeatherResponse;
        setWeatherData(data);
      }
    };
    fetchWeather();
  }, [location]);

  if (error) {
    return (
      <div className="text-black dark:text-white">
        {t.errorPrefix}: {error}
      </div>
    );
  }

  if (!weatherData) {
    return <div className="text-black dark:text-white">{t.loading}</div>;
  }

  return <WeatherCard data={weatherData} lang={lang} />;
};

export default WeatherDisplay;
