import React, { createContext, useContext, useState } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (idText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
<<<<<<< HEAD
    const saved = localStorage.getItem('nayaka_language');
=======
    const saved = localStorage.getItem('kaffa_language');
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
    if (saved === 'id' || saved === 'en') return saved;
    return 'id'; // Default to Indonesian
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
<<<<<<< HEAD
    localStorage.setItem('nayaka_language', lang);
=======
    localStorage.setItem('kaffa_language', lang);
>>>>>>> bc773b7db2f2c47e389b76fb4aac0f17dd9f3743
  };

  const t = (idText: string, enText: string) => {
    return language === 'id' ? idText : enText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
