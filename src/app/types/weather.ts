export type WeatherResponse = {
  country?: string;
  city: string;
  time: string;
  temp: number | null;
  humidity: number | null;
  wind: number;
  gust: number;
  visibility: number;
  condition: string;
  img: string;
};
