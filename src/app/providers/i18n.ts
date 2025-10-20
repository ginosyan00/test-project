import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export function initializeI18n() {
  if (i18n.isInitialized) return i18n;

  i18n
    .use(initReactI18next)
    .init({
      lng: localStorage.getItem('lang') || 'en',
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      resources: {},
    });

  // Load JSON files dynamically from public/locales
  const supported = ['en', 'hy', 'ru'] as const;
  supported.forEach(async (lng) => {
    const response = await fetch(`/locales/${lng}/common.json`);
    const data = await response.json();
    i18n.addResourceBundle(lng, 'common', data.common, true, true);
  });

  return i18n;
}
