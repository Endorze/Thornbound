'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'sv';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Import translations
import { translations } from '../data/translations';
import { getDataByLanguage } from '../data/dataIndex';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  // Load saved language preference
  useEffect(() => {
    const saved = localStorage.getItem('thornbound-language') as Language;
    if (saved && (saved === 'en' || saved === 'sv')) {
      setLanguage(saved);
    }
  }, []);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('thornbound-language', language);
  }, [language]);

    const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && value !== null && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${language}`);
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useTranslatedData() {
  const { language } = useLanguage();
  return getDataByLanguage(language);
}