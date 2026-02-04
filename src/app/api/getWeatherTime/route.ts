import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if (!location) {
    return NextResponse.json({ error: 'Missing location' }, { status: 400 });
  }

  const apiKey = process.env.API_WEATHER;
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API key' }, { status: 500 });
  }

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(
    location
  )}`;

  try {
    const res = await fetch(apiUrl, { cache: 'no-store' });
    if (!res.ok) {
      return NextResponse.json({ error: 'Upstream error' }, { status: 502 });
    }

    const data = await res.json();
    const time = data.location?.localtime?.slice(-5) ?? '';

    return NextResponse.json({
      country: data.location?.country ?? '',
      city: data.location?.name ?? '',
      time,
      temp: data.current?.temp_c ?? null,
      humidity: data.current?.humidity ?? null,
      wind: data.current?.wind_kph ?? 0,
      gust: data.current?.gust_kph ?? 0,
      visibility: data.current?.vis_miles ?? 0,
      condition: data.current?.condition?.text ?? '',
      img: data.current?.condition?.icon ?? '',
    });
  } catch (error) {
    console.error('Error fetching weather by location:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
