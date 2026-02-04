'use client';
import Image from 'next/image';
import { useState } from 'react';
import SearchBar from '@/components/ui/SearchBar';
import { ThemeSwitcher } from '@/components/button/ThemeSwitcher';
import WeatherDisplay from '@/components/ui/WeatherDisplay';
import WeatherCard from '@/components/ui/WeatherCard';
import { WeatherResponse } from '@/app/types/weather';
import WeatherContainer from '@/components/ui/WeatherContainer';
import LanguageSwitcher from '@/components/button/LanguageSwitcher';
import { Language } from '@/app/i18n';

export default function Home() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);
  const [lang, setLang] = useState<Language>('es');

  return (
    <>
      <header className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:justify-between">
        <Image
          src="/banner-light.svg"
          width={320}
          height={94}
          priority={true}
          alt="GEDIAZQ logo"
          className="h-12 w-auto sm:h-14 md:h-16 dark:hidden"
        />
        <Image
          src="/banner-dark.svg"
          width={320}
          height={94}
          priority={true}
          alt="GEDIAZQ logo"
          className="hidden h-12 w-auto sm:h-14 md:h-16 dark:block"
        />
        <nav className="flex w-full items-center justify-between gap-3 rounded-full bg-white/70 px-4 py-2 ring-1 ring-black/10 backdrop-blur dark:bg-black/50 dark:ring-white/10 md:w-auto md:justify-start">
          <SearchBar setWeather={setWeather} lang={lang} />
          <div className="flex items-center gap-2">
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <ThemeSwitcher />
          </div>
        </nav>
      </header>

      {weather && (
        <WeatherContainer>
          <WeatherCard data={weather} lang={lang} />
        </WeatherContainer>
      )}
      <WeatherContainer>
        <WeatherDisplay lang={lang} />
      </WeatherContainer>
    </>
  );
}
