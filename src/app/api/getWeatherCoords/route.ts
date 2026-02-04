import { NextResponse } from 'next/server';
import moment from 'moment-timezone';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Missing coordinates' }, { status: 400 });
  }

  const apiKey = process.env.OPEN_WEATHER_API;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(
    lat
  )}&lon=${encodeURIComponent(lon)}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream error' }, { status: 502 });
    }

    const data = await res.json();
    const timezoneOffset = data.timezone ?? 0;
    const hoursOffset = timezoneOffset / 3600;
    const timezoneName = `Etc/GMT${hoursOffset > 0 ? '-' : '+'}${Math.abs(hoursOffset)}`;
    const time = moment().tz(timezoneName).format('HH:mm');

    return NextResponse.json({
      city: data.name ?? '',
      img: data.weather?.[0]?.icon
        ? `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
        : '',
      temp: data.main?.temp ?? null,
      time,
      condition: data.weather?.[0]?.main ?? '',
      humidity: data.main?.humidity ?? null,
      wind: data.wind?.speed ?? 0,
      visibility: data.visibility ? data.visibility / 1000 : 0,
      gust: data.wind?.gust ?? 0,
    });
  } catch (error) {
    console.error('Error fetching weather by coords:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
