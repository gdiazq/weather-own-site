'use server'

export const getWeatherTime = async (location: string) => {
    const api_url = `http://api.weatherapi.com/v1/current.json?key=${process.env.AUTH_API_KEY}&q=${location}`
  
    if (location) {
        try {
            const response = await fetch(api_url)
            const data = await response.json()
            if (data) {
                const api_data = {
                    country: data.location.country,
                    city: data.current.name,
                    temp: data.current.temp_c,
                    humidity: data.current.humidity,
                    wind: data.current.wind_kph,
                    gust: data.current.gust_kph,
                    visibility: data.current.vis_km,
                    condition: data.current.condition.text,
                    img: data.current.condition.icon
                }
                return api_data
            }
        } catch (error) {
            console.error(error)
        }
    }
}