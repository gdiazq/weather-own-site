export type Language = 'es' | 'en';

export const i18n = {
  es: {
    humidity: 'Humedad',
    wind: 'Viento',
    visibility: 'Visibilidad',
    gust: 'Ráfaga',
    loading: 'Obteniendo datos del clima...',
    errorPrefix: 'Error',
    searchPlaceholder: 'Ubicación (ej. París)',
    languageLabel: 'Idioma',
  },
  en: {
    humidity: 'Humidity',
    wind: 'Wind',
    visibility: 'Visibility',
    gust: 'Gust',
    loading: 'Fetching weather data...',
    errorPrefix: 'Error',
    searchPlaceholder: 'Location (e.g. Paris)',
    languageLabel: 'Language',
  },
} as const;
