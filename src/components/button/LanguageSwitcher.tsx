'use client';

import { i18n, Language } from '@/app/i18n';

type LanguageSwitcherProps = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageSwitcher = ({ lang, setLang }: LanguageSwitcherProps) => {
  return (
    <label className="flex items-center gap-2 text-sm text-black dark:text-white">
      <span className="sr-only">{i18n[lang].languageLabel}</span>
      <select
        className="rounded-md border border-gray-300 bg-white px-2 py-1 text-black focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-700 dark:bg-black dark:text-white"
        value={lang}
        onChange={(e) => setLang(e.target.value as Language)}
        aria-label={i18n[lang].languageLabel}
      >
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </label>
  );
};

export default LanguageSwitcher;
