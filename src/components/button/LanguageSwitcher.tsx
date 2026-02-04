'use client';

import { i18n, Language } from '@/app/i18n';

type LanguageSwitcherProps = {
  lang: Language;
  setLang: (lang: Language) => void;
};

const LanguageSwitcher = ({ lang, setLang }: LanguageSwitcherProps) => {
  return (
    <label className="flex items-center text-black dark:text-white">
      <span className="sr-only">{i18n[lang].languageLabel}</span>
      <select
        className="h-8 rounded-full border border-black/10 bg-white/70 px-3 text-xs font-semibold uppercase tracking-wider text-black focus:outline-none focus:ring-2 focus:ring-cyan-300 dark:border-white/10 dark:bg-black/40 dark:text-white"
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
