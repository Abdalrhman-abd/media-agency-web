import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslations from './locales/ar/translation.json';
import enTranslations from './locales/en/translation.json';
i18n
  .use(initReactI18next)
  .init({
    resources: {
      ar: { translation: arTranslations },
      en: { translation: enTranslations },
    },
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });
export default i18n;
