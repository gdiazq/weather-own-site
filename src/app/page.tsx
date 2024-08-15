'use client';

import { useState } from 'react';
import SearchBar from '@/components/ui/form/SearchBar';
import { Header } from '@/components/layout/Header';

export default function Home() {
  const [weather, setWeather] = useState<JSX.Element | null>(null);

  return (
    <>
      <nav className="flex items-center justify-center py-4 bg-gray-100 w-full m-0 opacity-90">
        <SearchBar setWeather={setWeather} />
      </nav>

      {weather && (
        <div className="flex w-full p-20 justify-center">
          <div className="w-full max-w-xs">
            <div className="mb-4">
              <div className="bg-white shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 opacity-80">
                {weather}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}