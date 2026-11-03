import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
export default function LanguageDirection() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const updateDirection = (language?: string) => {
      const currentLanguage =
        language || i18n.resolvedLanguage || i18n.language || 'ar';
      const isArabic = currentLanguage.toLowerCase().startsWith('ar');
      document.documentElement.lang = isArabic ? 'ar' : 'en';
      document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    };
    updateDirection();
    i18n.on('languageChanged', updateDirection);
    return () => {
      i18n.off('languageChanged', updateDirection);
    };
  }, [i18n]);
  return null;
}
