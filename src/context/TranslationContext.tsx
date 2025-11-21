"use client";

import { createContext, useContext, useState, useEffect, useMemo, useCallback, ReactNode } from "react";
import fr from "../lang/fr.json";
import en from "../lang/en.json";

type Lang = "fr" | "en";
type Translations = typeof fr;

type TranslationContextType = {
  lang: Lang;
  translations: Translations;
  tr: (key: string) => string;
  switchLang: (lang: Lang) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) setLang(savedLang);
  }, []);

  const switchLang = (newLang: Lang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const translations = lang === "fr" ? fr : en;

  // function to translate via a key of the type "home.header.title""
  const tr = useCallback(
    (key: string): string => {
      const parts = key.split(".");
      let current: unknown = translations; // we start from the root object (fr or en)

      for (const part of parts) {
        if (current && typeof current === "object" && part in current) {
          current = (current as Record<string, unknown>)[part];
        } else {
          return key;
        }
      }

      return current;
    },
    [translations]
  );

  const value = useMemo(
    () => ({ lang, translations: translations, tr, switchLang }),
    [lang, translations, tr]
  );

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) throw new Error("useTranslation must be used within a TranslationProvider");
  return context;
}