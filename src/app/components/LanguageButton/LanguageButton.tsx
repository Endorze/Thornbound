'use client';

import { useLanguage } from "../../../contexts/LanguageContext";

const LanguageButton = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'sv' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-4 right-4 bg-black/80 text-white px-4 py-2 rounded-md hover:bg-black transition-colors z-50"
    >
      {language === 'en' ? 'Svenska' : 'English'}
    </button>
  );
};

export default LanguageButton;