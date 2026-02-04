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
      <header className="flex flex-row items-center justify-between p-4">
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
        <nav className="flex items-center justify-center gap-x-3">
          <SearchBar setWeather={setWeather} lang={lang} />
          <LanguageSwitcher lang={lang} setLang={setLang} />
          <ThemeSwitcher />
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
