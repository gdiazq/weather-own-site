'use client'

import { Header } from '@/components/layout/Header';
import { useState } from 'react';

export default function Home() {
  const [weather, setWeather] = useState(null);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl md:text-5xl font-semibold text-black dark:text-white drop-shadow-md">
          Weather On Day
        </h1>
        <div className="flex w-full p-20 justify-center items-center">
          <div className="w-full max-w-xs mb-4">
            <div className="bg-white shadow-lg rounded-3xl px-8 pt-6 pb-8 mb-4 opacity-80">
              Weather
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
