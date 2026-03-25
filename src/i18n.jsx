"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import ptCommon from "./locales/pt/common.json";
import enCommon from "./locales/en/common.json";
import esCommon from "./locales/es/common.json";

const resources = {
  pt: ptCommon,
  en: enCommon,
  es: esCommon,
};

const fallbackLanguage = "pt";

const LocalizationContext = createContext({
  language: fallbackLanguage,
  setLanguage: () => {},
});

const resolveValue = (resource, path) => {
  if (path == null || path === "") return resource;
  return path.split(".").reduce((current, chunk) => {
    if (current === undefined || current === null) return undefined;
    return current[chunk];
  }, resource);
};

export const LocalizationProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") {
      return fallbackLanguage;
    }
    return localStorage.getItem("locale") || fallbackLanguage;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("locale", language);
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>
  );
};

export const useLocalization = () => useContext(LocalizationContext);

export const useTranslation = () => {
  const { language, setLanguage } = useLocalization();

  const t = useCallback(
    (path, options = {}) => {
      const resource = resources[language] || resources[fallbackLanguage];
      const value = resolveValue(resource, path);
      if (value === undefined) {
        return path;
      }
      if (options.returnObjects) {
        return value;
      }
      if (typeof value === "object") {
        return path;
      }
      return value;
    },
    [language]
  );

  return { t, language, setLanguage };
};
