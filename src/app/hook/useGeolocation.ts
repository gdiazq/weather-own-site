// src/app/hooks/useGeolocation.ts
import { useEffect, useState } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalización no es soportada en este navegador.');
      return;
    }

    const success = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ lat: latitude, lon: longitude });
    };

    const failure = (error: GeolocationPositionError) => {
      setError(error.message);
    };

    navigator.geolocation.getCurrentPosition(success, failure);
  }, []);

  return { location, error };
};

export default useGeolocation;