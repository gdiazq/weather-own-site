'use server'

// src/app/api/getWeatherTime.ts
export const getWeather = async (location: string) => {
    const api_key = '19a08913994b404587152504230704';
    const api_url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${location}`;
  
    if (location) {
      try {
        const res = await fetch(api_url);
        const data = await res.json();
        if (data) {
          return {
            country: data.location.country,
            city: data.location.name,
            temp: data.current.temp_f,
            humidity: data.current.humidity,
            wind: data.current.wind_mph,
            gust: data.current.gust_mph,
            visibility: data.current.vis_miles,
            condition: data.current.condition.text,
            img: data.current.condition.icon,
          };
        }
      } catch (err) {
        console.error(err);
        return null;
      }
    }
    return null;
  };