'use server'

export const getWeather = async (location: string) => {
    const api_url = `http://api.weatherapi.com/v1/current.json?key=${process.env.API_WEATHER}&q=${location}`
  
    if (location) {
      try {
        const res = await fetch(api_url);
        const data = await res.json();
        if (data) {
            const time = data.location.localtime.slice(-5)
            return {
                country: data.location.country,
                city: data.location.name,
                time: time,
                temp: data.current.temp_c,
                humidity: data.current.humidity,
                wind: data.current.wind_kph,
                gust: data.current.gust_kph,
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