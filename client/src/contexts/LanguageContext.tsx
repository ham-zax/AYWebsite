
import React, { createContext, useContext, useState } from "react";

export type Language = "en" | "es" | "fr" | "de";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.docs": "Documentation",
    "theme.toggle": "Toggle theme",
    "lang.english": "English",
    "lang.spanish": "Spanish",
    "lang.french": "French",
    "lang.german": "German",
    // Add more translations as needed
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.docs": "Documentación",
    "theme.toggle": "Cambiar tema",
    "lang.english": "Inglés",
    "lang.spanish": "Español",
    "lang.french": "Francés",
    "lang.german": "Alemán",
    // Add more translations
  },
  fr: {
    "nav.home": "Accueil",
    "nav.features": "Fonctionnalités",
    "nav.pricing": "Tarifs",
    "nav.docs": "Documentation",
    "theme.toggle": "Changer de thème",
    "lang.english": "Anglais",
    "lang.spanish": "Espagnol",
    "lang.french": "Français",
    "lang.german": "Allemand",
    // Add more translations
  },
  de: {
    "nav.home": "Startseite",
    "nav.features": "Funktionen",
    "nav.pricing": "Preise",
    "nav.docs": "Dokumentation",
    "theme.toggle": "Theme umschalten",
    "lang.english": "Englisch",
    "lang.spanish": "Spanisch",
    "lang.french": "Französisch",
    "lang.german": "Deutsch",
    // Add more translations
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLang = localStorage.getItem("language") as Language;
    return savedLang || "en";
  });

  const changeLanguage = (lang: Language) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
