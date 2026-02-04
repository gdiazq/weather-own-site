import { i18n, Language } from '@/app/i18n';
import { WeatherResponse } from '@/app/types/weather';

type WeatherCardProps = {
  data: WeatherResponse;
  lang: Language;
};

const WeatherCard = ({ data, lang }: WeatherCardProps) => {
  const t = i18n[lang];
  const conditionMap: Record<string, { es: string; en: string }> = {
    clear: { en: 'Clear', es: 'Despejado' },
    sunny: { en: 'Sunny', es: 'Soleado' },
    cloudy: { en: 'Cloudy', es: 'Nublado' },
    overcast: { en: 'Overcast', es: 'Cubierto' },
    mist: { en: 'Mist', es: 'Neblina' },
    fog: { en: 'Fog', es: 'Niebla' },
    rain: { en: 'Rain', es: 'Lluvia' },
    drizzle: { en: 'Drizzle', es: 'Llovizna' },
    snow: { en: 'Snow', es: 'Nieve' },
    thunder: { en: 'Thunder', es: 'Trueno' },
    storm: { en: 'Storm', es: 'Tormenta' },
  };
  const conditionKey = data.condition.trim().toLowerCase();
  const matchedKey = Object.keys(conditionMap).find((key) =>
    conditionKey.includes(key)
  );
  const condition =
    (matchedKey ? conditionMap[matchedKey]?.[lang] : undefined) ?? data.condition;

  const rows = [
    `${t.humidity}: ${data.humidity} %`,
    `${t.wind}: ${data.wind} kph`,
    `${t.visibility}: ${data.visibility} mi`,
    `${t.gust}: ${data.gust} kph`,
  ];

  return (
    <>
      <div className="text-center text-3xl p-2 text-black dark:text-white">{data.city}</div>
      <div className="flex flex-col justify-center items-center">
        <img src={data.img} width="80" height="80" alt="Condition" />
        <div className="text-6xl pb-2 text-black dark:text-white">
          <p>{data.temp}°</p>
        </div>
        <div className="text-3xl pb-2 text-black dark:text-white">
          <p>{data.time}</p>
        </div>
      </div>
      <div className="text-center text-black dark:text-white">{condition}</div>
      <div className="flex flex-col items-center gap-2 p-2 text-black dark:text-white">
        {rows.map((row) => (
          <div key={row} className="whitespace-nowrap text-center">
            {row}
          </div>
        ))}
      </div>
    </>
  );
};

export default WeatherCard;
