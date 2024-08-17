'use server'

import moment from 'moment-timezone'

export const getWeatherData = async (lat: number, lon: number) => {
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API}&units=metric`

  try {
    const response = await fetch(api_url);
    const data = await response.json();
    if (data) {
      const timezoneOffset = data.timezone;
      const hoursOffset = timezoneOffset / 3600;
      const timezoneName = `Etc/GMT${hoursOffset > 0 ? '-' : '+'}${Math.abs(hoursOffset)}`;
      const time = moment().tz(timezoneName).format('HH:mm');
      return {
      city: data.name,
      img: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temp: data.main.temp,
      time: time,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      wind: data.wind.speed?? 0,
      visibility: data.visibility / 1000,
      gust: data.wind.gust?? 0,
    };
    }
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    return null;
  }
};