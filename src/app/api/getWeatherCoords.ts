'use server'

export const getWeatherData = async (lat: number, lon: number) => {
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_API}&units=metric`

  try {
    const response = await fetch(api_url);
    const data = await response.json();
    if (data) {
      return {
      city: data.name,
      img: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temp: data.main.temp,
      time: new Date(data.dt * 1000).toLocaleString(),
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      wind: data.wind.speed * 3.6,
      visibility: data.visibility / 1000,
      gust: data.wind.gust * 3.6,
    };
    }
    // Asegúrate de ajustar esto según la estructura de datos que devuelve tu API
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    return null; // Maneja el error según sea necesario
  }
};