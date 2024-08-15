'use client';
import Image from 'next/image';
import { useState } from 'react';
import SearchBar from '@/components/ui/form/SearchBar';
import { ThemeSwitcher } from '@/components/button/ThemeSwitcher';
import WeatherDisplay from '@/components/ui/form/WeatherDisplay';

export default function Home() {
  const [weather, setWeather] = useState<JSX.Element | null>(null);

  return (
    <>
      <header className="flex flex-row items-center justify-between p-4">
        <Image src="/logo.png" width={80} height={80} priority={true} alt="logo" />
        <nav className="flex items-center justify-center gap-x-5">
          <SearchBar setWeather={setWeather}/>
          <ThemeSwitcher />
        </nav>
      </header>

      {weather && (
        <div className="flex w-full p-8 justify-center">
          <div className="w-full max-w-xs">
            <div className="mb-4">
              <div className=" flex flex-col bg-white dark:bg-black shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 opacity-80">
                {weather}
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex w-full p-8 justify-center">
        <div className="w-full max-w-xs">
          <div className="mb-4">
            <div className=" flex flex-col bg-white dark:bg-black shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 opacity-80">
              <WeatherDisplay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}