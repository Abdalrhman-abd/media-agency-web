import React from 'react';
import { useTranslation } from 'react-i18next';
interface LanguageSwitcherProps {
  id?: string;
  className?: string;
}
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  id,
  className = 'brand-gradient text-white',
}) => {
  const { i18n } = useTranslation();
  const isArabic = (i18n.resolvedLanguage || i18n.language || 'ar').startsWith(
    'ar',
  );
  const toggleLanguage = (): void => {
    void i18n.changeLanguage(isArabic ? 'en' : 'ar');
  };
  return (
    <button
      id={id}
      type="button"
      onClick={toggleLanguage}
      aria-label={isArabic ? 'Switch to English' : 'التبديل إلى العربية'}
      className={`decoration-0 text-center rounded-xl cursor-pointer hover:scale-99 active:scale-95 inline-block px-3 py-2 text-sm lg:w-20 lg:p-3 lg:mt-4 lg:text-base ${className}`}
    >
      {' '}
      <span className="lg:hidden"> {isArabic ? 'EN' : 'AR'} </span>{' '}
      <span className="hidden lg:inline">
        {' '}
        {isArabic ? 'English' : 'العربية'}{' '}
      </span>{' '}
    </button>
  );
};
export default LanguageSwitcher;
