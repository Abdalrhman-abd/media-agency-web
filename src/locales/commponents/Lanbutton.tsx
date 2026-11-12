import { useTranslation } from 'react-i18next';

function Langbutton() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language.startsWith('ar') ? 'en' : 'ar';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language.startsWith('ar') ? 'English' : 'العربية'}
    </button>
  );
}

export default Langbutton;